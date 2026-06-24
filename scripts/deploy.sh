#!/bin/bash
set -e

SRC="$(cd "$(dirname "$0")/.." && pwd)"
BUILD_DIR="/tmp/lodges-build"
SITE_ID="6ed67e55-29cb-461d-995f-0763705eb7cc"

echo "=== Deploy LodgesOfUganda ==="
echo "Source: $SRC"

# Clean previous build
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR"

# Copy only what's needed (skip node_modules, .next, .git, large files)
echo "Copying source files..."
for item in src public package.json package-lock.json tsconfig.json next.config.ts tailwind.config.ts postcss.config.mjs netlify.toml scripts .netlify; do
  if [ -e "$SRC/$item" ]; then
    cp -R "$SRC/$item" "$BUILD_DIR/" 2>/dev/null || true
  fi
done

# Write correct site link
mkdir -p "$BUILD_DIR/.netlify"
echo "{\"siteId\":\"$SITE_ID\"}" > "$BUILD_DIR/.netlify/state.json"

# Install dependencies
echo "Installing dependencies..."
cd "$BUILD_DIR"
npm install --prefer-offline 2>&1 | tail -3

# Build
echo "Building..."
npm run build 2>&1 | tail -10

# Deploy
echo "Deploying to Netlify..."
npx netlify deploy --prod 2>&1 | tail -10

echo ""
echo "=== Done ==="
