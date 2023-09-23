#!/usr/bin/env bash

# Usage: ./script/alert.sh <actions run URL>

message="Failed to deploy kiosk. See details here: $ACTIONS_RUN_URL"

curl -H "Content-Type: application/json" \
    -X POST \
    --data "{\"text\":\"$message\"}" \
    "$SOFTWARE_CHAT_WEBHOOK_URL"
