#!/bin/sh

scripts=$(dirname "$0")
root=$(dirname "$scripts")

pushd $root
rm -rf node_modules
yarn install
yarn build:gh
yarn gh-pages -d dist/gh
popd