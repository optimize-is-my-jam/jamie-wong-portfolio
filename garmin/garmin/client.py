"""Garmin Connect authentication using credentials from .env."""

from __future__ import annotations

import os
import sys
from getpass import getpass
from pathlib import Path

from dotenv import load_dotenv
from garminconnect import (
    Garmin,
    GarminConnectAuthenticationError,
    GarminConnectConnectionError,
    GarminConnectTooManyRequestsError,
)

ROOT = Path(__file__).resolve().parent.parent


def load_env() -> None:
    load_dotenv(ROOT / ".env")


def token_store_path() -> Path:
    raw = os.getenv("GARMIN_TOKENS", ".garmin_tokens")
    path = Path(raw).expanduser()
    if not path.is_absolute():
        path = ROOT / path
    path.mkdir(mode=0o700, parents=True, exist_ok=True)
    return path


def _prompt_mfa(mfa_code: str | None) -> str:
    if mfa_code:
        return mfa_code.strip()
    env_code = (os.getenv("GARMIN_MFA_CODE") or "").strip()
    if env_code:
        return env_code
    if not sys.stdin.isatty():
        raise SystemExit(
            "Garmin MFA is required. Re-run with --mfa <code> from your "
            "authenticator app (or email/SMS if Garmin sent one)."
        )
    return input("Garmin MFA code: ").strip()


def connect(*, force_login: bool = False, mfa_code: str | None = None) -> Garmin:
    """Return an authenticated Garmin client.

    Reuses saved tokens when possible. Falls back to GARMIN_EMAIL /
    GARMIN_PASSWORD from .env (prompts if either is missing).
    """
    load_env()
    store = str(token_store_path())

    if not force_login:
        try:
            client = Garmin()
            client.login(store)
            return client
        except GarminConnectTooManyRequestsError:
            raise
        except (GarminConnectAuthenticationError, GarminConnectConnectionError, FileNotFoundError):
            pass

    email = (os.getenv("GARMIN_EMAIL") or "").strip()
    password = os.getenv("GARMIN_PASSWORD") or ""

    if not email:
        email = input("Garmin email: ").strip()
    if not password:
        password = getpass("Garmin password: ")

    if not email or not password:
        print(
            "Set GARMIN_EMAIL and GARMIN_PASSWORD in .env, then retry.",
            file=sys.stderr,
        )
        raise SystemExit(1)

    client = Garmin(
        email=email,
        password=password,
        prompt_mfa=lambda: _prompt_mfa(mfa_code),
    )
    client.login(store)
    return client
