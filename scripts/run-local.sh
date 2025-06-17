#!/bin/bash

echo "🔧 Installing dependencies..."
npm install

echo "🚀 Starting Firebase Emulators + Vite Dev Server..."
firebase emulators:start &
sleep 5
npm run dev