"""
Agent 1 — Video Editor

Steps:
  1. Download raw video from Google Drive
  2. Add fade-in / fade-out transitions
  3. Overlay the brand logo
  4. Generate & merge voiceover
  5. Render final MP4
"""

from __future__ import annotations

from agents.pipeline.state import PipelineState
from agents.utils.logger import get_logger

logger = get_logger(__name__)


class VideoEditorAgent:
    def run(self, state: PipelineState) -> None:
        from agents.agent1_video_editor.drive_downloader import download_from_drive
        from agents.agent1_video_editor.video_processor import add_transitions, render_final
        from agents.agent1_video_editor.logo_overlay import overlay_logo
        from agents.agent1_video_editor.voiceover import generate_voiceover, merge_voiceover

        meta = state.metadata

        # 1 — Download
        raw_path = download_from_drive(meta.drive_file_id)
        state.downloaded_video_path = raw_path
        meta.original_filename = raw_path.name
        logger.info("[Agent1] Downloaded → %s", raw_path)

        # 2 — Transitions
        with_transitions = add_transitions(raw_path)
        logger.info("[Agent1] Transitions → %s", with_transitions)

        # 3 — Logo overlay
        with_logo = overlay_logo(with_transitions)
        logger.info("[Agent1] Logo overlay → %s", with_logo)

        # 4 — Voiceover
        audio_path = generate_voiceover(meta)
        state.voiceover_path = audio_path
        with_vo = merge_voiceover(with_logo, audio_path)
        logger.info("[Agent1] Voiceover merged → %s", with_vo)

        # 5 — Final render
        final = render_final(with_vo)
        state.edited_video_path = final
        logger.info("[Agent1] Final video → %s", final)
