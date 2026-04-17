---
title: "Co-Directors Report — Bob W Audit, Template Stability Run"
created: "2026-04-07"
x-mx-segment: "afternoon"
version: "1.0"
author: Tom Cranstoun and Maxine
audience: stakeholders
confidential: true
---

# Co-Directors Report — Bob W Audit, Template Stability Run

**Date:** 7 April 2026 — Afternoon
**Segment:** afternoon (12:00–17:00)

---

## Summary

The afternoon was a stability exercise: after a week of heavy e-commerce template work driven by NEOM, we ran the generic web-audit-suite v2.0 template against a new brand — Bob W, the sustainable serviced-apartments group operating across European cities — to confirm the brand/marketing variant still holds. It does. The audit delivered a complete 12-priority client report against a site with real findings (zero Schema.org, 282 critical contrast failures from a single CSS class, homepage H1 hidden by an animation start state) and produced a warm partnership-tone PDF without template drift.

---

## What Was Done

### 1. Bob W Web Audit (5 pages)

Ran the full `/audit-site` pipeline against `https://bobw.co/`. The crawler scored Performance 60, Accessibility 0, SEO 76, AI Suitability 45, MX Stack 42, Agent Readability 76. The accessibility score is driven by a single root cause — one CSS class with a 1.09:1 contrast ratio on the header navigation, counted 282 times across five pages. The zero Schema.org finding is the headline strategic gap for a hospitality brand whose competitors all publish `LodgingBusiness` and `Apartment` entities.

### 2. Template Stability Confirmed

The generic `web-audit-suite-template.md` produced a clean 12-priority report with no structural drift after this week's e-commerce template split. Commerce auto-detection correctly routed Bob W to the generic template — the cart/checkout flow lives on `booking.bobw.co`, so `bobw.co` is a brand/marketing site by our rules.

### 3. Sitemap Parser Edge Case Surfaced

The mx-audit tool failed to parse `bobw.co/sitemap.xml` directly ("Invalid URL" error on single-line minified XML with fractional-second ISO timestamps) and fell back to homepage crawling. Not a blocker for today's audit, but it is a real signal that we should harden the sitemap parser against minified formats with sub-second timestamps. Logged as a finding in the client report itself so we do not lose the signal.

### 4. Confirmation-Pass Self-Correction

Initial draft of the report claimed "homepage has no H1". The mandatory confirmation pass against `.cache/decoded/` HTML caught the error before the write completed: the homepage does have exactly one H1 ("CHALLENGING HOSPITALITY, CITY BY CITY.") but it carries `style="opacity:0.01"` as an animation start state. Priority 3, the at-a-glance triage, and the Cross-Page Consistency row were corrected before the write finalised. This is exactly why the confirmation-pass step exists.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment (hub) | 0 (pre-commit) |
| New files staged | 2 (1 markdown, 1 PDF) |
| Pages audited | 5 |
| Internal links verified | 158 |
| Images inspected | 157 |
| AI agents tested | 6 (all 200) |
| WCAG AA critical failures found | 282 (single root cause) |
| Schema.org entities found | 0 |
| Client report length | ~560 lines, 12 priorities |
| PDF size | 123 KB |

---

## The Insight

Bob W is the clearest example yet of the "good for humans, invisible to machines" pattern. The site is well-designed, well-crafted, well-navigated. It has no broken links, no bot blocking, open access to every AI agent we tested. And when a traveller asks ChatGPT for sustainable serviced apartments in Milan Ticinese, Bob W is in the sitemap but not in the answer, because there is no structured data for the agent to cite. This is a pattern we can sell cleanly: "your site works for humans, here is how to make it work for machines too."

---

## Next Steps

- Harden the mx-audit sitemap parser against single-line minified XML with fractional-second timestamps (small engineering task, defer until we hit a second instance)
- Offer Bob W a follow-up e-commerce audit of `booking.bobw.co` once the marketing-site engagement closes
- Continue template stability runs on other non-e-commerce targets as opportunities arise — the generic template is stable and should not need further structural work

---

## Commit Log

| Hash | Description |
|------|-------------|
| *(pending)* | Bob W audit report — markdown + PDF |

---

*Generated as part of the /step-commit workflow.*
