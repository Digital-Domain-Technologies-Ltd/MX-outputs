---
title: "Co-Directors Report - Principles De-numbered; Context-Preserving References Tooling"
description: "Evening session: a deterministic link-path tool, the principle list converted from numbers to names, and a sync hook that keeps it that way."
author: "Tom Cranstoun"
created: 2026-06-05
modified: 2026-06-05
version: "1.0"

mx:
  status: active
  contentType: report
  audience: [business]
  confidential: true
  tags: [directors-report, session, evening]
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-06-05-evening-report.md
---

# Co-Directors Report - Principles De-numbered; Context-Preserving References Tooling

**Date:** 5 June 2026 - Evening
**Segment:** evening (since 5pm)

---

## Summary

We closed a recurring defect class: references that break when a document moves, and lists that go stale when they reorder. The session shipped a deterministic link-path tool that fixes wrong-depth links and leaves correct ones alone, rewrote the canonical Context-Preserving References principle to match how machines and previewers actually resolve a link, then converted every MX principle and anti-pattern reference in the repository from a number to a name. A new sync hook now blocks any numbered reference from creeping back and keeps the canonical principle list machine-readable. Six commits across two repositories; the working surface is clean.

---

## What Was Done

### 1. Context-Preserving References tooling

Built a deterministic link-path tool. A markdown body link must resolve from the file that holds it, which a previewer and a machine reading the file both do the same way, so the rule is the correct relative depth - never the wrong one. The tool repairs wrong-depth links and relocates moved targets by name, leaves correct links untouched, and reports genuinely dead links for a human rather than deleting them. The canonical principle was rewritten to name the actual failure (wrong depth, or a file travelling without its address) instead of treating relative links as the fault. The free book, handbook, and protocols each gained a depth-appropriate version of the same explanation.

### 2. Principles and anti-patterns referenced by name, not number

Numbers go stale the moment a list reorders. We caught a live instance: a phrasebook entry attributed "any document can be a cog" to "Principle 14", which had silently become a different principle when the list grew. Every principle reference (the single source of truth, the manuscripts, the reference docs, the writing guides) and the entire anti-patterns catalogue (a chapter plus a reference appendix plus their cross-references) now use names. The external WCAG scheme keeps its numbering, because that mirrors a fixed outside standard.

### 3. A sync hook that keeps it that way

The principle list is now derived from the single source automatically: add a new principle heading and a machine-readable index regenerates. A pre-push gate and a test block any numbered reference from returning and verify that every link into the principles document points at a principle that actually exists - the exact check that would have caught the stale attribution above.

### 4. Hygiene

Fixed the rulebook's own pre-existing violation: the configuration file that bans the long dash carried sixty-five of them; all replaced with hyphens. Removed dead code left over from an earlier approach to the link tool. Logged a scoped follow-up for the wider long-dash cleanup across the rest of the repository.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| Commits | 6 |
| Files changed | 126 |
| Lines added | +1617 |
| Lines removed | -616 |
| Repositories | 2 (MX-hub, MX-outputs) |
| New deterministic guards | 1 (principle-sync, pre-push Gate 16) |
| New tests wired into the suite | 2 |

---

## Why It Matters

This is the discipline we sell. MX makes content machine-readable; the value proof is that our own repository holds itself to the standard deterministically, not by good intentions. A reference that resolves for any reader, a principle list that cannot drift, and a gate that proves it on every push are the same kind of tamper-evident, verifiable infrastructure a regulated buyer is paying for. The session also demonstrates the working pattern we describe to clients: when a defect repeats, it becomes a script, not a reminder.

---

## The Insight

The "Principle 14" bug is the whole argument in miniature. A numbered reference is correct on the day it is written and wrong the day someone inserts an item above it, and nothing tells you - the document still reads fine, the link still looks plausible, the machine following it just arrives at the wrong place. This is the same failure as a relative link at the wrong depth. Both are references that depend on a context the reader no longer has. Naming the principle, and computing the link depth, remove the dependency. The fix is not vigilance; it is making the wrong form impossible to ship.

---

## Decisions Made

- Principles and anti-patterns are referenced by name, never number. Encoded in the canon, a CLAUDE.md rule, a feedback memory, and a pre-push gate.
- In-repo markdown body links use the correct relative depth; the web uses the full canonical address; frontmatter stays repo-root-relative. One principle, three carriers.
- External standards keep their own numbering (WCAG's four principles mirror the W3C scheme).
- Dead links are reported for a human, never auto-deleted.

---

## Open Questions

- System-wide long-dash removal: 774 files still carry the banned dash. A blanket sweep is unsafe because the rulebook and the prose scanners use the dash as an example of what to avoid, and manuscripts may have used it intentionally under older guidance. Scope decision pending (canon plus always-on docs only, or the whole repo). Logged in REMINDERS.

---

## What This Means for Investors

No revenue event. This is risk reduction and capability: the governance story we pitch is now demonstrably true of our own corpus, which is the difference between a claim and a reference a buyer can inspect. The deterministic-guard pattern (defect becomes a gate) is the same machinery the audit product runs on, so the investment compounds.

---

## Next Steps

- Decide the scope of the system-wide long-dash cleanup (canon-only vs whole repo) and run a code-fence-aware pass that skips the example-bearing files.
- The mx-outputs hub pointer is left for the parallel session to bump; the principle-reference fix in the published content copies is already live on the MX-outputs remote.

---

## Commit Log

| Hash | Description |
|------|-------------|
| 1fdc4066 | Context-Preserving References: correct-depth link tool; principles + anti-patterns de-numbered |
| 5efe45ea | De-number remaining anti-pattern taxonomies (named, not numbered) |
| 4bcb859b | Add principle-sync system: derived index + named-not-numbered guard |
| f52a3df0 | Fix pre-existing em-dashes in CLAUDE.md (use hyphens) |
| 1a60e614 | Add reminder: consider system-wide em-dash removal |
| 625cef67 | De-number principle references in cog content copies (MX-outputs) |
