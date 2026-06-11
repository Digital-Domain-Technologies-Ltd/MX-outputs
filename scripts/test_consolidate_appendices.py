#!/usr/bin/env python3
"""Unit tests for the appendix consolidation helpers."""

import importlib.util
import unittest
from pathlib import Path

_MODULE_PATH = Path(__file__).resolve().parent / "consolidate_appendices.py"
_spec = importlib.util.spec_from_file_location("consolidate_appendices", _MODULE_PATH)
ca = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(ca)

SAMPLE = """<!DOCTYPE html>
<html><head><style>x{}</style></head>
<body>
<nav class="appendix-navigation">prev/next</nav>
<header id="title-block-header">
<h1 class="title">Appendix A: Cookbook</h1>
</header>
<nav id="TOC"><ul><li><a href="#recipe-1">Recipe 1</a></li></ul></nav>
<h2 id="recipe-1">Recipe 1</h2>
<p>Body text.</p>
<nav class="appendix-navigation">prev/next</nav>
</body></html>"""


class ExtractTest(unittest.TestCase):
    def test_extract_title(self):
        self.assertEqual(ca.extract_title(SAMPLE), "Appendix A: Cookbook")

    def test_extract_content_drops_chrome(self):
        content = ca.extract_content(SAMPLE)
        # Title-block header and bottom navigation are excluded.
        self.assertNotIn("title-block-header", content)
        self.assertNotIn("appendix-navigation", content)
        # The per-appendix TOC and the body are kept.
        self.assertIn('id="TOC"', content)
        self.assertIn("Body text.", content)

    def test_namespace_anchors_prefixes_ids_and_fragments(self):
        content = '<h2 id="recipe-1">R</h2><a href="#recipe-1">go</a>'
        out = ca.namespace_anchors(content, "a")
        self.assertIn('id="apx-a-recipe-1"', out)
        self.assertIn('href="#apx-a-recipe-1"', out)

    def test_namespace_leaves_external_hrefs_alone(self):
        content = '<a href="https://example.com/page#frag">x</a>'
        self.assertEqual(ca.namespace_anchors(content, "a"), content)


class BuildSectionTest(unittest.TestCase):
    def test_section_has_stable_anchor_and_heading(self):
        section = ca.build_section("a", "Appendix A: Cookbook", "<p>x</p>")
        self.assertIn('<section id="appendix-a" class="appendix">', section)
        self.assertIn("<h1>Appendix A: Cookbook</h1>", section)


class RenderTest(unittest.TestCase):
    def test_render_is_deterministic_and_lists_every_appendix(self):
        items = [("a", "Appendix A", "<p>a</p>"), ("b", "Appendix B", "<p>b</p>")]
        first = ca.render(items)
        second = ca.render(items)
        self.assertEqual(first, second)  # no timestamps
        self.assertIn('href="#appendix-a"', first)
        self.assertIn('href="#appendix-b"', first)
        self.assertEqual(first.count('class="appendix"'), 2)


if __name__ == "__main__":
    unittest.main(verbosity=2)
