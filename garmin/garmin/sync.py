"""Pull Garmin Connect stats into this repo's data/ folder."""

from __future__ import annotations

import json
from datetime import date, datetime, timedelta
from pathlib import Path
from typing import Any, Callable

from garminconnect import Garmin

from garmin.client import ROOT

TRAINING_START = date(2026, 7, 20)
RACE_DAY = date(2026, 9, 27)
DATA_DIR = ROOT / "data"


def _safe(label: str, fn: Callable[[], Any]) -> dict[str, Any]:
    try:
        return {"ok": True, "data": fn()}
    except Exception as exc:  # noqa: BLE001 — keep one failed endpoint from aborting sync
        return {"ok": False, "error": f"{type(exc).__name__}: {exc}"}


def _meters_to_miles(meters: float | None) -> float | None:
    if meters is None:
        return None
    return round(meters / 1609.344, 2)


def _pace_min_per_mile(distance_m: float | None, duration_s: float | None) -> str | None:
    if not distance_m or not duration_s or distance_m <= 0:
        return None
    minutes = duration_s / 60 / (distance_m / 1609.344)
    whole = int(minutes)
    secs = int(round((minutes - whole) * 60))
    if secs == 60:
        whole += 1
        secs = 0
    return f"{whole}:{secs:02d}"


def _seconds_to_hm(seconds: float | None) -> str | None:
    if seconds is None:
        return None
    total = int(round(seconds / 60))
    hours, minutes = divmod(total, 60)
    return f"{hours}h {minutes:02d}m"


def summarize_sleep(payload: dict[str, Any] | None) -> dict[str, Any] | None:
    if not payload:
        return None
    daily = payload.get("dailySleepDTO") or payload
    if not daily.get("sleepTimeSeconds") and not daily.get("calendarDate"):
        return None
    scores = daily.get("sleepScores") or {}
    overall = scores.get("overall") or {}
    return {
        "date": daily.get("calendarDate"),
        "score": overall.get("value"),
        "qualifier": overall.get("qualifierKey"),
        "asleep": _seconds_to_hm(daily.get("sleepTimeSeconds")),
        "deep": _seconds_to_hm(daily.get("deepSleepSeconds")),
        "light": _seconds_to_hm(daily.get("lightSleepSeconds")),
        "rem": _seconds_to_hm(daily.get("remSleepSeconds")),
        "awake": _seconds_to_hm(daily.get("awakeSleepSeconds")),
        "avg_sleep_hr": daily.get("averageSleepingHeartRate"),
        "avg_spo2": daily.get("averageSpO2Value"),
        "avg_respiration": daily.get("averageRespirationValue"),
    }


RUN_TYPES = {"running", "treadmill_running", "trail_running", "track_running", "indoor_running"}
CYCLE_TYPES = {"cycling", "indoor_cycling", "virtual_ride", "road_biking", "gravel_cycling", "mountain_biking"}
SWIM_TYPES = {"swimming", "lap_swimming", "open_water_swimming"}
STRENGTH_TYPES = {
    "strength_training",
    "fitness_equipment",
    "indoor_cardio",
    "hiit",
    "yoga",
    "pilates",
    "training",
}


def activity_group(type_key: str | None) -> str:
    key = (type_key or "other").lower()
    if key in RUN_TYPES:
        return "running"
    if key in CYCLE_TYPES:
        return "cycling"
    if key in SWIM_TYPES:
        return "swimming"
    if key in STRENGTH_TYPES:
        return "strength"
    return "other"


def summarize_activity(activity: dict[str, Any]) -> dict[str, Any]:
    distance_m = activity.get("distance")
    duration_s = activity.get("duration") or activity.get("movingDuration")
    activity_type = activity.get("activityType") or {}
    type_key = activity_type.get("typeKey")
    group = activity_group(type_key)
    avg_speed = activity.get("averageSpeed")  # m/s
    mph = round(avg_speed * 2.236936, 1) if avg_speed else None
    return {
        "id": activity.get("activityId"),
        "name": activity.get("activityName"),
        "type": type_key,
        "group": group,
        "start": activity.get("startTimeLocal"),
        "distance_m": round(distance_m, 1) if distance_m else None,
        "distance_mi": _meters_to_miles(distance_m) if group != "swimming" else None,
        "distance_yd": round(distance_m * 1.09361) if group == "swimming" and distance_m else None,
        "duration_min": round(duration_s / 60, 1) if duration_s else None,
        "pace_min_mi": _pace_min_per_mile(distance_m, duration_s) if group == "running" else None,
        "avg_mph": mph if group == "cycling" else None,
        "avg_hr": activity.get("averageHR"),
        "calories": activity.get("calories"),
    }


def pull_stats(
    client: Garmin,
    *,
    since: date | None = None,
    until: date | None = None,
) -> dict[str, Any]:
    since = since or TRAINING_START
    until = until or date.today()
    today = until.isoformat()
    start = since.isoformat()

    profile = _safe("profile", client.get_full_name)
    summary = _safe("summary", lambda: client.get_user_summary(today))
    activities = _safe(
        "activities",
        lambda: client.get_activities_by_date(start, today),
    )
    training_status = _safe("training_status", lambda: client.get_training_status(today))
    max_metrics = _safe("max_metrics", lambda: client.get_max_metrics(today))
    race_predictions = _safe("race_predictions", client.get_race_predictions)
    distance_progress = _safe(
        "distance_progress",
        lambda: client.get_progress_summary_between_dates(start, today, "distance"),
    )
    last_night = _safe("sleep", lambda: client.get_sleep_data(today))
    last_night_summary = summarize_sleep(last_night.get("data") if last_night["ok"] else None)
    if last_night["ok"] and last_night_summary is None:
        yesterday = (until - timedelta(days=1)).isoformat()
        last_night = _safe("sleep", lambda: client.get_sleep_data(yesterday))
        last_night_summary = summarize_sleep(
            last_night.get("data") if last_night["ok"] else None
        )
    sleep_daily = _safe("sleep_daily", lambda: client.get_sleep_daily(start, today))

    raw_activities = activities.get("data") if activities["ok"] else []
    if not isinstance(raw_activities, list):
        raw_activities = []
    summarized = [summarize_activity(a) for a in raw_activities]
    by_group: dict[str, list[dict[str, Any]]] = {}
    for item in summarized:
        by_group.setdefault(item["group"], []).append(item)

    snapshot = {
        "pulled_at": datetime.now().isoformat(timespec="seconds"),
        "range": {"since": start, "until": today},
        "race_day": RACE_DAY.isoformat(),
        "profile_name": profile.get("data") if profile["ok"] else None,
        "today_summary": summary,
        "activities": {
            "ok": activities["ok"],
            "error": activities.get("error"),
            "count": len(summarized),
            "by_group": {group: len(items) for group, items in by_group.items()},
            "items": summarized,
        },
        "runs": {
            "ok": activities["ok"],
            "error": activities.get("error"),
            "count": len(by_group.get("running", [])),
            "activities": by_group.get("running", []),
        },
        "training_status": training_status,
        "max_metrics": max_metrics,
        "race_predictions": race_predictions,
        "distance_progress": distance_progress,
        "last_night_sleep": {
            "ok": last_night["ok"],
            "error": last_night.get("error"),
            "summary": last_night_summary,
            "data": last_night.get("data") if last_night["ok"] else None,
        },
        "sleep_daily": sleep_daily,
    }
    return snapshot


def write_snapshot(snapshot: dict[str, Any]) -> Path:
    DATA_DIR.mkdir(exist_ok=True)
    stamped = DATA_DIR / f"sync_{date.today().isoformat()}.json"
    latest = DATA_DIR / "latest.json"
    payload = json.dumps(snapshot, indent=2, default=str)
    stamped.write_text(payload)
    latest.write_text(payload)
    return latest
