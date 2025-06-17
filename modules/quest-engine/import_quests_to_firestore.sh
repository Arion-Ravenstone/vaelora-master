#!/bin/bash
# Import quests to Firestore using Firebase CLI
echo "Importing quests.json to Firestore..."
firebase firestore:import ./quests.json --project=YOUR_PROJECT_ID