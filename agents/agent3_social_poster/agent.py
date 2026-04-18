"""
Agent 3 — Social Media Poster

Posts the edited video to YouTube, Instagram, and TikTok.
In dry-run mode all uploads are skipped and placeholder IDs are stored.
"""

from __future__ import annotations

from agents.pipeline.state import PipelineState
from agents.utils.logger import get_logger

logger = get_logger(__name__)


class SocialPosterAgent:
    def run(self, state: PipelineState) -> None:
        from agents.agent3_social_poster.youtube_uploader import upload_to_youtube
        from agents.agent3_social_poster.instagram_uploader import upload_to_instagram
        from agents.agent3_social_poster.tiktok_uploader import upload_to_tiktok

        video = state.edited_video_path
        captions = state.captions
        dry = state.dry_run

        if video is None:
            raise RuntimeError("Agent 3 requires a valid edited_video_path from Agent 1.")

        # ── YouTube ──────────────────────────────────────────────
        try:
            video_id, url = upload_to_youtube(video, captions, dry_run=dry)
            state.results.youtube_video_id = video_id
            state.results.youtube_url = url
        except Exception as exc:
            logger.error("[Agent3] YouTube upload failed: %s", exc)
            state.results.errors.append(f"YouTube: {exc}")

        # ── Instagram ────────────────────────────────────────────
        # Instagram requires a public URL; in dry-run we skip the URL check.
        try:
            media_id = upload_to_instagram(
                video,
                captions,
                video_url="",   # populated externally when hosting video publicly
                dry_run=dry,
            )
            state.results.instagram_media_id = media_id
            if not dry:
                state.results.instagram_permalink = (
                    f"https://www.instagram.com/p/{media_id}/"
                )
        except Exception as exc:
            logger.error("[Agent3] Instagram upload failed: %s", exc)
            state.results.errors.append(f"Instagram: {exc}")

        # ── TikTok ───────────────────────────────────────────────
        try:
            share_id = upload_to_tiktok(video, captions, dry_run=dry)
            state.results.tiktok_share_id = share_id
        except Exception as exc:
            logger.error("[Agent3] TikTok upload failed: %s", exc)
            state.results.errors.append(f"TikTok: {exc}")
