import React from 'react';
export default function QuestEngine() {
  return (
    <div className="p-4 text-white bg-gradient-to-br from-gray-800 to-black rounded-xl">
      <h1 className="text-2xl font-bold mb-2">Quest Log</h1>
      <p>Quests will dynamically load here from Firestore based on the player's campaign data.</p>
    </div>
  );
}