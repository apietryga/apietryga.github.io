#!/bin/sh

set -e  # Zatrzymaj skrypt, jeśli wystąpi błąd

FOLDER_NAME=".output/public"

echo "Switching to orphan branch gh-pages..."
git checkout --orphan gh-pages

echo "Building started..."
npm run generate

echo "Adding files to gh-pages..."
git --work-tree "$FOLDER_NAME" add --all
git --work-tree "$FOLDER_NAME" commit -m "gh-pages"

echo "Pushing to gh-pages..."
git push origin HEAD:gh-pages --force

echo "Switching back to master..."
git checkout -f master
git branch -D gh-pages

echo "Successfully deployed, check your settings"
