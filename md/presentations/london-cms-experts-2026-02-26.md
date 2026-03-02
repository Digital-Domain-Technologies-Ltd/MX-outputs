---
title: "London CMS Experts Lightning Talk"
author: "Tom Cranstoun"
description: "5-15 minute lightning talk introducing Machine Experience (MX) to Boye & Company CMS Experts audience"

mx:
  date: "2026-02-26"
  event: "London CMS Experts"
  location: "London"
  organiser: "Boye & Company"
  license: proprietary
  contentType: presentation
  format: marp
  outputs:
    - london-cms-experts-2026-02-26.pptx
  runbook: |
  marp: true
  theme: default
  paginate: true
  backgroundColor: #1a1a2e
  color: #ffffff
  style: |
    section {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    h1 {
      color: #00d4aa;
      font-size: 2.5em;
    }
    h2 {
      color: #00d4aa;
    }
    strong {
      color: #00d4aa;
    }
    em {
      color: #888;
    }
    table {
      font-size: 0.9em;
    }
    th {
      background-color: #00d4aa;
      color: #1a1a2e;
    }
    td {
      background-color: #2a2a4e;
      color: #ffffff;
    }
    a {
      color: #00d4aa;
    }
---

<!-- _class: lead -->
<!-- _backgroundColor: #1a1a2e -->

# My Journey to Machine Experience

**CMS Kickoff 2024** — I sat in the audience asking:
*"What happens when AI agents visit our websites?"*

Nobody had an answer.

Two years, two books, and one epiphany later — **I have one.**

---

<!-- _class: lead -->
<!-- _backgroundColor: #1a1a2e -->

# The £2,030 That Became £203,000

A website using European number format (2.030,00) got mixed with Anglo-American sites (2,030.00).

**The AI agent couldn't tell which was which.**

*When agents have to "think", they hallucinate.*

---

# Headless CMS Made You AI-Blind

- You decoupled your CMS from the **publication point**
- The front-end team owns the HTML now
- They're optimising for **DX**, not machine readability
- React, Vue, Next.js — beautiful for developers, **opaque to AI agents**

*"The trendiest thing you did in the last 5 years may be the reason AI agents can't understand your site."*

---

# This Isn't Theory. It's Already Happening

**January 2026:**

- Amazon Alexa+ (browser agent)
- Microsoft Copilot Checkout
- Google Universal Commerce Protocol

**Adobe Holiday 2025 Data:**

- AI referrals: **+700%** retail, **+500%** travel
- AI-referred visitors now convert **30% better**

*Who owns your publication point?*

---

# "Don't Make the Agent Think"

Steve Krug's UX principle — applied to AI.

- When an agent must **infer**, it **hallucinates**
- Explicit structure prevents guessing
- **MX = Machine Experience**

*MX is not UX, not SEO, not accessibility — but it benefits all three.*

---

# The CMS Is the Natural Place

- You already control the HTML output
- Schema.org JSON-LD, semantic HTML, explicit state
- The CMS becomes the **AI-readiness layer**

*This is infrastructure work, not content work.*
*One-time implementation, ongoing benefit.*

---

# It's Not Just HTML

Machines don't only read web pages. They process **everything:**

- **PDFs** — contracts, invoices, reports
- **Images** — product photos, diagrams, scans
- **Documents** — Word, spreadsheets, presentations
- **Data feeds** — APIs, JSON, XML

MX tracks the **provenance** of every asset.
*Where it came from. Who authored it. When it changed. Whether to trust it.*

**Machines already do this for us — they just need us to stop hiding the metadata.**

---

# The 5-Stage MX Journey

1. **Discovery** → Crawlable structure, sitemap.xml
2. **Citation** → Fact-level clarity, Schema.org
3. **Search & Compare** → Explicit comparison attributes
4. **Price Understanding** → Product/Offer/PriceSpecification
5. **Purchase Confidence** → Explicit state in DOM

*Miss any stage, the chain breaks.*

---

<!-- _class: lead -->

# Where to Go Next

**MX: The Handbook** — 2 April 2026
*Practical implementation guide*

**CMS Summit Frankfurt** — 12 May 2026
*Deep dive session*

**The Gathering** — MX practitioner community

**allabout.network** — Resources and examples

---

<!-- _backgroundColor: #1a1a2e -->

# This Talk Has MX Metadata

```yaml
title: "London CMS Experts Lightning Talk"
author: "Tom Cranstoun"
date: "2026-02-26"
event: "London CMS Experts"
location: "London"
organiser: "Boye & Company"
mx:
  contentType: presentation
  format: marp
  provenance:
    created: "2026-02-26"
    source: "MX-Hub repository"
    licence: proprietary
```

*This slide deck practises what it preaches.*

*Not for machines. Not for humans. **Design for both. Advance both.***

**Tom Cranstoun** — tom.cranstoun@gmail.com — allabout.network
