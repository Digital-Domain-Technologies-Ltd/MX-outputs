---
title: MX Outputs — SOUL
version: '1.0'
created: 2026-03-01T00:00:00.000Z
modified: '2026-06-19'
author: Tom Cranstoun
mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/SOUL.md
  contentType: identity-documentation
  status: active
  tags:
    - identity
    - outputs
---

# MX Outputs — SOUL

This is the control document for mx-outputs.

---

## What This Is

MX Outputs holds generated artefacts — the build products of the MX system. Reports, PDFs, HTML pages, presentations, and JSON exports all land here. Most of this folder is not authored directly; it is produced by scripts, pipelines, or AI-assisted workflows.

**Exception — the books are now canonical source.** The book manuscripts under `html/books/**` (the Handbook, the Protocols, and the consolidated Appendices) are no longer generated. They are hand-maintained HTML and are the source of truth: there is no upstream markdown to regenerate them from. Edit them directly here. The old pandoc pipeline must be turned off so it cannot overwrite them — see [`DISABLE-UPSTREAM-GENERATOR.md`](DISABLE-UPSTREAM-GENERATOR.md).

---

## Voice

- **Generated.** Content here is output, not input. Do not hand-edit generated files.
- **Organised by type.** Markdown reports, PDFs, HTML, JSON, and presentations each have their own directory.
- **Timestamped.** Reports carry dates. The structure makes chronological browsing natural.

---

## Scope

- Directors reports (session, interview, build)
- Completion reports (organised by date)
- PDF publications and manuals
- HTML blogs and audit baselines
- PowerPoint presentations
- JSON exports
- Build scripts for output generation

---

## Constraints

1. **Do not hand-edit outputs.** If a report is wrong, fix the source or the generator, then regenerate. **Exception:** `html/books/**` is canonical hand-maintained HTML — edit those files directly; they have no generator to re-run.
2. **Maintain the index.** Run `./scripts/generate-index.sh` after adding new outputs.
3. **Type-first structure.** Files are organised by output type (md/, pdf/, html/), then by purpose within each type.
4. **Submodule discipline.** Commit and push mx-outputs before updating the pointer in the main repo.

---

*"The proof is in the output."*
