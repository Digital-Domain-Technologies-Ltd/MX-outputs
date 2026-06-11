#!/usr/bin/env python3
"""Unit tests for the canonical-source tripwire."""

import importlib.util
import unittest
from pathlib import Path
from tempfile import TemporaryDirectory

_MODULE_PATH = Path(__file__).resolve().parent / "check_canonical_source.py"
_spec = importlib.util.spec_from_file_location("check_canonical_source", _MODULE_PATH)
cc = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(cc)


class OffendingFilesTest(unittest.TestCase):
    def test_flags_pandoc_generator_marker(self):
        with TemporaryDirectory() as d:
            books = Path(d)
            (books / "good.html").write_text("<html><head></head></html>", encoding="utf-8")
            (books / "bad.html").write_text(
                '<meta name="generator" content="pandoc" />', encoding="utf-8"
            )
            hits = cc.offending_files(books)
            names = {p.name for p, _ in hits}
            self.assertEqual(names, {"bad.html"})

    def test_clean_tree_passes(self):
        with TemporaryDirectory() as d:
            books = Path(d)
            (books / "a.html").write_text("<p>hand written</p>", encoding="utf-8")
            self.assertEqual(cc.offending_files(books), [])

    def test_real_books_are_clean(self):
        # After the migration, the actual book files must carry no marker.
        if not cc.BOOKS_DIR.exists():
            self.skipTest("html/books not present")
        self.assertEqual(cc.offending_files(), [])


if __name__ == "__main__":
    unittest.main(verbosity=2)
