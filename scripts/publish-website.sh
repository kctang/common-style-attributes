#!/usr/bin/env bash
rm -fr dist/demo
ng build --prod
pushd dist/demo
surge . common-style-attributes.surge.sh
popd
