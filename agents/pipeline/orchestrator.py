"""
Orchestrator — runs Agent 1 → Agent 2 → Agent 3 in sequence.
Each agent receives the shared PipelineState and enriches it.
"""

from __future__ import annotations

from agents.pipeline.state import PipelineState, VideoMetadata
from agents.utils.logger import get_logger

logger = get_logger(__name__)


class Orchestrator:
    def __init__(self, dry_run: bool = False) -> None:
        self.dry_run = dry_run

    def run(self, metadata: VideoMetadata) -> PipelineState:
        state = PipelineState(metadata=metadata, dry_run=self.dry_run)

        logger.info("═══ Pipeline starting (dry_run=%s) ═══", self.dry_run)

        self._run_agent1(state)
        self._run_agent2(state)
        self._run_agent3(state)

        logger.info("═══ Pipeline complete ═══")
        logger.info("\n%s", state.summary())
        return state

    # ── private helpers ──────────────────────────────────────────

    def _run_agent1(self, state: PipelineState) -> None:
        logger.info("─── Agent 1: Video Editor ───")
        from agents.agent1_video_editor.agent import VideoEditorAgent
        VideoEditorAgent().run(state)

    def _run_agent2(self, state: PipelineState) -> None:
        logger.info("─── Agent 2: Caption Writer ───")
        from agents.agent2_caption_writer.agent import CaptionWriterAgent
        CaptionWriterAgent().run(state)

    def _run_agent3(self, state: PipelineState) -> None:
        logger.info("─── Agent 3: Social Poster ───")
        from agents.agent3_social_poster.agent import SocialPosterAgent
        SocialPosterAgent().run(state)
