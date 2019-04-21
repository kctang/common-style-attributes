#!/usr/bin/env bash
./scripts/build.sh
pushd dist/common-style-attributes
npm publish
popd
