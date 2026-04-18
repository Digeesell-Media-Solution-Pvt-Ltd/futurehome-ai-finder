"""
Centralised settings loaded from environment variables / .env file.
All agents import from here — no raw os.getenv() calls elsewhere.
"""

from __future__ import annotations

from pathlib import Path
from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    # ── Google ────────────────────────────────────────────────
    google_service_account_json: Path = Path("agents/config/service_account.json")
    google_oauth_client_secret: Path = Path("agents/config/client_secret.json")
    google_oauth_token_path: Path = Path("agents/config/youtube_token.json")

    # ── OpenAI ────────────────────────────────────────────────
    openai_api_key: str = ""
    openai_tts_voice: Literal["alloy", "echo", "fable", "onyx", "nova", "shimmer"] = "nova"

    # ── Anthropic ─────────────────────────────────────────────
    anthropic_api_key: str = ""
    anthropic_model: str = "claude-sonnet-4-6"

    # ── Instagram ─────────────────────────────────────────────
    instagram_access_token: str = ""
    instagram_account_id: str = ""

    # ── TikTok ────────────────────────────────────────────────
    tiktok_access_token: str = ""
    tiktok_open_id: str = ""

    # ── Branding ──────────────────────────────────────────────
    logo_path: Path = Path("agents/assets/logo.png")
    logo_position: Literal[
        "top-left", "top-right", "bottom-left", "bottom-right"
    ] = "bottom-right"
    logo_scale: float = 0.15

    # ── Pipeline ──────────────────────────────────────────────
    tmp_dir: Path = Path("agents/tmp")
    log_level: Literal["DEBUG", "INFO", "WARNING", "ERROR"] = "INFO"
    voiceover_script: str = ""
    brand_name: str = "FutureHome"


# Singleton — import this everywhere
settings = Settings()
