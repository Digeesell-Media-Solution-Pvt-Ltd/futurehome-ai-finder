"""
Agent 2 — Caption Writer

Reads video metadata from PipelineState and writes a CaptionsBundle back to it.
Also persists captions_bundle.json to agents/output/.
"""

from __future__ import annotations

from pathlib import Path

from agents.pipeline.state import PipelineState
from agents.utils.logger import get_logger

logger = get_logger(__name__)


class CaptionWriterAgent:
    def run(self, state: PipelineState) -> None:
        from agents.agent2_caption_writer.caption_generator import generate_captions

        captions = generate_captions(state.metadata)
        state.captions = captions

        # Persist captions to a JSON file for inspection / manual override
        out_path = Path("agents/output/captions_bundle.json")
        state.save_captions(out_path)
        logger.info("[Agent2] Captions saved → %s", out_path)
