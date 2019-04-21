#!/usr/bin/env bash
rm -fr dist/common-style-attributes
mkdir -p dist/common-style-attributes/styles
cp projects/demo/src/styles/* dist/common-style-attributes/styles
cp publish-package.json dist/common-style-attributes/package.json
cp README.md dist/common-style-attributes
cp LICENSE dist/common-style-attributes
