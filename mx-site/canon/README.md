---
title: "MX Canon - Public Mirror"
description: "Public mirror of the three-file MX canon: standard fields, carrier vocabulary, and CogNovaMX vendor extensions. Canonical source for MX-aware tools."
author: "Tom Cranstoun"
created: "2026-04-16"
modified: "2026-04-16"

type: info-doc
mx:
  canonicalUri: https://raw.githubusercontent.com/Digital-Domain-Technologies-Ltd/MX-hub/main/mx-site/canon/README.md

---

# MX Canon - Public Mirror

This folder publishes the machine-readable MX canon at stable URLs.

## Files

| File | Purpose | Scope |
|------|---------|-------|
| [fields-data.yaml](fields-data.yaml) | Core standard vocabulary | MXS-01 + MXS-02 + MXS-03 |
| [fields-data-carriers.yaml](fields-data-carriers.yaml) | Code-carrier vocabulary | MXS-04 |
| [cognovamx-fields.yaml](cognovamx-fields.yaml) | Vendor extension pack | `x-mx-` / `x-mx-p-` namespaces |

The first two files together form the proposed standard that The Gathering governs. The third is the CogNovaMX vendor extension example pack - not part of the standard, useful as a reference for other vendors authoring their own `x-vendor-` extension files.

## Status

All three files are drafts. The standards they underpin (MXS-01..04) are proposed, not ratified. Stream review at [stream.tg.community](https://stream.tg.community).

## License

MIT. The MX standard is free, open, and vendor-neutral.

## Authority

The prose companion is Appendix M of *MX: The Protocols*. Where machine-readable YAML and prose disagree, the YAML is authoritative by definition - a drift checker verifies alignment.
