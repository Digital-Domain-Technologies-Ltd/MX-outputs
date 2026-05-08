---
title: "Co-Directors Report — LinkedIn Ad Fix + Repository Handover"
created: "2026-02-17"
version: "2.0"
modified: "2026-02-17"
author: Tom Cranstoun

mx:
  x-mx-segment: "afternoon"
  audience: business
  confidential: true
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-outputs/main/md/reports/directors/session/2026-02-17-afternoon-directors-report.md
---

# Co-Directors Report — LinkedIn Ad Fix + Repository Handover

**Date:** 2026-02-17 (Afternoon)
**Focus:** Risk mitigation + organizational governance

---

## Summary

LinkedIn rejected our MX coming soon page ad for "non-functional site." The rejection was automated but pointed to real issues: placeholder language ("Coming Soon"), content hidden until user scrolls, and no conversion mechanism. All three issues have been fixed and the page is now deployed live.

The ad is ready for re-submission. LinkedIn approval typically takes 24-48 hours. We have backup options if any element fails.

---

## Risk Assessment and Mitigation

### Three Rejection Criteria (All Addressed)

**1. Placeholder Language**

- **Risk:** "Coming Soon" badge signaled to LinkedIn's crawler that this was an under-construction page, not a real business offering
- **Mitigation:** Changed to "Join the Waitlist" — action-oriented, present-tense language
- **Status:** ✅ Resolved

**2. Hidden Content**

- **Risk:** CSS set all sections to `opacity: 0` with IntersectionObserver revealing them on scroll. LinkedIn's crawler doesn't scroll, so it saw an empty page with just a badge.
- **Mitigation:** Implemented dual-class system:
  - Critical content (Problem, Solution) immediately visible to crawlers
  - Lower-priority content (Product Family, Books, Contact) still animates for human visitors
- **Technical:** Changed `.section` default from `opacity: 0` to `opacity: 1`, added `.animate-on-scroll` class for sections that should still trigger on scroll
- **Status:** ✅ Resolved

**3. No Conversion Path**

- **Risk:** No form, no CTA button, just passive contact links. LinkedIn flags this as non-functional placeholder.
- **Mitigation:** Added three conversion elements:
  - Prominent pink "Get Early Access" CTA button in hero section
  - Email signup form between Solution and Product Family sections
  - Social proof section (CMSCritic feature, Boye & Company membership)
- **Status:** ✅ Resolved

### Backup Options

**If mailto form proves unreliable:**

- **Formspree** ready as upgrade path (free tier: 50 submissions/month)
- Requires 5-minute setup (signup + form ID replacement)
- Plan documented in deployment notes

**If second rejection occurs:**

- Page now addresses all three automated review criteria
- Manual appeal process available (low likelihood needed)

---

## What Changed

**Technical Implementation:**

- 241 line insertions, 9 deletions
- 4 critical phases + 3 optional enhancements
- CSS: New classes for CTA button, social proof, email form, dual visibility system
- HTML: CTA button, social proof section, email signup form, updated section classes
- JavaScript: Updated to target only `.animate-on-scroll` sections
- Schema: Added FAQPage structured data with 3 Q&A pairs

**Deployment:**

- Submodule committed: `a7ce9916` (LinkedIn ad fix)
- Pushed after rebase: `aacb28d4`
- Parent repo updated: `faa60ac` (submodule pointer)
- Live URL: <https://allabout.network/mx/coming-soon.html>

**Documentation:**

- Afternoon session report created (operational detail)
- REMINDERS.md updated with re-submission reminder
- CHANGELOG.md updated with full implementation details

---

## What This Means for Investors

**Proof of Speed:**

- Problem reported → root cause identified → planned → implemented → deployed → documented in one afternoon session
- No extended delay for ad campaign launch

**Proof of Professional Setup:**

- Social proof visible (CMSCritic, Boye & Company)
- Email capture mechanism in place for waitlist building
- FAQ structured data for SEO/crawler understanding

**Risk Profile:**

- Three distinct rejection criteria all addressed simultaneously
- Backup options documented and ready
- Page now signals "active pre-launch campaign" rather than "under construction"
- Re-submission ready immediately

---

## Repository Handover to The Gathering

**Context:** The Gathering is an independent standards body (like W3C) that governs the MX open standard. Cog-Nova-MX implements one version (MX OS) of that standard. For legal, governance, and credibility reasons, the standard documents must be organizationally separate from implementation documents.

**Problem Identified:** Standard documents (field dictionary, specifications, ADRs, NDRs) were scattered across the MX-Hub repository, mixed with Cog-Nova-MX implementation materials. This conflated governance boundaries and created confusion about what belongs to the standard vs the product.

### What We Accomplished

**1. Complete Audit**

- Interviewed user to clarify ownership rules
- Generated comprehensive audit report with 10 sections
- Identified 12 files to move TO The Gathering, 3 files to move OUT
- Resolved 3 unclear ownership cases through structured questioning

**2. Organizational Restructure**

- Created new folder structure in `MX-Canon/MX-The-Gathering/`:
  - `specifications/` — Core standard documents (cog-unified-spec, field-dictionary, mx-standards-alignment)
  - `architecture-decisions/` — ADRs affecting the standard (block architecture, namespace policy)
  - `naming-decisions/` — NDRs for field naming (block naming, camelCase, spelling neutrality)
  - `guides/` — Educational content (what-is-a-cog, cogs-for-agent-developers)

**3. File Migration (9 files TO The Gathering)**

- Moved using `git mv` to preserve history
- Updated all `partOf` frontmatter fields to `mx-the-gathering`
- Updated `author` fields to "The Gathering" for standard documents
- Corrected `who-is-maxine.cog.md` partOf (stays in MX-Hub as product branding)

**4. File Removal (3 files FROM The Gathering)**

- Moved promotional materials (LinkedIn identity kit, LinkedIn promo) to MX-Maxine-Lives/deliverables/
- Moved planning document (launch-plan.md) to MX-Maxine-Lives/management/plans/
- Kept `announcing-the-gathering.md` as foundational documentation

**5. Namespace Policy Split**

- **Problem:** Original ADR covered BOTH standard namespaces (The Gathering) AND vendor extensions (Cog-Nova-MX)
- **Solution:** Split into two separate ADRs:
  - `adr-02-namespace-policy.cog.md` (The Gathering) — Standard namespaces: no prefix + `mx:`
  - `vendor-extensions-policy.cog.md` (Cog-Nova-MX) — Vendor extensions: `x-mx-` and `x-mx-p-`
- **Critical Clarification:** The `mx:` namespace belongs to The Gathering (open standard), NOT to Cog-Nova-MX (vendor)
- Archived original dual-scope ADR with references to both new documents

**6. Documentation**

- Created comprehensive `README.md` for The Gathering repository
- Completed `gathering-handover-audit.md` with all decisions finalized
- Updated CHANGELOG.md with full handover documentation

### What This Means for Governance

**Clean Separation:**

- The Gathering controls: standard vocabulary, `mx:` namespace, cog specification, field dictionary, ADRs/NDRs affecting standard
- Cog-Nova-MX controls: implementation (MX OS), vendor extensions (`x-mx-` prefixes), product features, tooling

**Precedent Model:**

- Dublin Core (DCMI governs `dc:` namespace) → The Gathering governs `mx:` namespace
- Linux (POSIX standard, many implementations) → The Gathering's spec, multiple implementations possible
- W3C (standards body) vs browser vendors → The Gathering vs Cog-Nova-MX

**Legal/IP Protection:**

- Standard is MIT-licensed, vendor-neutral, open to all implementers
- No vendor lock-in — anyone can build Gathering-compliant systems
- Cog-Nova-MX' competitive advantage is implementation quality, not spec ownership

### What This Means for Investors

**Credibility Signal:**

- Independent standards governance separates product from platform
- Pattern followed by mature technology ecosystems (W3C, IETF, OpenAPI, Schema.org)
- Demonstrates sophistication and long-term thinking

**Market Position:**

- Cog-Nova-MX = "first and best implementation" of The Gathering's standard
- Not "proprietary vendor" — "reference implementation of open standard"
- Opens door to ecosystem plays (other vendors adopting standard = market validation)

**Risk Reduction:**

- If Cog-Nova-MX pivots/fails, standard survives under The Gathering
- Customers adopting standard aren't locked to single vendor
- Enterprise-friendly positioning (standards > products for procurement)

### By the Numbers

**Files Reorganized:**

- 9 files moved TO The Gathering
- 3 files moved FROM The Gathering to MX-Hub
- 2 new ADRs created (namespace split)
- 1 comprehensive README created
- 1 archived ADR preserved for historical reference

**Commits:**

- Commit 1 (`b1caf3c`): Repository handover implementation — 14 files changed (+595, -322)
- Commit 2 (`e36fb52`): Changelog update — 1 file changed (+18)
- Both pushed to remote successfully

**Validation:**

- ✅ All 114 cog files validated successfully
- ✅ Registry synced automatically
- ✅ Markdown linting passed
- ✅ All `buildsOn` references use cog names (not paths) — future-proof for Reginald resolution

### Next Phase: Publishing

**When The Gathering Handover Happens Physically:**

1. Set up <https://mx-thegathering.org> hosting
2. Configure Reginald to serve The Gathering cogs
3. Publish as npm package (optional)
4. Update MX-Hub to reference published package via URL

**Until Then:**

- MX-The-Gathering folder in MX-Hub serves as staging area
- Clean governance boundaries already established
- Documentation ready for external consumption

---

## Next Steps

1. **Verify Live Page** (Tom)
   - Open <https://allabout.network/mx/coming-soon.html>
   - Confirm all changes visible (badge, CTA, form, social proof)
   - Test email form (mailto should open email client)

2. **Re-Submit to LinkedIn** (Tom)
   - Go to LinkedIn Campaign Manager
   - Find rejected ad
   - Click "Re-submit"
   - Monitor approval status (24-48 hours typical)

3. **Monitor Performance** (After Approval)
   - Watch form submissions via email
   - Consider upgrading to Formspree if mailto proves unreliable
   - Track LinkedIn Insight Tag data for retargeting

4. **Contingency Planning** (If Second Rejection)
   - Review specific rejection reason
   - Escalate to manual appeal if needed
   - Consider Formspree upgrade as stronger conversion signal

---

## By the Numbers

**Commits This Afternoon:**

- Submodule (allaboutv2): 1 commit
- Parent repo: 3 commits (submodule pointer, session report, changelog)

**Files Changed:**

- 1 file in submodule (coming-soon.cog.html)
- 3 files in parent repo (REMINDERS.md, session report, CHANGELOG.md)

**Lines Changed:**

- +241 insertions, -9 deletions in HTML/CSS/JavaScript

**Time from Problem to Deployment:**

- One afternoon session (approx. 3-4 hours including planning, implementation, testing, deployment, documentation)

---

## Commit Log

**Submodule (allaboutv2):**

- `a7ce9916` → `aacb28d4` — Fix LinkedIn ad rejection — MX coming soon page

**Parent Repo:**

- `faa60ac` — Update allaboutv2 submodule — LinkedIn ad fix deployed
- `3ab3bcd` — docs: afternoon session report — LinkedIn ad fix
- `123ad41` — docs: update changelog — LinkedIn ad fix + deployment

---

## Risk Register Update

**New Risk Identified:**

- **mailto Form Reliability** — Depends on user's email client configuration
  - **Mitigation:** Formspree upgrade path documented and ready (5-minute implementation)
  - **Impact:** Low — pre-launch signups, not production sales funnel
  - **Probability:** Medium — some users may not have email clients configured

**Risk Resolved:**

- **LinkedIn Ad Campaign Blocked** — Page rejected for "non-functional site"
  - **Status:** Resolved — all three rejection criteria addressed
  - **Verification:** Re-submission scheduled, approval monitoring in place

---

**Prepared by:** Tom Cranstoun and Maxine
**Distribution:** Co-Directors, Advisory Board
**Classification:** Internal — Not for public distribution

---

*Next co-directors report: When evening segment begins (after 17:00) or next working day*
