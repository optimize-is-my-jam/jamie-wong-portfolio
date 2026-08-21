#!/usr/bin/env python3
"""Log in to Garmin Connect and pull the latest synced stats.

Usage:
  python pull_stats.py              # reuse tokens, or log in from .env
  python pull_stats.py --force-login
  python pull_stats.py --since 2026-07-20
"""

from __future__ import annotations

import argparse
from datetime import date

from garmin.client import connect
from garmin.sync import TRAINING_START, pull_stats, write_snapshot


def _format_activity(activity: dict) -> str:
    start = (activity.get("start") or "")[:16]
    name = activity.get("name") or activity.get("type")
    group = activity.get("group")
    duration = activity.get("duration_min")
    dur = f"{duration:.0f} min" if duration else ""
    if group == "running":
        detail = f"{activity.get('distance_mi')} mi  {activity.get('pace_min_mi') or '--'}/mi"
    elif group == "cycling":
        mph = f"  {activity.get('avg_mph')} mph" if activity.get("avg_mph") else ""
        detail = f"{activity.get('distance_mi')} mi{mph}"
    elif group == "swimming":
        yards = activity.get("distance_yd")
        detail = f"{yards} yd" if yards else dur
    else:
        detail = dur
    return f"{start}  {detail}  {name}"


def main() -> None:
    parser = argparse.ArgumentParser(description="Pull Garmin Connect stats into data/")
    parser.add_argument(
        "--force-login",
        action="store_true",
        help="Ignore saved tokens and log in with .env credentials",
    )
    parser.add_argument(
        "--since",
        default=TRAINING_START.isoformat(),
        help="Start date YYYY-MM-DD (default: training plan start)",
    )
    parser.add_argument(
        "--mfa",
        default=None,
        help="One-time Garmin MFA code (authenticator, email, or SMS)",
    )
    args = parser.parse_args()
    since = date.fromisoformat(args.since)

    print("Connecting to Garmin Connect...")
    client = connect(force_login=args.force_login, mfa_code=args.mfa)
    print("Logged in. Pulling stats...")

    snapshot = pull_stats(client, since=since)
    path = write_snapshot(snapshot)

    print(f"Wrote {path}")
    all_acts = snapshot.get("activities") or {}
    if all_acts.get("ok"):
        counts = all_acts.get("by_group") or {}
        print(
            f"Activities since {since.isoformat()}: {all_acts['count']} "
            f"({', '.join(f'{n} {g}' for g, n in counts.items())})"
        )
        for activity in all_acts.get("items", []):
            print(f"  {_format_activity(activity)}")
    else:
        print(f"Could not fetch activities: {all_acts.get('error')}")

    sleep = snapshot.get("last_night_sleep") or {}
    summary = sleep.get("summary")
    if summary:
        score = summary.get("score")
        score_txt = f"score {score}" if score is not None else "no score"
        print(
            f"Last night ({summary.get('date')}): {summary.get('asleep')} asleep, "
            f"{score_txt} ({summary.get('qualifier') or 'n/a'})"
        )
        print(
            f"  deep {summary.get('deep')}  light {summary.get('light')}  "
            f"rem {summary.get('rem')}  awake {summary.get('awake')}"
        )
    elif sleep.get("error"):
        print(f"Could not fetch sleep: {sleep['error']}")
    else:
        print("No sleep data for last night yet.")


if __name__ == "__main__":
    main()
