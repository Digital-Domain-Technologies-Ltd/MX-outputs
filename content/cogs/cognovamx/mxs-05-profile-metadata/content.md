---
title: "MX Profile-Specific Metadata Standard (DEFERRED)"
version: "1.0-draft-superseded"
created: 2026-04-02
modified: 2026-04-16
author: The Gathering
description: "DEFERRED. After the 2026-04-15 canon split, this standard has almost nothing left to specify. Code profiles moved to MXS-04 Carrier Formats. Database and media profiles were dropped entirely and now defer to DCAT, CSVW, Schema.org, EXIF, IPTC, XMP, ID3. Contact, report, audit, event, blog, book, and identity profiles moved to CogNovaMX vendor extensions. This document is retained for historical reference; withdrawal is recommended."

mx:
  status: deferred
  license: MIT
  category: standard
  partOf: mx-the-gathering
  contentType: specification
  buildsOn: [cog-unified-spec, mxs-01-core-metadata, mxs-02-extensions, mxs-03-provenance]
  tags: [standard, profiles, metadata, deferred, historical, withdraw-candidate]
  audience: [humans, machines]
  cacheability: permanent
  runbook: "Deferred standard. Read the banner and §2 Recommendation only. The original body specifying profile-specific fields for book, blog, contact, folder, report, audit, event, routing, script, code-*, media-*, and database-* was written before the 2026-04-15 canon split. That split moved most of those profiles out of Gathering scope. What remains (folder, script) is covered by MXS-01 and MXS-04. The Gathering admin team should formally withdraw this standard."
---

# MX Profile-Specific Metadata Standard (DEFERRED)

**Version:** 1.0-draft (superseded by 2026-04-15 canon split)
**Status:** Deferred — withdrawal recommended
**Date:** 2 April 2026 (deferred 15 April 2026, scope review 16 April 2026)
**Governing body:** The Gathering
**License:** MIT

---

## 1. Why this standard is deferred

This draft was written before the MX canon split of 2026-04-15. That split made four structural decisions that removed most of this standard's scope:

1. **Database and media profiles dropped entirely.** The `database`, `database-schema`, `database-table`, `database-column`, `database-relationship`, `database-view`, `database-query`, `database-procedure`, `database-dictionary`, `media-image`, `media-video`, `media-audio`, `media-document`, `media-sidecar`, and `media-rights` profiles were removed from the MX canon. Those content types are covered by established W3C and industry standards — [DCAT v3](https://www.w3.org/TR/vocab-dcat-3/), [CSVW](https://www.w3.org/TR/tabular-metadata/), [Dublin Core](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/), [Schema.org](https://schema.org/), [EXIF](https://www.cipa.jp/std/documents/e/DC-008-Translation-2019-E.pdf), [IPTC](https://iptc.org/standards/photo-metadata/), [XMP](https://developer.adobe.com/xmp/docs/XMPSpecifications/), [ID3](https://id3.org/). MX defers to them per the principle "reuse existing standards, do not duplicate."
2. **Code profiles moved to [MXS-04 Carrier Formats](../mxs-04-carrier-formats.cog.md).** Every `code-file`, `code-function`, `code-class`, `code-api`, `code-test`, `code-inline`, `code-dependency`, `code-repository`, and `script` profile this draft was preparing to specify now lives in MXS-04.
3. **Contact, report, audit, event, blog, book, identity profiles moved to CogNovaMX vendor extensions.** Those profiles carry vendor-specific workflow vocabulary (CRM pipeline fields, audit-report scoring, directors-report metadata, pitch fields) that is out of Gathering scope. They live in `mx-canon/ssot/cognovamx-fields.yaml` under the `x-mx-p-` private tier.
4. **Folder and routing profiles absorbed into [MXS-01 Core Metadata](../mxs-01-core-metadata.cog.md).** The surviving Gathering-scope profiles were few enough (folder has three structural fields, routing has two) that adding them to MXS-01 was cleaner than giving them their own standard.

After these four decisions there is no residual scope left for a standalone Profile-Specific Metadata standard.

---

## 2. Recommendation: withdraw

This draft should be formally withdrawn rather than revived. Reasons:

- **No remaining scope.** Every profile this standard was going to specify is now either covered by another standard (MXS-01, MXS-04), deferred to an external standard (DCAT, CSVW, Schema.org, EXIF, IPTC, XMP, ID3), or moved to vendor extensions.
- **Withdrawal is cheaper than rewrite.** A rewritten MXS-05 would consist of pointers to the other standards and the external specifications it defers to. That content already exists in Appendix M §27 "External standards MX defers to" and in MXS-01 §3 "Zone 1 identity fields". Duplicating it in a standalone standard adds maintenance cost without adding value.
- **The numbering remains available.** If The Gathering later needs a standard for something that this slot might logically hold (e.g. a unified profile-registry format), MXS-05 can be reused for that purpose with a fresh title and scope.

---

## 3. Where the profile-specific content went

| Former MXS-05 scope | Current home |
|---------------------|--------------|
| Code profiles (code-file, code-function, code-class, code-api, code-test, code-inline, code-dependency, code-repository) | [MXS-04 Carrier Formats](../mxs-04-carrier-formats.cog.md) |
| Script profile | MXS-04 Carrier Formats |
| Database profiles (database, database-schema, database-table, database-column, database-relationship, database-view, database-query, database-procedure, database-dictionary) | Deferred to DCAT v3, CSVW, Dublin Core; see Appendix M §15 |
| Media profiles (media-image, media-video, media-audio, media-document, media-sidecar, media-rights) | Deferred to Schema.org, EXIF, IPTC, XMP, ID3; see Appendix M §14 |
| Folder profile | [MXS-01 Core Metadata](../mxs-01-core-metadata.cog.md) §3 |
| Routing profile | MXS-01 Core Metadata |
| Contact profile | CogNovaMX vendor extensions (`mx-canon/ssot/cognovamx-fields.yaml`) |
| Report profile | CogNovaMX vendor extensions |
| Audit profile | CogNovaMX vendor extensions |
| Event profile | CogNovaMX vendor extensions |
| Book profile | CogNovaMX vendor extensions |
| Blog profile | CogNovaMX vendor extensions |
| Identity profile | CogNovaMX vendor extensions |

---

## 4. If withdrawn, MXS-07 onwards is clear

If The Gathering admin team accepts this recommendation:

- Delete this file, or leave it in place as a historical record with a short notice linking to the homes in the table above.
- The next Gathering standard takes the number MXS-05 (after the 2026-04-15 renumbering, which made the code-carrier standard MXS-04 and left this slot empty).
- The ai.* namespace proposal (see [ai-governance-namespace-proposal](../../../../mx-maxine-lives/registers/ADR/ai-governance-namespace-proposal.cog.md)) remains a candidate for a future MXS number if and when it reaches adoption.

---

## 5. Change log

- **2026-04-02** — v1.0-draft authored as a fifth companion standard. Scope: profile-specific metadata across book, blog, contact, folder, report, audit, event, code, media, database. ~1756 lines.
- **2026-04-15** — Deferred. Canon split removed most of the scope.
- **2026-04-16** — Body rewritten. Withdrawal recommended. Historical draft preserved in git history at commit `8203c6f3` (pre-rewrite).

---

*Deferred drafts live in `proposed-drafts/deferred/` under The Gathering's proposed-drafts tree. They carry `status: deferred` in frontmatter and are not part of the active standards suite.*
