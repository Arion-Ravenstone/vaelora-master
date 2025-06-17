#!/bin/bash

# Ensure you're authenticated with Firebase before running this script.
# Usage: ./import_pantheon_to_firestore.sh

echo "Starting Pantheon import into Firestore..."

firebase firestore:delete pantheon --project jmurphy-3d2ef --recursive --yes

firebase firestore:import vaelora_elarion_pantheon.json --project jmurphy-3d2ef

echo "Pantheon successfully imported to Firestore in project: jmurphy-3d2ef"
