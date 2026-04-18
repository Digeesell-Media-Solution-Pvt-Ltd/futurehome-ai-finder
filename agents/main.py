"""
AI Video Agent Pipeline — CLI entry point.

Usage:
    python -m agents.main --drive-id=<GOOGLE_DRIVE_FILE_ID> [OPTIONS]

Examples:
    # Full run
    python -m agents.main --drive-id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs5

    # Dry run (process video but skip social media uploads)
    python -m agents.main --drive-id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs5 --dry-run

    # With full metadata
    python -m agents.main \\
        --drive-id=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs5 \\
        --title="Luxury Apartments in Dubai Marina" \\
        --topic="2-bedroom off-plan apartments with marina views" \\
        --audience="property investors and expats" \\
        --dry-run
"""

from __future__ import annotations

import sys

import click

from agents.pipeline.orchestrator import Orchestrator
from agents.pipeline.state import VideoMetadata
from agents.utils.logger import get_logger

logger = get_logger("main")


@click.command()
@click.option("--drive-id", required=True, help="Google Drive file ID of the source video.")
@click.option("--title", default="", help="Video title (used for captions).")
@click.option("--topic", default="", help="Topic/subject of the video.")
@click.option("--description", default="", help="Brief description of the video content.")
@click.option("--audience", default="", help="Target audience description.")
@click.option(
    "--dry-run",
    is_flag=True,
    default=False,
    help="Process video and generate captions but skip social media uploads.",
)
def main(
    drive_id: str,
    title: str,
    topic: str,
    description: str,
    audience: str,
    dry_run: bool,
) -> None:
    """Run the full AI video editing and social media posting pipeline."""
    if dry_run:
        logger.info("DRY RUN mode enabled — social uploads will be skipped.")

    metadata = VideoMetadata(
        drive_file_id=drive_id,
        title=title,
        topic=topic,
        description=description,
        target_audience=audience,
    )

    orchestrator = Orchestrator(dry_run=dry_run)

    try:
        state = orchestrator.run(metadata)
    except Exception as exc:
        logger.error("Pipeline failed: %s", exc)
        sys.exit(1)

    if state.results.errors:
        logger.warning("Pipeline completed with %d error(s).", len(state.results.errors))
        sys.exit(2)

    logger.info("Pipeline completed successfully.")


if __name__ == "__main__":
    main()
