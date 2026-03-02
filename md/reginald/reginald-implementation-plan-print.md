---
title: "REGINALD Implementation Plan"
version: "1.0.0"
created: 2026-02-26
author: "Tom Cranstoun and Maxine"
description: "Technical implementation roadmap for the REGINALD registry"

mx:
  license: "proprietary"
  status: draft
  confidential: true
---

# REGINALD Implementation Plan

**Registry for Genuine Information, Notarised Authentication, and Legitimate Documentation**

**Version 1.0.0 | February 2026 | CONFIDENTIAL**

---

## Executive Summary

This document outlines the technical implementation plan for REGINALD, the global registry for machine-readable documentation (COGs). REGINALD enables AI agents to look up verified answers instead of guessing, reducing hallucination rates and inference waste.

**Target Launch:** 12 May 2026 (CMS Summit Frankfurt)

**Operator:** MX Reginald Ltd (Glasgow)

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Phase 1: Registry Core](#phase-1-registry-core)
3. [Phase 2: Trust Layer](#phase-2-trust-layer)
4. [Phase 3: API Service](#phase-3-api-service)
5. [Phase 4: CDN Distribution](#phase-4-cdn-distribution)
6. [Infrastructure Requirements](#infrastructure-requirements)
7. [Security Considerations](#security-considerations)
8. [Timeline](#timeline)
9. [Success Metrics](#success-metrics)

---

## Architecture Overview

![REGINALD Architecture - Ingest, Index, Serve with Trust Layer](diagrams/reginald-architecture.png)

### Core Components

| Component | Purpose | Technology |
|-----------|---------|------------|
| **Ingest** | Accept COG submissions | REST API, GitHub webhooks |
| **Index** | Validate, sign, store | Node.js, PostgreSQL |
| **Serve** | Query API, CDN delivery | Edge functions, Cloudflare |
| **Trust** | Cryptographic signing | Ed25519, JWT |

---

## Phase 1: Registry Core

**Timeline:** Weeks 1-4 (Complete by early March 2026)

### 1.1 Data Model

```yaml
# Registry Entry Schema
entry:
  id: uuid                      # Unique identifier
  namespace: string             # Publisher namespace (e.g., "cog-nova-mx")
  name: string                  # COG name (e.g., "pricing-validator")
  version: semver               # Semantic version

  content:
    raw: text                   # Original COG content
    frontmatter: object         # Parsed YAML metadata
    bodyHash: sha256           # Content integrity hash

  trust:
    complianceLevel: 1-5       # REGINALD compliance tier
    signature: string           # Ed25519 signature
    signedAt: timestamp
    signedBy: string           # Signing authority
    certificate: object         # Certificate of Genuineness

  metadata:
    createdAt: timestamp
    updatedAt: timestamp
    publisherId: uuid
    downloads: integer
    verified: boolean

  discovery:
    tags: array
    category: string
    description: string
    keywords: array
```

### 1.2 Compliance Levels

| Level | Name | Requirements | Trust |
|-------|------|--------------|-------|
| **1** | Basic | Valid YAML frontmatter | Self-attested |
| **2** | Structured | Complete metadata, valid schema | Validated |
| **3** | Verified | Publisher identity confirmed | Publisher-signed |
| **4** | Certified | MX audit passed | MX-certified |
| **5** | Authoritative | Official source, continuously validated | Authority-signed |

### 1.3 Index Generation

```javascript
// index.json structure
{
  "version": "1.0.0",
  "generated": "2026-02-26T10:00:00Z",
  "entries": {
    "cog-nova-mx/pricing-validator": {
      "latest": "1.2.0",
      "versions": ["1.0.0", "1.1.0", "1.2.0"],
      "compliance": 4,
      "category": "validation",
      "tags": ["pricing", "ecommerce", "audit"]
    }
  },
  "namespaces": ["cog-nova-mx", "acme-corp"],
  "stats": {
    "totalCogs": 156,
    "publishers": 23,
    "level_5": 12
  }
}
```

### 1.4 Deliverables

- [ ] Database schema (PostgreSQL)
- [ ] Index generation script
- [ ] CLI tool: `reginald publish <cog>`
- [ ] CLI tool: `reginald search <query>`
- [ ] GitHub Action for auto-publish

---

## Phase 2: Trust Layer

**Timeline:** Weeks 5-8 (Complete by early April 2026)

### 2.1 Signing Engine

The signing engine validates COGs and applies cryptographic signatures.

![Signing Engine Flow - COG Input to Validator to Signer](diagrams/signing-engine-flow.png)

### 2.2 Signature Format

```yaml
# Certificate of Genuineness (COG certificate)
certificate:
  version: "1.0"
  cogId: "cog-nova-mx/pricing-validator@1.2.0"
  contentHash: "sha256:abc123..."

  compliance:
    level: 4
    checksPassed:
      - frontmatterValid
      - schemaValid
      - publisherVerified
      - mxAuditPassed
    checksFailed: []

  signature:
    algorithm: "Ed25519"
    publicKey: "reginald-signing-key-2026"
    signature: "base64:..."
    signedAt: "2026-02-26T10:00:00Z"

  chain:
    issuer: "MX Reginald Ltd"
    authority: "reginald.allabout.network"
```

### 2.3 Verification API

```bash
# Verify a COG's authenticity
GET /api/v1/verify/{namespace}/{name}@{version}

# Response
{
  "verified": true,
  "complianceLevel": 4,
  "certificate": {...},
  "warnings": []
}
```

### 2.4 Deliverables

- [ ] Ed25519 key management system
- [ ] Signing engine service
- [ ] Verification API endpoint
- [ ] Certificate generation
- [ ] CLI tool: `reginald verify <cog>`

---

## Phase 3: API Service

**Timeline:** Weeks 9-12 (Complete by early May 2026)

### 3.1 API Endpoints

```yaml
# Core Endpoints
/api/v1/cogs:
  GET:     List all COGs (paginated)
  POST:    Submit new COG

/api/v1/cogs/{namespace}/{name}:
  GET:     Get COG metadata

/api/v1/cogs/{namespace}/{name}@{version}:
  GET:     Get specific version

/api/v1/cogs/{namespace}/{name}/content:
  GET:     Get raw COG content

/api/v1/search:
  GET:     Search COGs by query
  params:  q, category, tags, complianceMin

/api/v1/verify/{namespace}/{name}@{version}:
  GET:     Verify COG authenticity

# Publisher Endpoints
/api/v1/publishers:
  POST:    Register publisher

/api/v1/publishers/{id}/cogs:
  GET:     List publisher's COGs
```

### 3.2 Query Protocol

For AI agents querying REGINALD:

```bash
# Simple lookup
GET /api/v1/cogs/cog-nova-mx/pricing-validator
Accept: application/json

# AI-optimised lookup (returns structured answer)
GET /api/v1/lookup?tool=marp-cli&question=how-to-export-pptx
Accept: application/vnd.reginald.ai+json

# Response includes:
# - Direct answer
# - Source COG reference
# - Confidence level
# - Certificate
```

### 3.3 Rate Limiting

| Tier | Requests/min | Requests/month | Price |
|------|--------------|----------------|-------|
| Free | 10 | 1,000 | £0 |
| Basic | 60 | 10,000 | £12.50/year |
| Professional | 600 | 100,000 | £99/year |
| Enterprise | Unlimited | Unlimited | Custom |

### 3.4 Deliverables

- [ ] REST API implementation
- [ ] Rate limiting middleware
- [ ] API key management
- [ ] OpenAPI specification
- [ ] SDK: `@reginald/client` (JavaScript)
- [ ] SDK: `reginald` (Python)

---

## Phase 4: CDN Distribution

**Timeline:** Post-launch (May-July 2026)

### 4.1 Edge Architecture

![REGINALD CDN Architecture - Edge nodes connecting to Glasgow Origin](diagrams/cdn-architecture.png)

### 4.2 Content Negotiation

```bash
# Request HTML rendering
GET /cogs/cog-nova-mx/pricing-validator
Accept: text/html

# Request raw COG
GET /cogs/cog-nova-mx/pricing-validator
Accept: text/markdown

# Request metadata only
GET /cogs/cog-nova-mx/pricing-validator
Accept: application/json

# Request AI-optimised format
GET /cogs/cog-nova-mx/pricing-validator
Accept: application/vnd.reginald.ai+json
```

### 4.3 Custom Headers

```http
X-Reginald-Version: 1.0
X-Reginald-Compliance: 4
X-Reginald-Signature: base64:...
X-Reginald-Verified: true
X-Reginald-Publisher: cog-nova-mx
X-Reginald-Updated: 2026-02-26T10:00:00Z
```

### 4.4 Deliverables

- [ ] Cloudflare Workers configuration
- [ ] Edge caching rules
- [ ] Content negotiation logic
- [ ] Custom header injection
- [ ] Global distribution setup

---

## Infrastructure Requirements

### Development Environment

```yaml
services:
  api:
    runtime: Node.js 20 LTS
    framework: Fastify

  database:
    primary: PostgreSQL 16
    cache: Redis 7
    search: Elasticsearch 8

  storage:
    cogs: S3-compatible (Cloudflare R2)
    keys: HashiCorp Vault
```

### Production Environment

| Component | Service | Estimated Cost |
|-----------|---------|----------------|
| API hosting | Cloudflare Workers | £20/month |
| Database | Neon PostgreSQL | £50/month |
| Cache | Upstash Redis | £10/month |
| Storage | Cloudflare R2 | £5/month |
| CDN | Cloudflare (included) | £0 |
| Monitoring | Grafana Cloud | £0 (free tier) |
| **Total** | | **~£85/month** |

### Domain Structure

![Domain Structure - allabout.network paths](diagrams/domain-structure.png)

---

## Security Considerations

### Key Management

1. **Signing keys** stored in HashiCorp Vault
2. **Key rotation** every 90 days
3. **Multi-signature** for Level 5 COGs
4. **Hardware security module** (HSM) for production signing

### Access Control

```yaml
roles:
  anonymous:
    - readPublicCogs
    - search
    - verify

  publisher:
    - anonymous permissions
    - submitCogs
    - manageOwnCogs

  auditor:
    - publisher permissions
    - certifyCogs (up to level 4)

  authority:
    - all permissions
    - signLevel5
    - manageKeys
```

### Threat Model

| Threat | Mitigation |
|--------|------------|
| Malicious COG submission | Schema validation, rate limiting, publisher verification |
| Key compromise | Key rotation, revocation list, multi-signature |
| API abuse | Rate limiting, API keys, anomaly detection |
| Data integrity | Content hashing, signatures, audit logs |

---

## Timeline

### Phase 1: Registry Core (Weeks 1-4)

| Week | Tasks |
|------|-------|
| 1 | Database schema, basic API scaffolding |
| 2 | Index generation, CLI tools |
| 3 | GitHub integration, auto-publish |
| 4 | Testing, documentation |

### Phase 2: Trust Layer (Weeks 5-8)

| Week | Tasks |
|------|-------|
| 5 | Key management setup, signing engine |
| 6 | Certificate generation, verification API |
| 7 | Compliance level automation |
| 8 | Security audit, hardening |

### Phase 3: API Service (Weeks 9-12)

| Week | Tasks |
|------|-------|
| 9 | Full API implementation |
| 10 | Rate limiting, API keys |
| 11 | SDKs (JavaScript, Python) |
| 12 | Load testing, documentation |

### Launch: CMS Summit Frankfurt (12 May 2026)

- Live registry demonstration
- First external publishers onboarded
- API publicly available
- Press release

### Phase 4: CDN (Post-launch)

| Month | Tasks |
|-------|-------|
| May | Edge caching, content negotiation |
| June | Global distribution, monitoring |
| July | Enterprise features, SLA |

---

## Success Metrics

### Launch Criteria (12 May 2026)

| Metric | Target |
|--------|--------|
| COGs in registry | 100+ |
| Publishers registered | 10+ |
| API uptime | 99.9% |
| Query latency (p95) | <200ms |
| Level 4+ COGs | 20+ |

### 90-Day Post-Launch

| Metric | Target |
|--------|--------|
| COGs in registry | 500+ |
| Publishers registered | 50+ |
| Monthly API requests | 100,000+ |
| AI provider integrations | 1+ |
| Revenue | £10,000+ |

### 12-Month Goals

| Metric | Target |
|--------|--------|
| COGs in registry | 5,000+ |
| Publishers registered | 500+ |
| Monthly API requests | 1,000,000+ |
| AI provider integrations | 5+ |
| Revenue | £100,000+ |

---

## Next Steps

### Immediate Actions (This Week)

1. [ ] Finalise database schema
2. [ ] Set up development environment
3. [ ] Create project repository
4. [ ] Document API specification (OpenAPI)
5. [ ] Begin Phase 1 implementation

### Dependencies

| Dependency | Owner | Status |
|------------|-------|--------|
| Domain configuration | Tom | Pending |
| Cloudflare account setup | Tom | Pending |
| PostgreSQL provisioning | Maxine | Not started |
| Key ceremony planning | Tom + Scott | Not started |

### Open Questions

1. **Publisher identity verification** — Use GitHub, email, or domain validation?
2. **Pricing model** — Freemium vs. paid-only for publishers?
3. **First publishers** — Which external organisations to onboard first?
4. **AI provider outreach** — Who to approach for pilot integration?

---

## Appendix: Technical Specifications

### A. COG Submission Protocol

```bash
# Submit via CLI
reginald publish ./my-cog.cog.md \
  --namespace my-company \
  --version 1.0.0

# Submit via API
POST /api/v1/cogs
Content-Type: application/json
Authorization: Bearer {apiKey}

{
  "namespace": "my-company",
  "name": "my-cog",
  "version": "1.0.0",
  "content": "---\nname: my-cog\n---\n# My COG\n..."
}
```

### B. Verification Response Format

```json
{
  "verified": true,
  "cog": {
    "namespace": "cog-nova-mx",
    "name": "pricing-validator",
    "version": "1.2.0"
  },
  "compliance": {
    "level": 4,
    "name": "Certified",
    "checks": {
      "frontmatterValid": true,
      "schemaValid": true,
      "publisherVerified": true,
      "mxAuditPassed": true
    }
  },
  "certificate": {
    "signature": "base64:...",
    "signedAt": "2026-02-26T10:00:00Z",
    "signed_by": "reginald.allabout.network",
    "expires_at": "2027-02-26T10:00:00Z"
  },
  "warnings": []
}
```

### C. Index Synchronisation

```bash
# Full sync (regenerate from database)
reginald index sync --full

# Incremental sync (changes since last sync)
reginald index sync --incremental

# Verify index integrity
reginald index verify
```

---

**Document Classification:** CONFIDENTIAL — MX Reginald Ltd Internal Use Only

**Contact:** tom.cranstoun@gmail.com

---

*REGINALD Implementation Plan v1.0.0 — February 2026*
