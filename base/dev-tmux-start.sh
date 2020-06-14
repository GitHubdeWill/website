#!/bin/bash
tmux \
    new-session  'npm run build-dev' \; \
    split-window 'npm run start-dev' \;