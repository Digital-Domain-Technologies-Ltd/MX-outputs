---
title: "MX Profile Metadata note (DEFERRED)"
version: "1.0-draft-superseded"
created: 2026-04-02
modified: 2026-04-27
author: Tom Cranstoun
description: "DEFERRED. After the 2026-04-15 canon split, this note has almost nothing left to specify. Code profiles moved to the MX Carrier Formats note. Database and media profiles were dropped entirely and now defer to DCAT, CSVW, Schema.org, EXIF, IPTC, XMP, ID3. Contact, report, audit, event, blog, book, and identity profiles moved to CogNovaMX vendor extensions. This document is retained for historical reference; withdrawal is recommended."

mx:
  status: deferred
  license: MIT
  x-mx-category: draft
  partOf: mx-the-gathering
  contentType: specification
  tags: [draft, profiles, metadata, deferred, historical, withdraw-candidate]
  audience: [humans, machines]
  cacheability: permanent
  runbook: "Deferred draft. Read the banner and §2 Recommendation only. The original body specifying profile-specific fields for book, blog, contact, folder, report, audit, event, routing, script, code-*, media-*, and database-* was written before the 2026-04-15 canon split. That split moved most of those profiles out of Gathering scope. The Gathering admin team should formally withdraw this note."
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/content/cogs/cognovamx/draft-profile-metadata/content.md
---

# MX Profile Metadata note (DEFERRED)

**Version:** 1.0-draft (superseded by 2026-04-15 canon split)
**Status:** Deferred — withdrawal recommended
**Date:** 27 April 2026
**Author:** Tom Cranstoun
**License:** MIT

---

## 1. Why this note is deferred

This draft was written before the MX canon split of 2026-04-15. That split made four structural decisions that removed most of this note's scope:

1. **Database and media profiles dropped entirely.** The `database`, `database-schema`, `database-table`, `database-column`, `database-relationship`, `database-view`, `database-query`, `database-procedure`, `database-dictionary`, `media-image`, `media-video`, `media-audio`, `media-document`, `media-sidecar`, and `media-rights` profiles were removed from the MX canon. Those content types are covered by established W3C and industry standards — [DCAT v3](https://www.w3.org/TR/vocab-dcat-3/), [CSVW](https://www.w3.org/TR/tabular-metadata/), [Dublin Core](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/), [Schema.org](https://schema.org/), [EXIF](https://www.cipa.jp/std/documents/e/DC-008-Translation-2019-E.pdf), [IPTC](https://iptc.org/standards/photo-metadata/), [XMP](https://developer.adobe.com/xmp/docs/XMPSpecifications/), [ID3](https://id3.org/). MX defers to them per the principle "reuse existing standards, do not duplicate."
2. **Code profiles moved to the MX Carrier Formats note.** Every `code-file`, `code-function`, `code-class`, `code-api`, `code-test`, `code-inline`, `code-dependency`, `code-repository`, and `script` profile this draft was preparing to specify now lives in the carrier-formats draft.
3. **Contact, report, audit, event, blog, book, identity profiles moved to CogNovaMX vendor extensions.** Those profiles carry vendor-specific workflow vocabulary (CRM pipeline fields, audit-report scoring, directors-report metadata, pitch fields) that is out of Gathering scope. They live under the `x-mx-p-` private tier.
4. **Folder and routing profiles absorbed into the MX Core Metadata note.** The surviving Gathering-scope profiles were few enough (folder has three structural fields, routing has two) that adding them to the core note was cleaner than giving them their own draft.

After these four decisions there is no residual scope left for a standalone Profile Metadata note.

---

## 2. Recommendation: withdraw

This draft should be formally withdrawn rather than revived. Reasons:

- **No remaining scope.** Every profile this note was going to specify is now either covered by another draft, deferred to an external standard (DCAT, CSVW, Schema.org, EXIF, IPTC, XMP, ID3), or moved to vendor extensions.
- **Withdrawal is cheaper than rewrite.** A rewritten profile-metadata note would consist of pointers to the other notes and the external specifications it defers to. Duplicating that content adds maintenance cost without adding value.

---

## 3. Where the profile-specific content went

| Former scope of this draft | Current home |
|----------------------------|--------------|
| Code profiles (code-file, code-function, code-class, code-api, code-test, code-inline, code-dependency, code-repository) | MX Carrier Formats note |
| Script profile | MX Carrier Formats note |
| Database profiles (database, database-schema, database-table, database-column, database-relationship, database-view, database-query, database-procedure, database-dictionary) | Deferred to DCAT v3, CSVW, Dublin Core |
| Media profiles (media-image, media-video, media-audio, media-document, media-sidecar, media-rights) | Deferred to Schema.org, EXIF, IPTC, XMP, ID3 |
| Folder profile | MX Core Metadata note |
| Routing profile | MX Core Metadata note |
| Contact profile | CogNovaMX vendor extensions |
| Report profile | CogNovaMX vendor extensions |
| Audit profile | CogNovaMX vendor extensions |
| Event profile | CogNovaMX vendor extensions |
| Book profile | CogNovaMX vendor extensions |
| Blog profile | CogNovaMX vendor extensions |
| Identity profile | CogNovaMX vendor extensions |

---

## 4. Change log

- **2026-04-02** — v1.0-draft authored as a fifth companion draft. Scope: profile-specific metadata across book, blog, contact, folder, report, audit, event, code, media, database. ~1756 lines.
- **2026-04-15** — Deferred. Canon split removed most of the scope.
- **2026-04-16** — Body rewritten. Withdrawal recommended. Historical draft preserved in git history.
- **2026-04-27** — Renamed from "MX Profile-Specific Metadata Standard" to "MX Profile Metadata note" to clarify this is a draft by Tom Cranstoun, not a ratified standard. Made the note standalone — removed cross-references to other Gathering drafts.

---

*Deferred drafts live in `proposed-drafts/deferred/` under The Gathering's proposed-drafts tree. They carry `status: deferred` in frontmatter and are not part of the active draft set.*
