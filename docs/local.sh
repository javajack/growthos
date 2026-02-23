#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-4321}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info()  { echo -e "${GREEN}[✓]${NC} $1"; }
warn()  { echo -e "${YELLOW}[!]${NC} $1"; }
fail()  { echo -e "${RED}[✗]${NC} $1"; exit 1; }

# ─── 1. Check required tools ───────────────────────────────────────────────────

echo ""
echo "=== Checking required tools ==="

command -v node  >/dev/null 2>&1 || fail "node is not installed. Install Node.js 18+ from https://nodejs.org"
command -v npm   >/dev/null 2>&1 || fail "npm is not installed. It ships with Node.js."

NODE_MAJOR=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_MAJOR" -lt 18 ]; then
  fail "Node.js 18+ required (found $(node -v)). Please upgrade."
fi
info "node $(node -v)"
info "npm $(npm -v)"

# ─── 2. Install dependencies ───────────────────────────────────────────────────

echo ""
echo "=== Installing dependencies ==="

if [ ! -d "node_modules" ] || [ "package.json" -nt "node_modules/.package-lock.json" ]; then
  npm install
  info "Dependencies installed"
else
  info "Dependencies up to date (skipping install)"
fi

# ─── 3. Build ──────────────────────────────────────────────────────────────────

echo ""
echo "=== Building site ==="

npm run build
info "Build complete"

# ─── 4. Kill existing process on port if occupied ──────────────────────────────

echo ""
echo "=== Starting preview on port $PORT ==="

PID=$(lsof -ti :"$PORT" 2>/dev/null || true)
if [ -n "$PID" ]; then
  warn "Port $PORT is in use by PID $PID — killing it"
  kill -9 "$PID" 2>/dev/null || true
  sleep 1
fi

# ─── 5. Run preview server ────────────────────────────────────────────────────

info "Launching at http://localhost:$PORT"
echo ""
npx astro preview --port "$PORT"
