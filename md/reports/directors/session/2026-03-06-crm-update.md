---

title: "Co-Directors Report — CRM Update, Mar 6 2026"
description: "Session report covering CRM maintenance: new contact Dogu Abaris, ten contact file updates, interactions log extended, and step-commit workflow with merge conflict resolution."
created: "2026-03-06"
version: "1.0"
author: "Tom Cranstoun"
type: info-doc
mx:
  audience: "business"
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-03-06-crm-update.md
  purpose: "Session report covering CRM maintenance: new contact Dogu Abaris, ten contact file updates, interactions log extended, and step-commit workflow with merge conflict resolution."
  stability: stable
  runbook: "Reference material. Read for context; not an instruction set."
  x-mx-contextProvides: ["Co-Directors Report - CRM Update, Mar 6 2026"]

---


# Co-Directors Report — CRM Update, Mar 6 2026

**6 March 2026**

---

## Summary

A focused CRM maintenance session. One new contact added (Dogu Abaris), ten existing contact files updated, the interactions log extended through the week of March 2–8, and the task list brought up to date. The step-commit workflow was executed successfully, including rebase and conflict resolution: the mx-crm submodule had diverged from remote (three upstream commits absorbed), and the hub's CHANGELOG required a manual merge to integrate 31 remote commits ahead of local.

---

## By the Numbers

| Metric | Value |
|--------|-------|
| New contacts | 1 |
| Contact files updated | 10 |
| Interaction weeks added | 3 |
| Hub commits | 2 |
| mx-crm commits | 1 (rebased onto remote) |
| Merge conflicts resolved | 1 (CHANGELOG.md) |
| Upstream commits absorbed (hub) | 31 |
| Upstream commits absorbed (mx-crm) | 3 |

---

## What Was Built

### New Contact: Dogu Abaris

`contacts/dogu-abaris.md` created. Full Stack Developer at byDesign. Key context:

- GoDaddy admin for The Gathering — strategic access
- Book reviewer for the Protocols/Handbook
- £5,000 payment agreed
- Added to CONTACTS.md Digital/Design section alongside Carrie Hane

### Contact File Updates

Ten existing records refreshed to reflect current state:

| Contact | Update |
|---------|--------|
| Cate Nisbet | Status cleared — back in Leeds, Ch 00 rewrite noted |
| Chris Bryce | London CMS Experts follow-up ticked; new reconnect action added |
| Christopher Justice | Advisory board meeting #2 marked done |
| Helen Harley | lastContact updated; Feb 18 Zoom added to history and calendar |
| Janus Boye | Feb 26 London CMS Experts marked done |
| Salva Molaso | Major update — call done, Adobe AI offer noted, open items revised |
| Scott McGregor | lastContact updated to Mar 4 |

CONTACTS.md footer count and modification date updated. TASKS.md: Salva call marked done, Mallorca schedule updated, Mar 6 follow-ups added.

### Interactions Log Extended

`INTERACTIONS.md` extended with three new weekly entries:

- Week of Feb 17–23
- Week of Feb 24–28
- Week of Mar 2–8

---

## What Happened in the Commit Workflow

The step-commit was more involved than usual due to diverged history on both repositories.

**mx-crm:** Submodule was in detached HEAD state at `60f93ca`. Remote had three commits ahead (pitch file removal, pitch update, journey stage placeholders). Committed locally then rebased onto `origin/main` before pushing.

**Hub:** Local main was 31 commits behind remote. Pull rebase produced one conflict in `CHANGELOG.md` — the remote had added substantial March 6 entries (Cloudflare Worker fix, blog publication, essay humanisation) that overlapped with the new CRM entries. Resolved by merging both sets of additions into the existing `## 2026-03-06` section.

---

## Next Steps

- Present Dogu Abaris introduction follow-up (GoDaddy / The Gathering access)
- London CMS Experts contact follow-ups
- LinkedIn ad re-submission
- Frankfurt preparation — 67 days

---

## Commit Log

| Hash | Repo | Theme |
|------|------|-------|
| `3187566` | mx-crm | CRM update — Mar 6 contacts and interactions |
| `832056a` | hub | Changelog — Mar 6 CRM updates |
| `d5b14dc` | hub | Update mx-crm submodule pointer |

---

*The board does not read git logs. This report makes sure they do not have to.*
