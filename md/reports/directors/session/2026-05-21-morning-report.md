---
title: "Co-Directors Report — Founder Commitment Published, Governance Series Trimmed, mx-site Contrast Lifted, Audit Pipeline Hardened"
description: "Morning segment: the founder's commitment not to be the main sponsor of The Gathering published with the trigger condition stated. The first governance post trimmed to remove FAIR, C2PA, and Adobe Experience Manager references; the WordPress kill-switch case kept as the publicly-litigated example. DDT-side canon docs made self-contained except for links to the public governance series. Late-morning: --mx-text-muted lifted across mx-site to clear WCAG AA on every documented background; audit pipeline gains an apex/www hostname normaliser, a 15-minute sitemap cache TTL, and a Phase 1 sanity gate that refuses to ship a sub-3-page report without --allow-thin."
author: "Tom Cranstoun"
created: 2026-05-21
modified: 2026-05-21
version: "1.1"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-21-morning-report.md
---

# Co-Directors Report — Founder Commitment Published, Governance Series Trimmed, mx-site Contrast Lifted, Audit Pipeline Hardened

**Date:** 21 May 2026 — Morning
**Segment:** morning (since midnight)
**Version:** 1.1 (late-morning update appended)

---

## Summary

The doctrinal commitment Tom has been preparing for, and would not draw down on lightly, landed in canon and on the public blog this segment. DDT Ltd will not exceed the 25% concentration cap that binds every Founding Partner; the founder's approval on governance changes is conditional and time-limited, retiring on the day The Gathering is fully funded by sponsorship and no longer depends on DDT subsidy. The position is published in a new doctrine post and is now part of the DDT-side commercial documents that sponsors, regulators, and peer agencies read.

In the same segment the first governance post was trimmed: FAIR, C2PA, and Adobe Experience Manager cases removed in favour of the publicly-litigated WordPress kill-switch story. The doctrine survives the cuts; what is gone is the named critique of fellow standards efforts and a CMS Tom consults on. Neutral framing, kept where the public record is unambiguous.

Later in the morning two pieces of plumbing work landed. Tom flagged that the /learn pages looked washed out on a phone; the cause traced to the muted text token sitting at 4.12-6.42:1 on the navy palette, borderline AA at desktop, painful on a phone in daylight. Lifted the token across mx-site so every documented pairing clears AA. Separately, four files in the audit pipeline were hardened after the dkd.de German-language audit shipped a blank report yesterday on a stale single-URL sitemap cache: apex/www are now treated as the same site, the sitemap cache TTL drops from 24 hours to 15 minutes, the multilingual deliverable slug fix from yesterday gets a sibling guard in infill-report, and Phase 1 now refuses to ship a sub-three-page report without an explicit --allow-thin opt-in. The dkd.de /de deliverable was re-run cleanly with the fixes in place.

---

## What Was Done

### 1. New governance post: "Not the Main Sponsor"

Published the founder's commitment at [mx.allabout.network/blog/governance/not-the-main-sponsor.html](https://mx.allabout.network/blog/governance/not-the-main-sponsor.html). The post opens with the direct statement, recaps the WordPress lesson that motivates it, names the 25% cap with no founder exception, and defines the trigger condition for veto-relinquishment. The trigger pairs the founder's right to backstop with the founder's responsibility to backstop: when financial dependency on DDT subsidy is gone, the veto goes with it. The closing section names three limits the commitment does not fix (personnel overlap with Doğu Abaris, DDT's potential commercial dependency on REGINALD success, the case where the founding cohort fails to grow at all). Approximately 1,500 words; six-minute read.

### 2. First post trimmed to neutral framing

The previously-published "Whose Standard Is It Anyway?" was trimmed in line with the policy decision that the public governance series should not name fellow standards efforts or vendors critically. FAIR, C2PA, and Adobe Experience Manager case sections removed. The did:plc structural footnote removed. The "How MX is governed" line referencing FAIR cryptography neutralised. The closing test list trimmed to "any open standard" rather than naming specific examples. The WordPress case is kept in full — Mullenweg, WordPress.org infrastructure, WP Engine, Marucchi quote — because that is the publicly-litigated case and the doctrine rests on it. The structural failure modes summary preserved but no longer name-checks specific competitors. Word count down from 1,900 to 1,100; reading time 10 min to 6 min.

### 3. DDT-side canon docs made self-contained

The 25% cap and the founder commitment landed as new sections in three commercial-facing canon files: [`business-plan.md`](../../../../mx-canon/mx-maxine-lives/businesses/ddt-cognovamx/business-plan.md), [`canonical-sponsor.md`](../../../../mx-canon/mx-maxine-lives/businesses/the-gathering/canonical-sponsor.md), and [`business-sponsor-pitch.md`](../../../../mx-canon/mx-maxine-lives/businesses/the-gathering/business-sponsor-pitch.md). Per Tom's instruction these docs are now self-contained briefings: all internal cross-links to other mx-canon files removed; only the public governance-series links to mx.allabout.network/blog/governance/ remain. The intent is that any sponsor, investor, or regulator can read any of these documents on its own and reach the doctrine.

### 4. Wordlist additions

10 new terms accepted via [`spell:sweep:apply`](../../../../scripts/spell-sweep.sh): `Abaris`, `DDT's`, `Doğu`, `IDHL`, `Ltd's`, `REGINALD's`, `SSOT`, `funder`, `funders`, `verifier`. All proper nouns or domain-vocabulary terms that recur in sponsor and registry-protocol prose. Wordlist total: 658 entries.

### 5. mx-site contrast lift — /learn looked washed out on a phone

Tom flagged the /learn pages reading as low-contrast on a mobile phone in daylight. Two Explore agents mapped the cause: the `--mx-text-muted` token (`#8a9bb5`) was carrying every secondary text surface across mx-site and sitting at 4.12-6.42:1 on the navy palette - borderline AA on the page background, failing AA (4.5:1 required) on the deeper card surface. No mobile breakpoint adjusts colour, so the borderline contrast on desktop becomes the painful contrast on a phone. The fix was structural rather than local: lifted `--mx-text-muted` to `#b3c1d4`, which clears AA on every documented background (6.05:1 on the mid-blue card, 9.40:1 on the page bg). Separately, `.proposition-card p` was reading as muted but is actually body copy, so it now uses `--mx-text` directly - card prose reads at full body contrast and the muted token returns to its designed role of bylines, timestamps, helper text. The brand guide token block, swatch chip, and AA pairing table were updated to match the live CSS in lockstep. The change cascades to every page using proposition cards (homepage, /learn, /blog, /books, /services, /reginald, /the-gathering, /blog sub-indexes).

### 6. Audit pipeline hardening — four bug fixes from yesterday's dkd.de incident

Yesterday's German-language audit (`dkd.de` /de path) shipped a blank report because Phase 1 collected only the entry URL: a strict hostname filter dropped `www.dkd.de` when the entry was `dkd.de`, the sitemap URL cache served the single-URL result for the next 24 hours, and infill-report's deliverable folder was named off the bare hostname instead of the path-aware slug. Four files now carry the fix:

- [`mx-reginald/audit/src/utils/urlUtils.js`](../../../../mx-reginald/audit/src/utils/urlUtils.js) - apex/www are treated as the same site; `www.dkd.de` and `dkd.de` no longer fight in the isValidUrl filter.
- [`mx-reginald/audit/src/main.js`](../../../../mx-reginald/audit/src/main.js) - sitemap URL cache TTL reduced from 24 hours to 15 minutes. Still amortises across rapid debugging reruns but invalidates before stale data bridges a session boundary.
- [`mx-reginald/audit/bin/infill-report.js`](../../../../mx-reginald/audit/bin/infill-report.js) - PDF output path uses the slug-aware `outreachDir` basename (e.g. `dkd.de-de`) instead of the bare hostname, matching the multilingual folder convention. Removed the redundant inline single-page warning; the pipeline-level sanity gate below is the real guard.
- [`scripts/audit-pipeline.js`](../../../../scripts/audit-pipeline.js) - Phase 1 sanity gate. Reads `audit_averages.json` (auditAverages.js skips writing it when no pages were audited, so an absent file means zero); if the audited page count is below three, the report stage refuses to run and prints the likely causes (stale cache, WAF block, sitemap empty after filters) with the exact remediation commands. `--allow-thin` opts in to a one-page audit for landing-page work.

### 7. dkd.de /de audit deliverable re-run

With the four fixes above in place, the German audit was re-run cleanly. The new deliverable folder at [`mx-outputs/audit/2026-05-21/dkd.de-de/`](../../../../mx-outputs/audit/2026-05-21/dkd.de-de/) carries the 11 expected files (report markdown, sidecar CSVs, scope and finding-page JSON, voice review, robots.txt snapshot, audit log).

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 3 in mx-outputs (`dafee27`, `84f1aab`, `d0ddee2`); 1 hub commit pushed earlier (`c5c8b42d`); late-morning hub commit pending Step 3 |
| Files changed in mx-outputs (late morning) | 13 (2 CSS/brand, 11 audit deliverable) |
| Files changed in hub (late morning) | 4 (3 audit code, 1 pipeline) |
| Lines added in mx-outputs (full morning) | +1,849 |
| Lines removed in mx-outputs (full morning) | -114 |
| New canonical files | 1 (`not-the-main-sponsor.html`) |
| Wordlist additions | 10 |
| Governance series posts | 2 (was 1) |
| Word count of first post | 1,900 → 1,100 (down 42%) |
| Reading time of first post | 10 min → 6 min |
| Cap on DDT contribution | 25% of total annual income, no exception, no transitional concession |
| Trigger for veto relinquishment | The Gathering fully funded by sponsorship, no DDT subsidy required |
| `--mx-text-muted` contrast (mid-blue card) | 4.12:1 → 6.05:1 (was fail AA, now pass) |
| `--mx-text-muted` contrast (page bg) | 6.42:1 → 9.40:1 |
| Audit Phase 1 minimum pages (default) | 1 (silently shipped blank reports) → 3 (refuse without `--allow-thin`) |
| Sitemap URL cache TTL | 24 hours → 15 minutes |

---

## Why It Matters

The previous governance post argued that records provenance should not be controlled by anyone who profits from generating the records. That argument lands stronger when paired with a personal commitment from the founder of the standards body answering the obvious sceptical question: what stops the founder from being captured the same way Mullenweg captured WordPress.org? The answer that landed today is structural rather than aspirational. The cap is binding without exception. The veto is conditional and the trigger is checkable against the annual transparency report. A sponsor evaluating The Gathering, a regulator considering MX as an evidence vehicle, or a peer agency considering the founding cohort can now read the founder's commitment in the same place they would normally read pitch language.

The trim of the first post is the other half of the same picture. A doctrine post that name-checks FAIR, C2PA, and Adobe Experience Manager critically creates ongoing relationship risk with parties whose tools or standards we may need to interoperate with, and whose constructive cooperation is more valuable than a sharper-sounding case study. The WordPress case is publicly litigated; the others are not. Trimming reduces the relationship risk while preserving the doctrine.

---

## Decisions Made

- DDT Ltd will not be the main sponsor of The Gathering. The 25% cap binds DDT without founder exception or transitional concession, with effect from the day the cap formally binds (end of 2027 per the articles of association), and DDT reduces its contribution to fit rather than allowing the cap to be informally relaxed.
- The founder's approval on governance changes is conditional and time-limited. The trigger that retires it: The Gathering is fully funded by sponsorship and no longer depends on DDT subsidy to operate. On that day, the founder's veto converts to a single board vote.
- The public governance blog series stays neutral: no named critique of FAIR, C2PA, Adobe Experience Manager, or other fellow standards bodies and vendors. The WordPress case is allowed because it is publicly litigated.
- DDT-side commercial documents (business-plan, canonical-sponsor, business-sponsor-pitch) are self-contained briefings; their only outbound links are to the public governance series on mx.allabout.network.

---

## Open Questions

- The author bio in both governance posts mentions "Adobe Experience Manager" as part of Tom's professional context. This is shared template content across many blog posts. Should it stay (biographical fact about Tom's consulting work) or be removed from governance posts specifically? Not addressed today.
- Recruiting at least three more Founding Partners by end of 2027 is now the highest-priority work between The Gathering's current state (DDT + IDHL, both at ~50% of the partner pool, mechanically in breach of the cap) and a defensible structural position. The pipeline for that recruitment is not yet on a deadline.

---

## Next Steps

- Push the late-morning hub commit (audit pipeline hardening + mx-outputs pointer bump) and Tom's pending manual push of the two mx-outputs commits (`84f1aab`, `d0ddee2`).
- Verify the live `mx.allabout.network/learn/` proposition cards read at full body contrast once Cloudflare cache is purged. Eyeball on a phone in daylight to confirm the washed-out feel is gone.
- Verify the live `mx.allabout.network/blog/governance/` paths render the trimmed first post and the new "Not the Main Sponsor" once Cloudflare cache is purged.
- Decide the Adobe Experience Manager author-bio question for governance posts specifically.
- Begin the founding-cohort recruitment work that the 25% cap and the veto-trigger condition both depend on.
- Audit the rest of mx-site (and the audit-report HTML template) for any other `--mx-text-muted` consumers on tinted surfaces where the lift may have improved readability further than expected, or revealed visual-hierarchy regressions that need a different token.

---

## Commit Log

| Hash | Description |
|------|-------------|
| dafee27 | mx-outputs: Blog governance: 'Not the Main Sponsor' added; first post trimmed to neutral framing |
| 9ad0fee | mx-outputs: Co-directors morning report 2026-05-21 v1.0 (founder commitment, governance series trim) |
| c5c8b42d | Hub: canon docs (business-plan, canonical-sponsor, business-sponsor-pitch) carry the 25% cap + founder veto-trigger; wordlist +10; mx-outputs pointer bump |
| 84f1aab | mx-outputs: Raise --mx-text-muted contrast on mx-site; promote card body copy to --mx-text |
| d0ddee2 | mx-outputs: Add dkd.de /de audit deliverable (re-run 2026-05-21) |
| _pending_ | Hub: audit pipeline hardening (apex/www, 15-min sitemap TTL, Phase 1 sanity gate, path-aware slug in infill-report); v1.1 morning report; mx-outputs pointer bump |
