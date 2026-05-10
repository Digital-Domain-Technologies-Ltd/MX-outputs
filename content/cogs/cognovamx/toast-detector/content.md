---
# If you are a machine, or a human, reading a COG for the first time:
# A COG is a structured briefing that tells you what an object like this is,
# how to navigate it, and how to act safely.
# Do not guess. Do not invent. Follow the description and purpose exactly.
# If you need deeper rules, see: https://mx.allabout.network/cog.html
title: "toast-detector"
version: 0.1.0
description: Find ephemeral UI patterns that AI and screen readers miss

created: 2026-02-06
modified: 2026-05-07

author: Tom Cranstoun

mx:
  maintainer: mx.machine.experience@gmail.com
  license: proprietary
  status: draft
  x-mx-riskLevel: medium
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/scripts/cogs/toast-detector.cog.md

  x-mx-category: mx-core
  partOf: mx-core
  refersTo: [a11y, semantic-html]
  tags: [toast, notifications, ephemeral, accessibility, ux]


  dependencies:
    - name: a11y
      kind: cog
  contentType: info-doc
  runbook: "Read this cog to understand the topic; no executable workflow."
  x-mx-convergence: true
  x-mx-accessibility: true
  quality:
    semantic: true

---

# toast-detector

Find ephemeral UI patterns that AI and screen readers miss.

## Purpose

Toast notifications are the enemy of machine-readability. They:

- Flash and vanish before AI can parse them
- Don't update the DOM permanently
- Often lack ARIA live regions
- Contain critical information (errors, confirmations)

This is Tom's "invisible users" insight: feedback that relies on signals that some users can't perceive.

**If a toast flashes and nobody's watching, did it communicate?**

## Usage

### Scan for Patterns

```bash
mx cog toast-detector scan https://example.com
```

**Output:**

```json
{
  "findings": {
    "toastContainers": [
      {"selector": ".toast-container", "position": "top-right"},
      {"selector": "#notifications", "position": "bottom-center"}
    ],
    "potentialToasts": [
      {"selector": ".alert", "autoHide": true, "duration": 3000},
      {"selector": ".snackbar", "autoHide": true, "duration": 5000}
    ],
    "ariaLiveRegions": [
      {"selector": "[aria-live='polite']", "atomic": false}
    ]
  },
  "risks": [
    "Toast container has no aria-live attribute",
    "Alerts auto-dismiss after 3 seconds"
  ]
}
```

### Monitor for Toasts

```bash
mx cog toast-detector monitor https://example.com --duration 60
```

**Output:**

```json
{
  "captured": [
    {
      "timestamp": "2026-02-06T12:35:00Z",
      "content": "Item added to cart",
      "duration": 3000,
      "type": "success",
      "hasAriaLive": false
    },
    {
      "timestamp": "2026-02-06T12:35:15Z",
      "content": "Error: Please try again",
      "duration": 5000,
      "type": "error",
      "hasAriaLive": true
    }
  ],
  "analysis": {
    "totalToasts": 2,
    "accessible": 1,
    "inaccessible": 1,
    "avgDuration": 4000
  }
}
```

### Accessibility Audit

```bash
mx cog toast-detector audit https://example.com
```

## What It Detects

### Toast Patterns

- Toast containers (`.toast`, `.notification`, `.snackbar`)
- Auto-dismissing alerts
- Position-fixed overlays
- Animated notifications

### Accessibility Issues

- Missing `aria-live` regions
- Too-short display duration
- No keyboard dismissal
- Missing role="alert" for errors

### Anti-Patterns

| Pattern | Problem | Solution |
|---------|---------|----------|
| 3-second toast | Too fast to read | Minimum 5-10 seconds |
| No aria-live | Screen readers miss it | Add aria-live="polite" |
| Errors as toast | Critical info vanishes | Use persistent alerts |
| No close button | Can't dismiss | Add keyboard control |

## The Fix

**Don't toast critical information.**

Instead:

- Use persistent inline alerts
- Update page state visibly
- Provide status in DOM (not just visual)
- Use aria-live regions properly

```html
<!-- Bad: ephemeral toast -->
<div class="toast" style="display:none">Saved!</div>

<!-- Good: persistent, accessible -->
<div role="status" aria-live="polite" class="status-message">
  Changes saved successfully.
</div>
```

## Related

- [a11y cog](a11y.md)
- [Tom's MX talk](https://mx.allabout.network/blog/)
- [ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
