#!/bin/bash

protoc \
    --plugin=protoc-gen-ts=/usr/local/bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:js \
    --ts_out=service=true:js \
    *.proto
