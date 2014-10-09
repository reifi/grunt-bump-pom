#!/usr/bin/env bash

# Use this one-liner to produce a JSON literal from the Git log:

git log -n 20 --date-order --date=short --pretty=format:"%h:%n  date: %ad%n  changes:%n    - \"%s\"" > docs/CHANGELOG
