#!/bin/sh

set -e  # Zatrzymaj skrypt, jeśli wystąpi błąd

FOLDER_NAME="dist"
TOPBAR_DIR="topbar-app"

echo "Switching to orphan branch gh-pages..."
git checkout --orphan gh-pages

echo "Building Vue site..."
npm install
npm run build

echo "Building topbar-app (Vue)..."
( cd "$TOPBAR_DIR" && npm install && npm run build )

echo "Merging topbar-app into site output under /topbar..."
mkdir -p "$FOLDER_NAME/topbar"
cp -r "$TOPBAR_DIR/dist/." "$FOLDER_NAME/topbar/"

echo "Adding SPA fallback (404 -> index) for client-side routing..."
cp "$FOLDER_NAME/index.html" "$FOLDER_NAME/404.html"

echo "Adding files to gh-pages..."
git --work-tree "$FOLDER_NAME" add --all
git --work-tree "$FOLDER_NAME" commit -m "gh-pages"

echo "Pushing to gh-pages..."
git push origin HEAD:gh-pages --force

echo "Switching back to master..."
git checkout -f master
git branch -D gh-pages

echo "Successfully deployed, check your settings"
