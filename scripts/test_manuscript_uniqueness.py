#!/usr/bin/env python3
"""Unit tests for manuscript_uniqueness.

Run with:
    python3 -m unittest scripts.test_manuscript_uniqueness
or directly:
    python3 scripts/test_manuscript_uniqueness.py
"""

import importlib.util
import unittest
from pathlib import Path

# Load the sibling module by path so the tests work whether invoked as a
# package module or as a standalone script.
_MODULE_PATH = Path(__file__).resolve().parent / "manuscript_uniqueness.py"
_spec = importlib.util.spec_from_file_location("manuscript_uniqueness", _MODULE_PATH)
mu = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(mu)


def _para(n_words: int, token: str = "word") -> str:
    """Build an HTML paragraph with exactly ``n_words`` identical tokens."""
    return "<p>" + " ".join([token] * n_words) + "</p>"


class TextHelpersTest(unittest.TestCase):
    def test_normalize_collapses_whitespace(self):
        self.assertEqual(
            mu.normalize_text("  a\n  b\t c \r\n d  "), "a b c d"
        )

    def test_normalize_empty(self):
        self.assertEqual(mu.normalize_text("   \n\t "), "")

    def test_word_count(self):
        self.assertEqual(mu.word_count("one two three"), 3)
        self.assertEqual(mu.word_count(""), 0)

    def test_hash_is_stable_and_distinct(self):
        self.assertEqual(mu.text_hash("hello"), mu.text_hash("hello"))
        self.assertNotEqual(mu.text_hash("hello"), mu.text_hash("world"))

    def test_excerpt_truncates(self):
        text = " ".join(str(i) for i in range(30))
        ex = mu.excerpt(text, words=5)
        self.assertTrue(ex.startswith("0 1 2 3 4"))
        self.assertTrue(ex.endswith("…"))

    def test_excerpt_short_text_not_truncated(self):
        self.assertEqual(mu.excerpt("a b c", words=5), "a b c")


class ExtractChaptersTest(unittest.TestCase):
    def test_chapters_split_on_h1(self):
        html = (
            "<h1>Chapter One</h1><p>First.</p><p>Second.</p>"
            "<h1>Chapter Two</h1><p>Third.</p>"
        )
        chapters = mu.extract_chapters(html)
        self.assertEqual([c["title"] for c in chapters], ["Chapter One", "Chapter Two"])
        self.assertEqual(chapters[0]["paragraphs"], ["First.", "Second."])
        self.assertEqual(chapters[1]["paragraphs"], ["Third."])

    def test_front_matter_before_first_h1(self):
        html = "<p>Intro paragraph.</p><h1>Real Chapter</h1><p>Body.</p>"
        chapters = mu.extract_chapters(html)
        self.assertEqual(chapters[0]["title"], mu.FRONT_MATTER_TITLE)
        self.assertEqual(chapters[0]["paragraphs"], ["Intro paragraph."])
        self.assertEqual(chapters[1]["title"], "Real Chapter")

    def test_nested_inline_tags_are_flattened(self):
        html = (
            "<h1>H</h1><p>plain <a href='x'>link text</a> and "
            "<em>emphasis</em><sup>9</sup> tail.</p>"
        )
        chapters = mu.extract_chapters(html)
        para = chapters[0]["paragraphs"][0]
        self.assertEqual(para, "plain link text and emphasis9 tail.")
        self.assertEqual(mu.word_count(para), 6)

    def test_whitespace_only_paragraph_skipped(self):
        html = "<h1>H</h1><p>   </p><p>real</p>"
        chapters = mu.extract_chapters(html)
        self.assertEqual(chapters[0]["paragraphs"], ["real"])

    def test_line_wrapped_paragraph_normalised(self):
        html = "<h1>H</h1><p>one\n  two\n  three</p>"
        chapters = mu.extract_chapters(html)
        self.assertEqual(chapters[0]["paragraphs"], ["one two three"])


class FindDuplicatesTest(unittest.TestCase):
    def _sources(self, shared_words: int, short_words: int = 5):
        shared = _para(shared_words, token="alpha")
        handbook = f"<h1>HB Ch</h1>{shared}{_para(short_words, 'hb')}"
        protocols = f"<h1>PB Ch</h1>{shared}{_para(short_words, 'pb')}"
        return [("handbook", handbook), ("protocols", protocols)]

    def test_long_shared_paragraph_flagged(self):
        manuscripts = mu.index_from_sources(self._sources(shared_words=300))
        dups = mu.find_duplicates(manuscripts, min_words=209)
        self.assertEqual(len(dups), 1)
        self.assertEqual(dups[0]["word_count"], 300)
        self.assertEqual(dups[0]["book_count"], 2)
        books = {o["book"] for o in dups[0]["occurrences"]}
        self.assertEqual(books, {"handbook", "protocols"})

    def test_short_shared_paragraph_not_flagged(self):
        manuscripts = mu.index_from_sources(self._sources(shared_words=50))
        dups = mu.find_duplicates(manuscripts, min_words=209)
        self.assertEqual(dups, [])

    def test_threshold_is_strictly_greater_than(self):
        # Exactly min_words → not flagged; min_words + 1 → flagged.
        at = mu.index_from_sources(self._sources(shared_words=209))
        self.assertEqual(mu.find_duplicates(at, min_words=209), [])
        over = mu.index_from_sources(self._sources(shared_words=210))
        self.assertEqual(len(mu.find_duplicates(over, min_words=209)), 1)

    def test_long_paragraph_unique_to_one_book_not_flagged(self):
        handbook = "<h1>HB</h1>" + _para(300, "only_here")
        protocols = "<h1>PB</h1>" + _para(300, "different")
        manuscripts = mu.index_from_sources(
            [("handbook", handbook), ("protocols", protocols)]
        )
        self.assertEqual(mu.find_duplicates(manuscripts, min_words=209), [])

    def test_occurrences_sorted_deterministically(self):
        shared = _para(300, "alpha")
        # Two chapters in protocols to exercise occurrence ordering.
        protocols = f"<h1>PB B</h1>{shared}<h1>PB A</h1>{shared}"
        handbook = f"<h1>HB</h1>{shared}"
        manuscripts = mu.index_from_sources(
            [("protocols", protocols), ("handbook", handbook)]
        )
        dups = mu.find_duplicates(manuscripts, min_words=209)
        self.assertEqual(len(dups), 1)
        occ = dups[0]["occurrences"]
        # Sorted by (book, chapter_index, paragraph_index): handbook first.
        self.assertEqual(occ[0]["book"], "handbook")
        self.assertEqual([o["chapter_index"] for o in occ[1:]], [0, 1])


class PayloadAndDeterminismTest(unittest.TestCase):
    def _sources(self):
        shared = _para(250, "alpha")
        return [
            ("handbook", f"<h1>HB</h1>{shared}<p>hb only</p>"),
            ("protocols", f"<h1>PB</h1>{shared}<p>pb only</p>"),
        ]

    def test_summary_counts(self):
        payload = mu.build_report_payload(self._sources(), min_words=209)
        self.assertEqual(payload["summary"]["manuscript_count"], 2)
        self.assertEqual(payload["summary"]["chapter_count"], 2)
        self.assertEqual(payload["summary"]["paragraph_count"], 4)
        self.assertEqual(payload["summary"]["duplicate_paragraph_count"], 1)

    def test_serialisation_is_deterministic(self):
        a = mu._serialise_index(
            mu.build_report_payload(self._sources(), min_words=209)
        )
        b = mu._serialise_index(
            mu.build_report_payload(self._sources(), min_words=209)
        )
        self.assertEqual(a, b)

    def test_report_markdown_clean_when_no_duplicates(self):
        sources = [
            ("handbook", "<h1>HB</h1>" + _para(300, "aaa")),
            ("protocols", "<h1>PB</h1>" + _para(300, "bbb")),
        ]
        payload = mu.build_report_payload(sources, min_words=209)
        md = mu.render_report_markdown(payload)
        self.assertIn("The books are unique at this threshold", md)

    def test_report_markdown_lists_duplicates(self):
        payload = mu.build_report_payload(self._sources(), min_words=209)
        md = mu.render_report_markdown(payload)
        self.assertIn("Paragraphs to rewrite", md)
        self.assertIn("handbook", md)
        self.assertIn("protocols", md)


class RealManuscriptSmokeTest(unittest.TestCase):
    """If the real manuscripts are present, the indexer must run on them."""

    def test_indexes_real_manuscripts_if_present(self):
        missing = [p for _, p in mu.DEFAULT_MANUSCRIPTS if not Path(p).exists()]
        if missing:
            self.skipTest(f"manuscripts not present: {missing}")
        sources = mu.load_sources(mu.DEFAULT_MANUSCRIPTS)
        payload = mu.build_report_payload(sources, mu.DEFAULT_MIN_WORDS)
        self.assertEqual(payload["summary"]["manuscript_count"], 2)
        self.assertGreater(payload["summary"]["chapter_count"], 0)
        self.assertGreater(payload["summary"]["paragraph_count"], 0)
        # Output must round-trip as valid, stable JSON.
        self.assertEqual(
            mu._serialise_index(payload), mu._serialise_index(payload)
        )


if __name__ == "__main__":
    unittest.main(verbosity=2)
