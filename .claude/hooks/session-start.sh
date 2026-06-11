#!/bin/bash
# SessionStart hook for MX-outputs.
#
# This repository has no third-party dependencies — the tooling is Python 3
# standard library plus bash — so there is nothing to install. Instead the hook
# runs ONE deterministic script, scripts/session_check.py, before the session
# does any inference or CPU-intensive work. That script does the cheap checks
# first (tripwire, a raw-byte freshness gate, appendix sync, unit tests) and
# only re-indexes the books when the freshness gate says they actually changed.
#
# It is read-only with respect to tracked files (anything it writes goes to
# /tmp) and never fails the session: session_check exits 0 by default and the
# hook ignores its status.
set -uo pipefail

# Web-only, per the session-start-hook convention. Remove this guard to run
# the checks on local machines too.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0

if ! command -v python3 >/dev/null 2>&1; then
  echo "session-start: python3 not found; skipping deterministic checks" >&2
  exit 0
fi

python3 scripts/session_check.py || \
  echo "session-start: WARNING session_check.py reported issues (see above)" >&2

exit 0
