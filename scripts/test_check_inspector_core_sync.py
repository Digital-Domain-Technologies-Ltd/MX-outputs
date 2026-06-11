#!/usr/bin/env python3
"""Unit tests for the PDF inspector core drift guard."""

import importlib.util
import unittest
from pathlib import Path
from tempfile import TemporaryDirectory

_MODULE_PATH = Path(__file__).resolve().parent / "check_inspector_core_sync.py"
_spec = importlib.util.spec_from_file_location("check_inspector_core_sync", _MODULE_PATH)
cs = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(cs)


class DriftTest(unittest.TestCase):
    def _pair(self, d: str, canonical: str, mirror: str):
        a = Path(d) / "canonical.js"
        b = Path(d) / "mirror.js"
        a.write_text(canonical, encoding="utf-8")
        b.write_text(mirror, encoding="utf-8")
        return a, b

    def test_identical_copies_pass(self):
        with TemporaryDirectory() as d:
            a, b = self._pair(d, "export const X = 1;\n", "export const X = 1;\n")
            self.assertIsNone(cs.drift(a, b))

    def test_divergent_copies_flagged_with_line(self):
        with TemporaryDirectory() as d:
            a, b = self._pair(
                d,
                "line one\nline two — canonical\nline three\n",
                "line one\nline two — MIRROR\nline three\n",
            )
            reason = cs.drift(a, b)
            self.assertIsNotNone(reason)
            self.assertIn("line 2", reason)

    def test_trailing_extra_line_flagged(self):
        with TemporaryDirectory() as d:
            a, b = self._pair(d, "a\nb\n", "a\nb\nc\n")
            self.assertIsNotNone(cs.drift(a, b))

    def test_missing_mirror_is_drift(self):
        with TemporaryDirectory() as d:
            a = Path(d) / "canonical.js"
            a.write_text("x\n", encoding="utf-8")
            reason = cs.drift(a, Path(d) / "does-not-exist.js")
            self.assertIn("missing", reason)

    def test_real_repo_copies_are_in_sync(self):
        # The actual shipped copies must be byte-identical.
        if not cs.CANONICAL.exists() or not cs.MIRROR.exists():
            self.skipTest("inspector core copies not present")
        self.assertIsNone(cs.drift())


if __name__ == "__main__":
    unittest.main(verbosity=2)
