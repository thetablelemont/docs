#!/usr/bin/env bash
# Build the site locally: ./_quartz/build.sh [--serve]
# Same steps the GitHub Action runs. Output lands in .quartz-build/quartz/public.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
QV="v4.5.2"
B="$ROOT/.quartz-build"
if [ ! -d "$B/quartz" ]; then
  mkdir -p "$B"
  git clone -q --depth 1 --branch "$QV" https://github.com/jackyzha0/quartz.git "$B/quartz"
  (cd "$B/quartz" && npm ci --silent)
fi
cp "$ROOT/_quartz/quartz.config.ts" "$ROOT/_quartz/quartz.layout.ts" "$B/quartz/"
cp "$ROOT/_quartz/custom.scss" "$B/quartz/quartz/styles/custom.scss"
cp "$ROOT"/_quartz/static/* "$B/quartz/quartz/static/"
rm -rf "$B/quartz/content" && mkdir -p "$B/quartz/content"
rsync -a --exclude '.git' --exclude '.github' --exclude '.obsidian' --exclude '_quartz' \
  --exclude '.quartz-build' --exclude 'templates' --exclude 'README.md' "$ROOT/" "$B/quartz/content/"
cd "$B/quartz" && npx quartz build "$@"
