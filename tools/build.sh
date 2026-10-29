#!/bin/sh
# Minified deploy copy in dist/ (source files stay readable). Run from the project folder.
set -e
rm -rf dist && mkdir -p dist
cp -r index.html favicon.svg og.jpg fonts dist/
esbuild main.js --minify --outfile=dist/main.js --charset=utf8 --log-level=warning
lightningcss --minify --targets ">= 0.5%" style.css -o dist/style.css
du -sh dist
