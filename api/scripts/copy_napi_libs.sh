#!/bin/bash

set -ex

cp -v ./packages/rsapi/rsapi.darwin-arm64.node ../ideamesh/static/node_modules/@ideamesh/rsapi-darwin-arm64/

codesign -f -s - ../ideamesh/static/node_modules/@ideamesh/rsapi-darwin-arm64/rsapi.darwin-arm64.node

cp -v ./packages/rsapi/index.* ../ideamesh/static/node_modules/@ideamesh/rsapi/
