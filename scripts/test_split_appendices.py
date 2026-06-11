#!/usr/bin/env python3
"""Unit tests for the appendix splitter (publish-from-source)."""

import importlib.util
import unittest
from pathlib import Path

_MODULE_PATH = Path(__file__).resolve().parent / "split_appendices.py"
_spec = importlib.util.spec_from_file_location("split_appendices", _MODULE_PATH)
sa = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(sa)

CONSOLIDATED = """<!DOCTYPE html><html><head></head><body>
<section id="appendix-a" class="appendix" data-description="Recipes &amp; patterns.">
<h1>Appendix A: Cookbook</h1>
<nav id="apx-a-TOC"><a href="#apx-a-recipe-1">Recipe 1</a></nav>
<h2 id="apx-a-recipe-1">Recipe 1</h2>
<p>Body.</p>
</section>

<section id="appendix-b" class="appendix">
<h1>Appendix B: Glossary</h1>
<p>Terms.</p>
</section>
</body></html>"""


class ParseTest(unittest.TestCase):
    def test_parse_sections(self):
        sections = sa.parse_sections(CONSOLIDATED)
        self.assertEqual(len(sections), 2)
        letter, title, desc, body = sections[0]
        self.assertEqual(letter, "a")
        self.assertEqual(title, "Appendix A: Cookbook")
        self.assertEqual(desc, "Recipes &amp; patterns.")
        self.assertIn("Recipe 1", body)

    def test_denamespace_restores_public_anchors(self):
        body = '<h2 id="apx-a-recipe-1">R</h2><a href="#apx-a-recipe-1">go</a>'
        out = sa.denamespace(body, "a")
        self.assertIn('id="recipe-1"', out)
        self.assertIn('href="#recipe-1"', out)
        self.assertNotIn("apx-a-", out)


class RenderTest(unittest.TestCase):
    def test_render_page_has_canonical_description_and_nav(self):
        page = sa.render_page(
            "a", "Appendix A: Cookbook", "A desc", "<p>x</p>", ["a", "b"]
        )
        self.assertIn(
            '<link rel="canonical" href="https://mx.allabout.network/books/appendices/appendix-a.html">',
            page,
        )
        self.assertIn('<meta name="description" content="A desc" />', page)
        self.assertIn("<title>Appendix A: Cookbook</title>", page)
        self.assertIn('href="appendix-b.html"', page)  # quick-nav
        self.assertIn("GENERATED FILE", page)
        self.assertIn("copy-button", page)  # copy script present

    def test_render_is_deterministic(self):
        a = sa.render_page("a", "T", "d", "<p>x</p>", ["a"])
        b = sa.render_page("a", "T", "d", "<p>x</p>", ["a"])
        self.assertEqual(a, b)

    def test_pages_built_for_every_section(self):
        # Drive build_pages through a patched SOURCE.
        import io
        original = sa.SOURCE
        try:
            tmp = Path(sa.OUTPUT_DIR.parent / "_test_consolidated.html")
            tmp.write_text(CONSOLIDATED, encoding="utf-8")
            sa.SOURCE = tmp
            pages = sa.build_pages()
            self.assertEqual(set(pages), {"a", "b"})
            self.assertIn("Appendix B: Glossary", pages["b"])
            # body anchors restored on page a
            self.assertIn('id="recipe-1"', pages["a"])
        finally:
            sa.SOURCE = original
            if tmp.exists():
                tmp.unlink()


if __name__ == "__main__":
    unittest.main(verbosity=2)
