---
title: "Co-Directors Report — Founder Commitment Published, Governance Series Trimmed to Neutral Framing"
description: "Morning segment: the founder's commitment not to be the main sponsor of The Gathering published with the trigger condition stated. The first governance post trimmed to remove FAIR, C2PA, and Adobe Experience Manager references; the WordPress kill-switch case kept as the publicly-litigated example. DDT-side canon docs made self-contained except for links to the public governance series."
author: "Tom Cranstoun"
created: 2026-05-21
modified: 2026-05-21
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, morning]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-05-21-morning-report.md
---

# Co-Directors Report — Founder Commitment Published, Governance Series Trimmed

**Date:** 21 May 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

The doctrinal commitment Tom has been preparing for, and would not draw down on lightly, landed in canon and on the public blog this segment. DDT Ltd will not exceed the 25% concentration cap that binds every Founding Partner; the founder's approval on governance changes is conditional and time-limited, retiring on the day The Gathering is fully funded by sponsorship and no longer depends on DDT subsidy. The position is published in a new doctrine post and is now part of the DDT-side commercial documents that sponsors, regulators, and peer agencies read.

In the same segment the first governance post was trimmed: FAIR, C2PA, and Adobe Experience Manager cases removed in favour of the publicly-litigated WordPress kill-switch story. The doctrine survives the cuts; what is gone is the named critique of fellow standards efforts and a CMS Tom consults on. Neutral framing, kept where the public record is unambiguous.

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

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits this segment | 1 in mx-outputs (`dafee27`); hub commit pending Step 3 |
| Files changed in mx-outputs | 6 (1 new post, 1 trimmed post, 1 lander updated, 3 discovery files regenerated) |
| Files changed in hub | 4 (3 canon docs + wordlist) |
| Lines added in mx-outputs | +507 |
| Lines removed in mx-outputs | -108 |
| New canonical files | 1 (`not-the-main-sponsor.html`) |
| Wordlist additions | 10 |
| Governance series posts | 2 (was 1) |
| Word count of first post | 1,900 → 1,100 (down 42%) |
| Reading time of first post | 10 min → 6 min |
| Cap on DDT contribution | 25% of total annual income, no exception, no transitional concession |
| Trigger for veto relinquishment | The Gathering fully funded by sponsorship, no DDT subsidy required |

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

- Push the hub commit (canon doc updates + wordlist + mx-outputs pointer bump).
- Verify the live `mx.allabout.network/blog/governance/` paths render the trimmed first post and the new "Not the Main Sponsor" once Cloudflare cache is purged.
- Decide the Adobe Experience Manager author-bio question for governance posts specifically.
- Begin the founding-cohort recruitment work that the 25% cap and the veto-trigger condition both depend on.

---

## Commit Log

| Hash | Description |
|------|-------------|
| dafee27 | mx-outputs: Blog governance: 'Not the Main Sponsor' added; first post trimmed to neutral framing |
| _pending_ | Hub: canon docs (business-plan, canonical-sponsor, business-sponsor-pitch) carry the 25% cap + founder veto-trigger; wordlist +10; mx-outputs pointer bump |
