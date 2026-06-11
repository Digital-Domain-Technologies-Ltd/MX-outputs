#!/usr/bin/env python3
"""Unit tests for the YAML-frontmatter check."""

import importlib.util
import unittest
from pathlib import Path
from tempfile import TemporaryDirectory

_MODULE_PATH = Path(__file__).resolve().parent / "check_yaml_frontmatter.py"
_spec = importlib.util.spec_from_file_location("check_yaml_frontmatter", _MODULE_PATH)
cy = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(cy)


class ExtractFrontmatterTest(unittest.TestCase):
    def test_extracts_block_between_fences(self):
        text = "---\ntitle: x\nmx:\n  a: 1\n---\n\n# Heading\nbody"
        self.assertEqual(cy.extract_frontmatter(text), "title: x\nmx:\n  a: 1")

    def test_none_without_leading_fence(self):
        self.assertIsNone(cy.extract_frontmatter("# Heading\nno frontmatter"))

    def test_none_without_closing_fence(self):
        self.assertIsNone(cy.extract_frontmatter("---\ntitle: x\nstill open"))


@unittest.skipUnless(cy.YAML_AVAILABLE, "PyYAML not installed")
class InvalidFilesTest(unittest.TestCase):
    def test_flags_broken_frontmatter(self):
        with TemporaryDirectory() as d:
            root = Path(d)
            (root / "good.mx.yaml.md").write_text(
                "---\ntitle: ok\nmx:\n  status: active\n---\n\n# ok\n", encoding="utf-8"
            )
            # Bad: a mapping value that opens a quote and never closes it.
            (root / "bad.mx.yaml.md").write_text(
                '---\ntitle: "unterminated\nmx: [\n---\n\n# bad\n', encoding="utf-8"
            )
            bad = cy.invalid_files([root / "good.mx.yaml.md", root / "bad.mx.yaml.md"])
            self.assertEqual({p.name for p, _ in bad}, {"bad.mx.yaml.md"})

    def test_file_without_frontmatter_is_skipped(self):
        with TemporaryDirectory() as d:
            p = Path(d) / "notes.md"
            p.write_text("# just prose, no frontmatter\n", encoding="utf-8")
            self.assertEqual(cy.invalid_files([p]), [])

    def test_real_repo_frontmatter_is_valid(self):
        bad = cy.invalid_files()
        self.assertEqual(bad, [], f"invalid frontmatter: {[str(p) for p, _ in bad]}")


if __name__ == "__main__":
    unittest.main(verbosity=2)
