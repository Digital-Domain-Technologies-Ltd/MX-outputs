---

title: "Co-Directors Report — Terminology Migration: Provenance, Maintained, Attested"
created: "2026-03-20"
version: "1.0"
author: Tom Cranstoun
mx:
  x-mx-segment: "morning"
  audience: stakeholders
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-20-morning-report.md
---


# Co-Directors Report — Terminology Migration: Provenance, Maintained, Attested

**Date:** 20 March 2026 — Morning
**Segment:** morning (since midnight)

---

## Summary

Comprehensive terminology migration across the entire MX ecosystem to eliminate words with unintended legal connotations. "Verified" and "signed" — which imply legal validation and binding agreements — have been replaced with "provenance" (declares origin), "maintained" (proves ongoing stewardship), and "attested" (cryptographic witness without legal weight). This affects the SSOT field dictionary, all specification chapters, the cryptographic engine code, CLI tooling, manifest files, templates, manuscripts, business documents, and the Reginald website HTML.

---

## What Was Done

### 1. Terminology Design (Interview-Driven)

Conducted structured interview to resolve ambiguity across five dimensions: crypto layer scope, provenance scope, maintained field shape, compliance level naming, and HTML field conventions. Key decisions: rename everything including crypto operations, use flat camelCase prefixed fields (provenanceAuthor, maintainedDate, etc.), keep Certificate of Genuineness name unchanged, Level 3 becomes "Attested."

### 2. SSOT and Canon Updates

Updated fields.cog.md (the canonical field dictionary) as the source of truth. Replaced lastVerified with five new camelCase fields: maintainedDate, maintainedBy, provenanceAuthor, provenancePublisher, provenanceOrigin. Updated the cog-unified-spec, all specification chapters (base, structured-data, content-fragment, data-lake, appendix-a, chapters 2 and 5), and the glossary.

### 3. Cryptographic Engine Rewrite

Created new attest-engine.js (v2.0) replacing sign-engine.js. Functions renamed: signCog → attestCog, verifyCog → checkAttestation, signAll → attestAll. Key filenames changed from signing.key/pub to attestation.key/pub. CLI rewritten with backward compatibility for old command names. Deleted old sign-engine.js.

### 4. Manifest, Template, and Content Updates

Updated allaboutv2/.well-known/mx-cogs.json (82 attestation fields), all cog templates, content cogs, and the publisher-verify and static-gen scripts.

### 5. Manuscript Updates

Updated across both books (Protocols and Handbook), shared chapters, glossary, and appendices. Carefully preserved legitimate security terminology (JWT signatures, FIDO2, two-factor) while replacing MX-specific usage.

### 6. Reginald Website HTML

Updated all 8 HTML pages in mx-outputs/reginald/ — the public-facing Reginald site. Level 3 "Signed" → "Attested" throughout, "Cryptographic signing" → "Cryptographic attestation", "verified" → "provenanced" in MX contexts, meta descriptions and Schema.org updated.

### 7. Business and CRM

Updated reginald-grant.md (revenue model language), reginald-explainer.md, and CRM contact example.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 0 (all uncommitted) |
| Files changed (main repo) | 35 |
| Files changed (allaboutv2) | 15 |
| Files changed (mx-outputs) | 8 |
| Files changed (mx-crm) | 1 |
| Lines added (main) | +362 |
| Lines removed (main) | -782 |
| Repositories | 4 (hub, allaboutv2, mx-outputs, mx-crm) |

---

## Decisions Made

- **"Attest" not "witness"** — chosen as the crypto verb because it means "to declare/confirm" without legal binding connotation
- **camelCase for all new fields** — consistent with HTML/JSON-LD conventions (maintainedDate, not maintained-date)
- **Certificate of Genuineness name kept** — despite "certificate" having some legal connotation, it is the established brand
- **Backward compatibility** — CLI accepts old commands (sign, verify, sign-all); publisher-verify checks both attestation and signature fields
- **Level 5 general "verification" kept** — in regulatory audit context, "verification" is the correct English term for third-party checks

---

## Next Steps

- Commit submodules (allaboutv2, mx-outputs, mx-crm, mx-reginald) then hub
- Regenerate book HTML outputs with new terminology
- Regenerate mx-outputs content cogs (currently contain old lastVerified)

---
