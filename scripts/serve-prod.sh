#!/usr/bin/env bash
rm -fr dist/demo
ng build --prod
pushd dist/demo
python -m SimpleHTTPServer 8000
popd
