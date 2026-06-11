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

DATES = {"handbook": "2026-01-01", "protocols": "2026-01-01"}


def _para(n_words: int, token: str = "word") -> str:
    """Build an HTML paragraph with exactly ``n_words`` identical tokens."""
    return "<p>" + " ".join([token] * n_words) + "</p>"


def _manuscripts(sources, change_dates=None, prior=None):
    manuscripts, _stats = mu.index_from_sources(
        sources, change_dates or DATES, prior
    )
    return manuscripts


class TextHelpersTest(unittest.TestCase):
    def test_normalize_collapses_whitespace(self):
        self.assertEqual(mu.normalize_text("  a\n  b\t c \r\n d  "), "a b c d")

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

    def test_section_signature_changes_with_content(self):
        a = mu.section_signature("Title", ["one two", "three"])
        b = mu.section_signature("Title", ["one two", "three four"])
        self.assertNotEqual(a, b)
        self.assertEqual(a, mu.section_signature("Title", ["one two", "three"]))


class ExtractChaptersTest(unittest.TestCase):
    def test_chapters_split_on_h1(self):
        html = (
            "<h1>Chapter One</h1><p>First.</p><p>Second.</p>"
            "<h1>Chapter Two</h1><p>Third.</p>"
        )
        chapters = mu.extract_chapters(html)
        self.assertEqual(
            [c["title"] for c in chapters], ["Chapter One", "Chapter Two"]
        )
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
        dups = mu.find_duplicates(_manuscripts(self._sources(300)), min_words=209)
        self.assertEqual(len(dups), 1)
        self.assertEqual(dups[0]["word_count"], 300)
        self.assertEqual(dups[0]["book_count"], 2)
        self.assertEqual(
            {o["book"] for o in dups[0]["occurrences"]}, {"handbook", "protocols"}
        )

    def test_short_shared_paragraph_not_flagged(self):
        dups = mu.find_duplicates(_manuscripts(self._sources(50)), min_words=209)
        self.assertEqual(dups, [])

    def test_threshold_is_strictly_greater_than(self):
        at = _manuscripts(self._sources(209))
        self.assertEqual(mu.find_duplicates(at, min_words=209), [])
        over = _manuscripts(self._sources(210))
        self.assertEqual(len(mu.find_duplicates(over, min_words=209)), 1)

    def test_long_paragraph_unique_to_one_book_not_flagged(self):
        sources = [
            ("handbook", "<h1>HB</h1>" + _para(300, "only_here")),
            ("protocols", "<h1>PB</h1>" + _para(300, "different")),
        ]
        self.assertEqual(
            mu.find_duplicates(_manuscripts(sources), min_words=209), []
        )

    def test_occurrences_sorted_deterministically(self):
        shared = _para(300, "alpha")
        protocols = f"<h1>PB B</h1>{shared}<h1>PB A</h1>{shared}"
        handbook = f"<h1>HB</h1>{shared}"
        sources = [("protocols", protocols), ("handbook", handbook)]
        dups = mu.find_duplicates(_manuscripts(sources), min_words=209)
        self.assertEqual(len(dups), 1)
        occ = dups[0]["occurrences"]
        self.assertEqual(occ[0]["book"], "handbook")
        self.assertEqual([o["chapter_index"] for o in occ[1:]], [0, 1])


class ThresholdTiersTest(unittest.TestCase):
    def test_default_threshold_is_lowered_to_100(self):
        self.assertEqual(mu.DEFAULT_MIN_WORDS, 100)

    def test_tiers_count_shared_paragraphs_per_threshold(self):
        shared = _para(120, "alpha")
        sources = [
            ("handbook", f"<h1>HB</h1>{shared}"),
            ("protocols", f"<h1>PB</h1>{shared}"),
        ]
        tiers = mu.duplicate_threshold_tiers(
            _manuscripts(sources), [50, 75, 100, 150, 200]
        )
        self.assertEqual(tiers["50"], 1)
        self.assertEqual(tiers["75"], 1)
        self.assertEqual(tiers["100"], 1)  # 120 > 100
        self.assertEqual(tiers["150"], 0)  # 120 not > 150
        self.assertEqual(tiers["200"], 0)

    def test_tiers_appear_in_payload_and_report(self):
        shared = _para(120, "alpha")
        sources = [
            ("handbook", f"<h1>HB</h1>{shared}"),
            ("protocols", f"<h1>PB</h1>{shared}"),
        ]
        payload, _stats = mu.build_report_payload(sources, 100, DATES)
        self.assertIn("threshold_tiers", payload)
        md = mu.render_report_markdown(payload)
        self.assertIn("Shared paragraphs by threshold", md)
        self.assertIn("← current", md)


class WithinBookDuplicatesTest(unittest.TestCase):
    def test_paragraph_repeated_across_chapters_flagged(self):
        shared = _para(120, "alpha")
        html = f"<h1>Ch A</h1>{shared}<h1>Ch B</h1>{shared}"
        within = mu.find_within_book_duplicates(
            _manuscripts([("handbook", html)]), min_words=100
        )
        self.assertIn("handbook", within)
        self.assertEqual(len(within["handbook"]), 1)
        self.assertEqual(within["handbook"][0]["chapter_count"], 2)
        self.assertEqual(
            [o["chapter_index"] for o in within["handbook"][0]["occurrences"]],
            [0, 1],
        )

    def test_paragraph_repeated_in_same_chapter_not_flagged(self):
        shared = _para(120, "alpha")
        html = f"<h1>Ch A</h1>{shared}{shared}"  # twice, same chapter
        within = mu.find_within_book_duplicates(
            _manuscripts([("handbook", html)]), min_words=100
        )
        self.assertEqual(within, {})

    def test_short_repeat_not_flagged(self):
        shared = _para(20, "alpha")
        html = f"<h1>Ch A</h1>{shared}<h1>Ch B</h1>{shared}"
        within = mu.find_within_book_duplicates(
            _manuscripts([("handbook", html)]), min_words=100
        )
        self.assertEqual(within, {})

    def test_within_book_count_in_payload_and_report(self):
        shared = _para(120, "alpha")
        sources = [("handbook", f"<h1>A</h1>{shared}<h1>B</h1>{shared}")]
        payload, _ = mu.build_report_payload(sources, 100, {"handbook": "2026-01-01"})
        self.assertEqual(payload["summary"]["within_book_duplicate_count"], 1)
        md = mu.render_report_markdown(payload)
        self.assertIn("Within-book duplicates (cross-chapter)", md)


class IgnoreListTest(unittest.TestCase):
    def test_parse_ignore_list(self):
        text = (
            "# a comment\n"
            "\n"
            "ABC123  trailing note here\n"
            "  def456  \n"
            "# another\n"
        )
        self.assertEqual(mu.parse_ignore_list(text), {"abc123", "def456"})

    def _shared_sources(self):
        shared = _para(120, "alpha")
        return [
            ("handbook", f"<h1>HB</h1>{shared}"),
            ("protocols", f"<h1>PB</h1>{shared}"),
        ], mu.text_hash(mu.normalize_text(" ".join(["alpha"] * 120)))

    def test_ignored_hash_excluded_from_cross_book(self):
        sources, h = self._shared_sources()
        manuscripts = _manuscripts(sources)
        self.assertEqual(len(mu.find_duplicates(manuscripts, 100)), 1)
        self.assertEqual(mu.find_duplicates(manuscripts, 100, ignore={h}), [])

    def test_ignored_hash_excluded_from_within_book(self):
        shared = _para(120, "alpha")
        h = mu.text_hash(mu.normalize_text(" ".join(["alpha"] * 120)))
        sources = [("handbook", f"<h1>A</h1>{shared}<h1>B</h1>{shared}")]
        manuscripts = _manuscripts(sources)
        self.assertIn("handbook", mu.find_within_book_duplicates(manuscripts, 100))
        self.assertEqual(
            mu.find_within_book_duplicates(manuscripts, 100, ignore={h}), {}
        )

    def test_ignore_recorded_in_payload(self):
        sources, h = self._shared_sources()
        payload, _ = mu.build_report_payload(sources, 100, DATES, ignore={h})
        self.assertEqual(payload["ignore"]["size"], 1)
        self.assertEqual(payload["ignore"]["hashes"], [h])
        self.assertEqual(payload["summary"]["duplicate_paragraph_count"], 0)


class IncrementalTest(unittest.TestCase):
    def _one_chapter(self, body_token: str, n=120):
        html = "<h1>Only Chapter</h1>" + _para(n, body_token)
        return [("handbook", html)]

    def test_no_prior_all_sections_reanalysed(self):
        _m, stats = mu.index_from_sources(self._one_chapter("a"), DATES, None)
        self.assertEqual(stats[0]["sections_reanalysed"], 1)
        self.assertEqual(stats[0]["sections_skipped"], 0)

    def test_no_incremental_ignores_prior(self):
        sources = self._one_chapter("a")
        prior, _ = mu.build_report_payload(sources, 100, {"handbook": "2026-01-01"})
        # Passing prior_payload=None models --no-incremental: everything is
        # re-analysed and stamped with the current date.
        payload, stats = mu.build_report_payload(
            sources, 100, {"handbook": "2026-06-11"}, prior_payload=None
        )
        self.assertEqual(stats["sections_reanalysed"], 1)
        self.assertEqual(
            payload["manuscripts"][0]["chapters"][0]["last_changed"], "2026-06-11"
        )

    def test_unchanged_section_skipped_and_date_preserved(self):
        sources = self._one_chapter("a")
        prior, _ = mu.build_report_payload(sources, 100, {"handbook": "2026-01-01"})
        # Re-run with a NEWER change date but identical content.
        payload, stats = mu.build_report_payload(
            sources, 100, {"handbook": "2026-06-11"}, prior_payload=prior
        )
        chapter = payload["manuscripts"][0]["chapters"][0]
        self.assertEqual(chapter["last_changed"], "2026-01-01")  # preserved
        self.assertEqual(stats["sections_skipped"], 1)
        self.assertEqual(stats["sections_reanalysed"], 0)

    def test_changed_section_reanalysed_with_new_date(self):
        prior, _ = mu.build_report_payload(
            self._one_chapter("old"), 100, {"handbook": "2026-01-01"}
        )
        payload, stats = mu.build_report_payload(
            self._one_chapter("new"),  # different content
            100,
            {"handbook": "2026-06-11"},
            prior_payload=prior,
        )
        chapter = payload["manuscripts"][0]["chapters"][0]
        self.assertEqual(chapter["last_changed"], "2026-06-11")  # restamped
        self.assertEqual(stats["sections_reanalysed"], 1)
        self.assertEqual(stats["sections_skipped"], 0)

    def test_manuscript_last_changed_recorded(self):
        payload, _ = mu.build_report_payload(
            self._one_chapter("a"), 100, {"handbook": "2026-06-11"}
        )
        self.assertEqual(payload["last_changed"]["handbook"], "2026-06-11")
        self.assertEqual(payload["manuscripts"][0]["last_changed"], "2026-06-11")

    def test_mixed_change_skips_only_unchanged_section(self):
        before = [
            (
                "handbook",
                "<h1>A</h1>" + _para(120, "aa") + "<h1>B</h1>" + _para(120, "bb"),
            )
        ]
        after = [
            (
                "handbook",
                "<h1>A</h1>" + _para(120, "aa") + "<h1>B</h1>" + _para(120, "CHANGED"),
            )
        ]
        prior, _ = mu.build_report_payload(before, 100, {"handbook": "2026-01-01"})
        payload, stats = mu.build_report_payload(
            after, 100, {"handbook": "2026-06-11"}, prior_payload=prior
        )
        self.assertEqual(stats["sections_skipped"], 1)
        self.assertEqual(stats["sections_reanalysed"], 1)
        chapters = payload["manuscripts"][0]["chapters"]
        self.assertEqual(chapters[0]["last_changed"], "2026-01-01")  # unchanged
        self.assertEqual(chapters[1]["last_changed"], "2026-06-11")  # changed


class PayloadAndDeterminismTest(unittest.TestCase):
    def _sources(self):
        shared = _para(150, "alpha")
        return [
            ("handbook", f"<h1>HB</h1>{shared}<p>hb only</p>"),
            ("protocols", f"<h1>PB</h1>{shared}<p>pb only</p>"),
        ]

    def test_summary_counts(self):
        payload, _ = mu.build_report_payload(self._sources(), 100, DATES)
        self.assertEqual(payload["summary"]["manuscript_count"], 2)
        self.assertEqual(payload["summary"]["chapter_count"], 2)
        self.assertEqual(payload["summary"]["paragraph_count"], 4)
        self.assertEqual(payload["summary"]["duplicate_paragraph_count"], 1)

    def test_rerun_with_stable_date_is_byte_identical(self):
        # Stable change date + prior index → deterministic, identical index.
        first, _ = mu.build_report_payload(self._sources(), 100, DATES)
        second, _ = mu.build_report_payload(
            self._sources(), 100, DATES, prior_payload=first
        )
        self.assertEqual(mu._serialise_index(first), mu._serialise_index(second))

    def test_serialisation_is_deterministic(self):
        a, _ = mu.build_report_payload(self._sources(), 100, DATES)
        b, _ = mu.build_report_payload(self._sources(), 100, DATES)
        self.assertEqual(mu._serialise_index(a), mu._serialise_index(b))

    def test_report_markdown_clean_when_no_duplicates(self):
        sources = [
            ("handbook", "<h1>HB</h1>" + _para(300, "aaa")),
            ("protocols", "<h1>PB</h1>" + _para(300, "bbb")),
        ]
        payload, _ = mu.build_report_payload(sources, 100, DATES)
        md = mu.render_report_markdown(payload)
        self.assertIn("The books are unique at this threshold", md)

    def test_report_markdown_lists_duplicates(self):
        payload, _ = mu.build_report_payload(self._sources(), 100, DATES)
        md = mu.render_report_markdown(payload)
        self.assertIn("Cross-book paragraphs to rewrite", md)
        self.assertIn("handbook", md)
        self.assertIn("protocols", md)


class RealManuscriptSmokeTest(unittest.TestCase):
    """If the real manuscripts are present, the indexer must run on them."""

    def test_indexes_real_manuscripts_if_present(self):
        missing = [p for _, p in mu.DEFAULT_MANUSCRIPTS if not Path(p).exists()]
        if missing:
            self.skipTest(f"manuscripts not present: {missing}")
        sources = mu.load_sources(mu.DEFAULT_MANUSCRIPTS)
        dates = {name: "2026-06-11" for name, _ in mu.DEFAULT_MANUSCRIPTS}
        payload, _ = mu.build_report_payload(sources, mu.DEFAULT_MIN_WORDS, dates)
        self.assertEqual(payload["summary"]["manuscript_count"], 2)
        self.assertGreater(payload["summary"]["chapter_count"], 0)
        self.assertGreater(payload["summary"]["paragraph_count"], 0)
        self.assertEqual(
            mu._serialise_index(payload), mu._serialise_index(payload)
        )


if __name__ == "__main__":
    unittest.main(verbosity=2)
