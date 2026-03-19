---
title: "REGINALD — The Global COG Registry"
description: "Registry for Genuine Information, Notarised Authentication, and Legitimate Documentation. The DNS of machine-readable documentation."
author: "Tom Cranstoun"
created: 2026-03-01
modified: 2026-03-19
version: "1.0"

mx:
  status: active
  contentType: info-doc
  category: reginald
  tags: [reginald, registry, cogs, trust, verification, ai-agents, dns, resolution, machine-experience]
  audience: [humans, machines]
  license: proprietary
  maintainer: "tom.cranstoun@gmail.com"
  reviewCycle: quarterly
  expires: 2026-09-19
---

# REGINALD

**Registry for Genuine Information, Notarised Authentication, and Legitimate Documentation.**

REGINALD is the global registry for machine-readable documentation. It works like DNS — mapping COG identifiers to publisher-hosted content URLs. REGINALD does not host content. Each publisher serves their own COGs from their own domain. AI agents query REGINALD to discover and verify content, then fetch directly from the publisher.

When AI agents guess, people lose money. REGINALD exists to eliminate that guessing.

---

## The Problem REGINALD Solves

AI inference systems generate wrong answers to questions that already have documented answers. This happens because documentation was designed for humans reading web pages — not for machines parsing structured data.

A river cruise priced at £2,030 was reported by an AI agent as £203,000. European number formatting, no Schema.org PriceSpecification, no structured price data. The couple never booked. The cruise company never knew why it lost the sale.

A developer asked an AI coding assistant about a documented authentication command. The command existed. The AI denied it. The troubleshooting cascade consumed over 40,000 tokens across two AI systems. The correct answer required 200 tokens — a 200x cost multiplier on a single question.

REGINALD and COGs eliminate this waste at the source. A single API call replaces the cycle of web search, page parsing, prose extraction, and speculative synthesis.

---

## How REGINALD Works

### Resolution Flow

1. AI Agent queries `/api/v1/namespaces` — discovers registered namespaces
2. Fetches namespace COG list — `/api/v1/namespaces/{ns}/cogs.json`
3. Fetches pointer record — `/cogs/{ns}/{name}/latest.json`
4. Follows `canonical_url` to the publisher's server
5. Verifies `content_hash` against the signed record

### Two-Layer Trust

**Publisher signs content.** The publisher cryptographically signs their COG, proving "I wrote this and it is current." The signature travels with the content.

**Registry signs pointer.** REGINALD signs the pointer record with Ed25519, proving "this document was registered, validated, and conforms to specifications."

REGINALD is a pure resolver, not a host. It resolves identifiers to URLs — it never stores or caches content. Publishers retain full control of their documentation and can update it at any time.

---

## What Is a COG?

A COG is a markdown file with YAML frontmatter. No proprietary format. No binary encoding. No special tooling required. A `.cog.md` file that any text editor can open and any AI system can parse.

The YAML frontmatter is for machines. The markdown body is for humans. Same file, both audiences served.

### The Dual Meaning

| Layer | Full Name | What It Proves |
|-------|-----------|----------------|
| **Certificate** | Certificate of Genuineness | "This document is real" |
| **Contract** | Contract of Governance | "Someone keeps this accurate" |

Every COG carries both layers. The Certificate tells an AI agent whether to trust the content. The Contract tells it who is responsible for keeping the content current — with a named maintainer, a review cycle, and an expiry date.

### Two Types

**Info-Doc** — A COG without an action block. Documents, describes, certifies. The single source of truth for a product, API, or specification.

**Action-Doc** — A COG with an action block. Validates, generates, extracts, analyses. A Standard Operating Procedure that executes itself. The document is the programme.

---

## API

Base URL: `https://reginald.allabout.network`

### Read Endpoints (Public)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/index.json` | Full registry index |
| GET | `/api/v1/stats.json` | Registry statistics |
| GET | `/api/v1/publishers.json` | Registered publishers |
| GET | `/api/v1/namespaces.json` | Namespace directory |
| GET | `/api/v1/namespaces/{ns}/cogs.json` | COGs in a namespace |
| GET | `/cogs/{ns}/{name}/latest.json` | Pointer record (latest version) |
| GET | `/api/v1/public-key.pem` | Registry Ed25519 public key |
| GET | `/llms.txt` | AI-readable registry summary |

### Write Endpoints (Auth Required)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/v1/subscribe` | Create Stripe checkout session |
| POST | `/api/v1/register` | Register or update a namespace |
| GET | `/api/v1/publisher/status` | Check subscription status |
| POST | `/api/v1/publisher/token/rotate` | Rotate API token |

Read endpoints require no authentication. Write endpoints require a Bearer token issued during subscription. Token format: `reg_` prefix + 64 hex characters.

---

## Five Compliance Levels

| Level | Name | Requirements | Use Case |
|-------|------|-------------|----------|
| 1 — Basic | YAML present, publisher identified | Internal documentation | Quick-start adoption |
| 2 — Structured | MX-compliant format, maintainer + contact | Public documentation | Professionalised content |
| 3 — Signed | Cryptographically signed, review cycle + triggers | **REGINALD minimum** | Commercial documentation |
| 4 — Registered | Signed + registered, full contract with SLA | Enterprise documentation | Regulated industries |
| 5 — Audited | Signed + registered + third-party verified | Critical documentation | Healthcare, finance, legal |

Level 3 is the minimum for REGINALD registration. Level 5 is for industries where a wrong answer does not just waste tokens — it harms people.

---

## MX Cogify Plugins

Free plugins to make any website AI-ready. One install, every page gets MX metadata and Schema.org structured data.

**Traditional CMS:** WordPress (server-side PHP), Drupal (server-side PHP)

**Website Builders:** Shopify (server-side Liquid), Wix (client-side JS), Squarespace (client-side JS)

**Developer:** Adobe Edge Delivery Services (client-side JS block), Any HTML Site (universal JS)

Server-side plugins embed metadata before the page reaches the browser — optimal for AI agents that do not run JavaScript. Client-side plugins add metadata after page load. Both work, but server-side is preferred where available.

---

## Pricing

Per-namespace pricing — like domain registration. Read-side API access is always free.

| Tier | Price | Namespaces | Key Features |
|------|-------|------------|--------------|
| Open | Free | 1 | Public COGs, basic resolution, community support |
| Professional | £149/year | Up to 3 | Resolution analytics, priority cache refresh, email support |
| Business | £499/year | Up to 10 | Private COGs, SLA (99.9%), verification badge |
| Enterprise | Custom | Unlimited | Dedicated instance, custom SLA, API rate guarantees |

---

## Current State

The registry is live and operational at `https://reginald.allabout.network`.

Core audit action-COGs ship with REGINALD, auditing websites for machine-readability: accessibility, clarity, link checking, llms.txt, metadata, pricing, readability, robots.txt, Schema.org, semantic HTML, sitemaps, toast detection, and COG validation.

---

## Contact

- **Website:** [allabout.network](https://allabout.network)
- **Email:** [tom.cranstoun@gmail.com](mailto:tom.cranstoun@gmail.com)
- **Registry:** [reginald.allabout.network](https://reginald.allabout.network)

CogNovaMX Ltd — Making the web work for everyone and everything that uses it.
