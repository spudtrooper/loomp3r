#!/bin/sh

scripts=$(dirname "$0")
root=$(dirname "$scripts")
dist=$root/dist/web

pushd $root
yarn build
popd

pushd $dist
python -m http.server 8000
popd