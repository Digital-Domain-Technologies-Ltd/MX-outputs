---
title: "REGINALD User Manual"
version: "1.0.0"
created: 2026-02-26
author: "Tom Cranstoun and Maxine"
description: "Complete user guide for the REGINALD documentation registry"

mx:
  license: "MIT"
  status: published
---

# REGINALD User Manual

**Registry for Genuine Information, Notarised Authentication, and Legitimate Documentation**

**Version 1.0.0 | February 2026**

REGINALD is the global registry for machine-readable documentation. It enables AI agents to look up verified answers instead of guessing.

---

## Table of Contents

1. [What is REGINALD?](#what-is-reginald)
2. [Quick Start](#quick-start)
3. [For Publishers](#for-publishers)
4. [For Consumers](#for-consumers)
5. [Compliance Levels](#compliance-levels)
6. [API Reference](#api-reference)
7. [CLI Reference](#cli-reference)
8. [Verification](#verification)
9. [Best Practices](#best-practices)
10. [Troubleshooting](#troubleshooting)

---

## What is REGINALD?

REGINALD is a queryable registry where tool vendors, platform providers, and API publishers register verified documentation. AI providers query it at inference time instead of guessing.

### The Problem

AI inference systems waste compute generating incorrect answers to questions that have documented answers. When documentation exists in formats optimised for humans (not machines) and falls outside model training windows, AI systems guess. Guessing leads to hallucination. Hallucination leads to correction cascades. Correction cascades waste tokens.

### The Solution

REGINALD provides:

- **Structured storage** — Documentation in machine-readable COG format
- **Cryptographic signing** — Provenance verification for every document
- **Compliance levels** — Graduated trust tiers from basic to authoritative
- **Query API** — Fast lookups for AI agents and developers

### How It Works

![REGINALD Flow - Publisher to Registry to AI Agent](diagrams/reginald-flow.png)

---

## Quick Start

### Query the Registry

```bash
# Search for COGs
curl https://allabout.network/api/v1/search?q=pricing

# Get a specific COG
curl https://allabout.network/api/v1/cogs/cog-nova-mx/pricing-validator

# Verify a COG
curl https://allabout.network/api/v1/verify/cog-nova-mx/pricing-validator@1.0.0
```

### Publish a COG

```bash
# Install CLI
npm install -g @reginald/cli

# Login
reginald login

# Publish
reginald publish ./my-documentation.cog.md
```

---

## For Publishers

Publishers are organisations that register documentation in REGINALD.

### Registration

1. **Create a publisher account**

   ```bash
   reginald register --email you@company.com --namespace your-company
   ```

2. **Verify your identity** — Check your email for verification link

3. **Get your API key** — Available in your dashboard at `allabout.network/dashboard`

### Publishing COGs

#### Prerequisites

Your documentation must be in COG format (YAML frontmatter + markdown body). See the [COG Format Manual](cog-standalone-manual.md) for specifications.

#### Minimum Required Metadata

```yaml
---
name: my-tool-documentation
version: "1.0.0"
description: "Documentation for My Tool"
author: "Your Company"
---

# My Tool Documentation

Your content here...
```

#### Publishing Steps

```bash
# 1. Validate your COG locally
reginald validate ./my-tool.cog.md

# 2. Publish to registry
reginald publish ./my-tool.cog.md \
  --namespace your-company \
  --version 1.0.0

# 3. Verify it's live
reginald info your-company/my-tool
```

### Versioning

REGINALD uses semantic versioning. Every COG has versions.

```bash
# Publish new version
reginald publish ./my-tool.cog.md --version 1.1.0

# List versions
reginald versions your-company/my-tool

# Get specific version
curl https://allabout.network/api/v1/cogs/your-company/my-tool@1.0.0
```

### Namespaces

Namespaces organise COGs by publisher.

- Must be lowercase
- Alphanumeric and hyphens only
- Must be unique
- Typically matches your organisation name

```
your-company/pricing-api
your-company/authentication
your-company/getting-started
```

---

## For Consumers

Consumers query REGINALD to get verified documentation.

### Web Interface

Browse the registry at `allabout.network/registry`:

- Search by keyword, category, or tag
- View COG metadata and content
- Check compliance level and verification status
- Download raw COG files

### API Access

#### Free Tier

- 10 requests per minute
- 1,000 requests per month
- No API key required for public COGs

```bash
# Anonymous query
curl https://allabout.network/api/v1/cogs/cog-nova-mx/pricing-validator
```

#### Authenticated Access

For higher rate limits, register for an API key.

```bash
# Authenticated query
curl https://allabout.network/api/v1/cogs/cog-nova-mx/pricing-validator \
  -H "Authorization: Bearer YOUR_API_KEY"
```

### SDKs

#### JavaScript

```javascript
import { Reginald } from '@reginald/client';

const client = new Reginald({ apiKey: 'YOUR_API_KEY' });

// Search
const results = await client.search('pricing validator');

// Get COG
const cog = await client.get('cog-nova-mx/pricing-validator');

// Verify
const verified = await client.verify('cog-nova-mx/pricing-validator@1.0.0');
```

#### Python

```python
from reginald import ReginaldClient

client = ReginaldClient(api_key='YOUR_API_KEY')

# Search
results = client.search('pricing validator')

# Get COG
cog = client.get('cog-nova-mx/pricing-validator')

# Verify
verified = client.verify('cog-nova-mx/pricing-validator@1.0.0')
```

---

## Compliance Levels

REGINALD assigns compliance levels to indicate trustworthiness.

| Level | Name | Description | Requirements |
|-------|------|-------------|--------------|
| **1** | Basic | Valid COG format | YAML frontmatter present |
| **2** | Structured | Complete metadata | All required fields, valid schema |
| **3** | Verified | Publisher confirmed | Domain or identity verification |
| **4** | Certified | MX audit passed | Manual review by MX auditor |
| **5** | Authoritative | Official source | Signed by content authority |

### Level Details

#### Level 1: Basic

Minimum bar for registry inclusion.

**Requirements:**

- Valid YAML frontmatter
- `name` field present
- `version` field present

**Trust:** Self-attested. No verification.

#### Level 2: Structured

Properly formed documentation.

**Requirements:**

- All Level 1 requirements
- `description` field present
- `author` field present
- Schema validation passed

**Trust:** Format verified. Content unverified.

#### Level 3: Verified

Publisher identity confirmed.

**Requirements:**

- All Level 2 requirements
- Publisher account verified
- Domain ownership confirmed OR
- Identity verification completed

**Trust:** Publisher is who they claim to be.

#### Level 4: Certified

Manual quality review passed.

**Requirements:**

- All Level 3 requirements
- MX audit completed
- Content accuracy verified
- Best practices followed

**Trust:** Content quality assured.

#### Level 5: Authoritative

The definitive source.

**Requirements:**

- All Level 4 requirements
- Signed by content authority
- Official documentation from tool/API owner
- Continuous validation enabled

**Trust:** This is the canonical source.

### Checking Compliance Level

```bash
# Via CLI
reginald info cog-nova-mx/pricing-validator

# Via API
curl https://allabout.network/api/v1/cogs/cog-nova-mx/pricing-validator \
  | jq '.compliance'
```

### Upgrading Compliance Level

```bash
# Request Level 3 verification
reginald request-verification --namespace your-company

# Request Level 4 certification
reginald request-certification --cog your-company/my-tool

# Level 5 is invitation-only
```

---

## API Reference

### Base URL

```
https://allabout.network/api/v1
```

### Endpoints

#### Search COGs

```http
GET /search?q={query}&category={category}&tags={tags}&compliance_min={level}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `q` | string | Search query |
| `category` | string | Filter by category |
| `tags` | string | Comma-separated tags |
| `compliance_min` | integer | Minimum compliance level (1-5) |
| `limit` | integer | Results per page (default: 20) |
| `offset` | integer | Pagination offset |

**Response:**

```json
{
  "results": [
    {
      "namespace": "cog-nova-mx",
      "name": "pricing-validator",
      "version": "1.2.0",
      "description": "Validate pricing data for AI accuracy",
      "compliance": 4,
      "tags": ["pricing", "validation"]
    }
  ],
  "total": 1,
  "limit": 20,
  "offset": 0
}
```

#### Get COG

```http
GET /cogs/{namespace}/{name}
GET /cogs/{namespace}/{name}@{version}
```

**Response:**

```json
{
  "namespace": "cog-nova-mx",
  "name": "pricing-validator",
  "version": "1.2.0",
  "description": "Validate pricing data for AI accuracy",
  "author": "Cog-Nova-MX",
  "compliance": 4,
  "created_at": "2026-02-01T10:00:00Z",
  "updated_at": "2026-02-26T10:00:00Z",
  "tags": ["pricing", "validation"],
  "versions": ["1.0.0", "1.1.0", "1.2.0"]
}
```

#### Get COG Content

```http
GET /cogs/{namespace}/{name}/content
GET /cogs/{namespace}/{name}@{version}/content
```

Returns raw COG markdown content.

#### Verify COG

```http
GET /verify/{namespace}/{name}@{version}
```

**Response:**

```json
{
  "verified": true,
  "compliance": {
    "level": 4,
    "name": "Certified",
    "checks": {
      "frontmatter_valid": true,
      "schema_valid": true,
      "publisher_verified": true,
      "mx_audit_passed": true
    }
  },
  "certificate": {
    "signature": "base64:...",
    "signed_at": "2026-02-26T10:00:00Z",
    "expires_at": "2027-02-26T10:00:00Z"
  }
}
```

#### Publish COG (Authenticated)

```http
POST /cogs
Authorization: Bearer {api_key}
Content-Type: application/json

{
  "namespace": "your-company",
  "name": "my-tool",
  "version": "1.0.0",
  "content": "---\nname: my-tool\n---\n# Content..."
}
```

### Error Responses

| Code | Meaning |
|------|---------|
| 400 | Invalid request (validation failed) |
| 401 | Authentication required |
| 403 | Insufficient permissions |
| 404 | COG not found |
| 429 | Rate limit exceeded |
| 500 | Server error |

---

## CLI Reference

### Installation

```bash
npm install -g @reginald/cli
```

### Commands

#### `reginald login`

Authenticate with REGINALD.

```bash
reginald login
# Opens browser for authentication
```

#### `reginald register`

Create a publisher account.

```bash
reginald register \
  --email you@company.com \
  --namespace your-company
```

#### `reginald validate`

Validate a COG locally.

```bash
reginald validate ./my-cog.cog.md

# With specific compliance level target
reginald validate ./my-cog.cog.md --level 3
```

#### `reginald publish`

Publish a COG to the registry.

```bash
reginald publish ./my-cog.cog.md \
  --namespace your-company \
  --version 1.0.0
```

#### `reginald search`

Search the registry.

```bash
reginald search "pricing validator"
reginald search --category validation
reginald search --tag pricing --compliance-min 4
```

#### `reginald info`

Get COG information.

```bash
reginald info cog-nova-mx/pricing-validator
reginald info cog-nova-mx/pricing-validator@1.0.0
```

#### `reginald verify`

Verify a COG's authenticity.

```bash
reginald verify cog-nova-mx/pricing-validator@1.0.0
```

#### `reginald versions`

List all versions of a COG.

```bash
reginald versions cog-nova-mx/pricing-validator
```

---

## Verification

### What is Verification?

REGINALD signs every registered COG with a cryptographic signature. This proves:

1. **Integrity** — Content hasn't been modified
2. **Provenance** — Who published it
3. **Timing** — When it was signed
4. **Compliance** — What checks it passed

### Certificate of Genuineness

Every COG above Level 1 receives a Certificate of Genuineness (COG certificate):

```yaml
certificate:
  cogId: "cog-nova-mx/pricing-validator@1.2.0"
  content_hash: "sha256:abc123..."
  compliance_level: 4
  signature: "base64:..."
  signed_at: "2026-02-26T10:00:00Z"
  signedBy: "reginald.allabout.network"
  expires_at: "2027-02-26T10:00:00Z"
```

### Verifying Certificates

```bash
# Via CLI
reginald verify cog-nova-mx/pricing-validator@1.0.0

# Output:
# [x] Signature valid
# [x] Content hash matches
# [x] Certificate not expired
# [x] Compliance level: 4 (Certified)
```

### For AI Providers

When integrating REGINALD into your inference pipeline:

1. **Query REGINALD first** for questions about registered tools/APIs
2. **Check compliance level** — higher is more trustworthy
3. **Verify signature** — ensure content integrity
4. **Cache appropriately** — respect `expires_at` in certificates

---

## Best Practices

### For Publishers

1. **Keep documentation current** — Update when your tool changes
2. **Use semantic versioning** — Communicate change significance
3. **Write clear descriptions** — Help users find your COGs
4. **Include examples** — Show how to use your tool
5. **Aim for Level 4+** — Higher compliance = more trust

### For Consumers

1. **Prefer higher compliance levels** — Level 4+ is most reliable
2. **Check freshness** — Note the `updated_at` timestamp
3. **Verify signatures** — Don't trust unverified content
4. **Cache sensibly** — Respect certificate expiration
5. **Report issues** — Help improve the registry

### For AI Integrations

1. **Query before guessing** — Always check REGINALD first
2. **Cite your sources** — Include COG references in responses
3. **Handle missing entries gracefully** — Fall back to other methods
4. **Respect rate limits** — Don't hammer the API
5. **Use structured formats** — Request `application/vnd.reginald.ai+json`

---

## Troubleshooting

### "COG validation failed"

**Cause:** Your COG doesn't meet format requirements.

**Solution:**

```bash
# Check validation errors
reginald validate ./my-cog.cog.md --verbose

# Common issues:
# - Missing required fields (name, version)
# - Invalid YAML syntax
# - Version not in semver format
```

### "Publisher not verified"

**Cause:** Your publisher account hasn't completed verification.

**Solution:**

1. Check email for verification link
2. Complete domain verification if required
3. Contact support if verification is stuck

### "Rate limit exceeded"

**Cause:** Too many requests in the time window.

**Solution:**

1. Wait for rate limit reset (shown in response headers)
2. Upgrade to a higher tier for more requests
3. Implement caching in your application

### "Signature verification failed"

**Cause:** Content may have been modified or certificate expired.

**Solution:**

1. Re-fetch the COG from REGINALD
2. Check certificate expiration date
3. Report potential tampering to REGINALD support

### "Namespace already taken"

**Cause:** Someone else registered that namespace.

**Solution:**

1. Choose a different namespace
2. If you own the trademark, contact support for dispute resolution

---

## Support

- **Documentation:** `allabout.network/docs`
- **Status:** `status.allabout.network`
- **Email:** `support@allabout.network`
- **Community:** The Gathering (MX community)

---

## Glossary

| Term | Definition |
|------|------------|
| **COG** | Contextual Operations Guide — a document with YAML frontmatter |
| **REGINALD** | Registry for Genuine Information, Notarised Authentication, and Legitimate Documentation |
| **Namespace** | Publisher identifier that organises COGs |
| **Compliance Level** | Trust tier from 1 (basic) to 5 (authoritative) |
| **Certificate** | Cryptographic proof of COG authenticity |
| **Publisher** | Organisation that registers COGs in REGINALD |
| **Consumer** | User or system that queries REGINALD |

---

## License

This manual is released under the MIT License.

Copyright 2026 MX Reginald Ltd.

---

*REGINALD User Manual v1.0.0 — Published February 2026*
