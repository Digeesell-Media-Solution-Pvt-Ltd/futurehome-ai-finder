"""
Structured logger for the agent pipeline.
All agents use: from agents.utils.logger import get_logger
"""

from __future__ import annotations

import logging
import sys
from typing import Optional

from agents.config import settings

_FMT = "%(asctime)s | %(levelname)-8s | %(name)s | %(message)s"
_DATE_FMT = "%Y-%m-%d %H:%M:%S"


def get_logger(name: Optional[str] = None) -> logging.Logger:
    """Return a logger configured to the level set in settings."""
    logger = logging.getLogger(name or "agents")

    if not logger.handlers:
        handler = logging.StreamHandler(sys.stdout)
        handler.setFormatter(logging.Formatter(_FMT, datefmt=_DATE_FMT))
        logger.addHandler(handler)

    logger.setLevel(getattr(logging, settings.log_level, logging.INFO))
    logger.propagate = False
    return logger
