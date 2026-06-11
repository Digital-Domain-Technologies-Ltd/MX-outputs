#!/bin/bash
# SessionStart hook for MX-outputs.
#
# This repository has no third-party dependencies — the tooling is Python 3
# standard library plus bash — so there is nothing to install. The hook
# instead verifies that the manuscript-uniqueness tooling runs and surfaces
# the current duplication state, so a session starts already aware of whether
# the two books have drifted toward each other.
#
# It is read-only with respect to tracked files: the index and report are
# written to a temp directory, never to json/ or scripts/. It never fails the
# session; problems are reported as warnings.
set -uo pipefail

# Web-only, per the session-start-hook convention. Remove this guard to run
# the checks on local machines too.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0

if ! command -v python3 >/dev/null 2>&1; then
  echo "session-start: python3 not found; skipping manuscript checks" >&2
  exit 0
fi

# 1. Lint: the script must at least compile.
if python3 -m py_compile scripts/manuscript_uniqueness.py 2>/tmp/mu-compile.log; then
  echo "session-start: manuscript_uniqueness.py compiles"
else
  echo "session-start: WARNING manuscript_uniqueness.py failed to compile" >&2
  cat /tmp/mu-compile.log >&2 || true
fi

# 2. Unit tests (fast, stdlib only).
if python3 scripts/test_manuscript_uniqueness.py >/tmp/mu-tests.log 2>&1; then
  echo "session-start: manuscript_uniqueness unit tests passed"
else
  echo "session-start: WARNING manuscript_uniqueness unit tests FAILED (/tmp/mu-tests.log)" >&2
  tail -n 20 /tmp/mu-tests.log >&2 || true
fi

# 3. Surface duplication state without touching tracked files (writes to /tmp).
python3 scripts/manuscript_uniqueness.py \
  --no-incremental \
  --index-out /tmp/manuscript-index.json \
  --report-out /tmp/manuscript-uniqueness-report.md \
  2>/dev/null \
  || echo "session-start: WARNING manuscript_uniqueness indexer errored" >&2

exit 0
