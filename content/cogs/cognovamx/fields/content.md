---
title: "MX Field Dictionary — Moved to Appendix M"
description: "Stub. The MX field dictionary now lives in Appendix M (prose) and fields-data.yaml (machine-readable)."
author: "Tom Cranstoun"
created: 2026-02-13
version: "2.0"
modified: 2026-04-15

mx:
  status: superseded
  license: proprietary
  partOf: mx-ssot
  contentType: stub
  tags: [fields, metadata, yaml, frontmatter, dictionary, vocabulary, moved]
  audience: [machines, humans]
  replacedBy:
    prose: datalake/manuscripts/mx-books/mx-appendices/appendix-m-index-of-metadata.md
    data: mx-canon/ssot/fields-data.yaml
  runbook: "This file is a stub. The machine-readable dictionary is at mx-canon/ssot/fields-data.yaml. The human-readable definitions are in Appendix M — Index of Metadata (§22 Field Catalogue, §23 Folder Metadata, §25 Carrier Formats, §26 HTML Carrier). Do not add content here."
---

# MX Field Dictionary — Moved to Appendix M

> **Moved.** The MX field dictionary is now maintained in a single place.
>
> - **Prose (human-readable):** [Appendix M — Index of Metadata](../../datalake/manuscripts/mx-books/mx-appendices/appendix-m-index-of-metadata.md)
>   — specifically §22 *MX Frontmatter Field Catalogue*, §25 *Carrier Format Metadata Map*, §26 *HTML Carrier Writing Guide*.
> - **Data (machine-readable):** [`mx-canon/ssot/fields-data.yaml`](fields-data.yaml) — the complete dictionary (fields, blockTypes, carrierFormats, profiles, overlap resolution, namespace policy).

## Why this file still exists

Inbound links, registry entries, and some tool configs reference this path. The stub keeps those working while Appendix M and `fields-data.yaml` carry the definitions. Update references to point at Appendix M or the data file when convenient.

Tools that need to validate frontmatter should load `mx-canon/ssot/fields-data.yaml`. See [`scripts/mx-audit.js`](../../scripts/mx-audit.js) for the reference loader.

<!-- Prior content preserved in git history. -->
