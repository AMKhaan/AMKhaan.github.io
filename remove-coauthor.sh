#!/bin/bash
msg=$(cat)
echo "$msg" | grep -v "Co-Authored-By: Claude Sonnet 4.5"
