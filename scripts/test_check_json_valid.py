#!/usr/bin/env python3
"""Unit tests for the JSON-validity check."""

import importlib.util
import unittest
from pathlib import Path
from tempfile import TemporaryDirectory

_MODULE_PATH = Path(__file__).resolve().parent / "check_json_valid.py"
_spec = importlib.util.spec_from_file_location("check_json_valid", _MODULE_PATH)
cj = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(cj)


class InvalidFilesTest(unittest.TestCase):
    def test_flags_malformed_json(self):
        with TemporaryDirectory() as d:
            root = Path(d)
            (root / "good.json").write_text('{"a": 1}', encoding="utf-8")
            (root / "bad.json").write_text('{"a": 1,}', encoding="utf-8")  # trailing comma
            bad = cj.invalid_files([root])
            self.assertEqual({p.name for p, _ in bad}, {"bad.json"})

    def test_clean_tree_passes(self):
        with TemporaryDirectory() as d:
            root = Path(d)
            (root / "a.json").write_text("[1, 2, 3]", encoding="utf-8")
            (root / "nested").mkdir()
            (root / "nested" / "b.json").write_text('{"x": true}', encoding="utf-8")
            self.assertEqual(cj.invalid_files([root]), [])

    def test_missing_root_is_skipped(self):
        self.assertEqual(cj.invalid_files([Path("/no/such/dir")]), [])

    def test_repo_operational_json_is_valid(self):
        # The real operational JSON must all parse.
        bad = cj.invalid_files()
        self.assertEqual(bad, [], f"malformed JSON: {[str(p) for p, _ in bad]}")


if __name__ == "__main__":
    unittest.main(verbosity=2)
