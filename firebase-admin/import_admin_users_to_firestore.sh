#!/bin/bash
echo "Starting Firebase Admin User Import..."
firebase firestore:delete users --recursive --yes
firebase firestore:import firestore_admin_users.json
echo "✅ Admin users imported successfully."
