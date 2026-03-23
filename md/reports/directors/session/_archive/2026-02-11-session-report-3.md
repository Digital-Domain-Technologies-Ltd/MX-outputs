---

title: "Co-Directors Report — MX App Split View and README Rewrite"
created: "2026-02-11"
version: "1.0"
author: Tom Cranstoun and Maxine
mx:
  audience: stakeholders
  confidential: true
---


# MX App Split View and README Rewrite

## Summary

Session 3 of 11 February delivered two significant changes: the MX App now displays cog metadata alongside the original web page in a split view (instead of replacing it), and the repository README was rewritten from the ground up to reflect MX OS as the central product rather than the original "Invisible Users" book framing.

## What Was Built

### MX App — Split View

The MX App browser previously replaced the entire page when showing MX View (the cog metadata overlay). This was disruptive — the user lost sight of the page they were reading. The new implementation shows both views side by side:

- **Left panel**: the original web page, unchanged
- **Right panel**: the MX View with cog metadata and identity information

Additional improvements:

- Splash screen auto-dismisses after 20 seconds (previously required manual close)
- Navigation tracking now skips internal `data:` URLs so the address bar stays clean
- Z-ordering fixed so the shell overlay (sidebar/dialogue) renders correctly above content

Files changed: `mx-app/main.js`, `mx-app/preload.js`, `mx-app/src/js/app.js`

### README Rewrite

The repository README was completely rewritten. The old version (389 lines) described the project as "MX: The Handbook — Designing the Web for AI Agents and Everyone Else." The new version (239 lines) positions MX OS as the Machine Experience Operating System and leads with the value proposition: *"AI agents read documentation and get it wrong. MX OS fixes that."*

Key changes:

- Title: "MX: The Handbook" replaced with "MX Hub — The Machine Experience Operating System"
- Opening paragraph explains the problem MX OS solves, not what AI agents are
- Repository structure table added for quick navigation
- Concise and current — reflects the project as it stands today

## By the Numbers

| Metric | Count |
| --- | --- |
| Files changed | 4 |
| Lines added | 241 |
| Lines removed | 312 |
| Net change | -71 lines (leaner) |

## Next Steps

- Test the split view on the Frankfurt demo sites to ensure it works across real-world pages
- Consider whether `mx-app/prd.md` (product requirements document, currently untracked) should be committed to the repository

---

*Third report of 11 February 2026. Previous reports covered SOP/SSOT reframing and the railway analogy.*
