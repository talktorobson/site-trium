#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
"$ROOT/scripts/compile.sh"
NODE_PATH="${NODE_PATH:-/opt/homebrew/lib/node_modules}" node "$ROOT/scripts/prerender.mjs"
