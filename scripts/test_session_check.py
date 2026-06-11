#!/usr/bin/env python3
"""Unit tests for the session-check freshness gate."""

import importlib.util
import unittest
from pathlib import Path

_MODULE_PATH = Path(__file__).resolve().parent / "session_check.py"
_spec = importlib.util.spec_from_file_location("session_check", _MODULE_PATH)
sc = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(sc)


class StaleManuscriptsTest(unittest.TestCase):
    INDEX = {
        "manuscripts": [
            {"name": "handbook", "file_sha": "aaa"},
            {"name": "protocols", "file_sha": "bbb"},
        ]
    }

    def test_unchanged_is_not_stale(self):
        disk = [("handbook", "aaa"), ("protocols", "bbb")]
        self.assertEqual(sc.stale_manuscripts(disk, self.INDEX), [])

    def test_changed_file_is_stale(self):
        disk = [("handbook", "aaa"), ("protocols", "CHANGED")]
        self.assertEqual(sc.stale_manuscripts(disk, self.INDEX), ["protocols"])

    def test_new_manuscript_not_in_index_is_stale(self):
        disk = [("handbook", "aaa"), ("appendices", "ccc")]
        self.assertEqual(sc.stale_manuscripts(disk, self.INDEX), ["appendices"])

    def test_no_index_means_everything_stale(self):
        disk = [("handbook", "aaa"), ("protocols", "bbb")]
        self.assertEqual(
            sc.stale_manuscripts(disk, None), ["handbook", "protocols"]
        )

    def test_index_without_file_sha_is_stale(self):
        index = {"manuscripts": [{"name": "handbook"}]}  # pre-2.2.0 index
        self.assertEqual(sc.stale_manuscripts([("handbook", "aaa")], index), ["handbook"])


class FileShaTest(unittest.TestCase):
    def test_file_sha_changes_with_bytes(self):
        import tempfile

        with tempfile.TemporaryDirectory() as d:
            p = Path(d) / "f.txt"
            p.write_text("one", encoding="utf-8")
            first = sc.file_sha(p)
            p.write_text("two", encoding="utf-8")
            self.assertNotEqual(first, sc.file_sha(p))


if __name__ == "__main__":
    unittest.main(verbosity=2)
