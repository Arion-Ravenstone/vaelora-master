import QuestEngine from "@/modules/quest-engine/QuestEngine";
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { forceMoodOverride, updateMoodBasedOnAffinity } from '../../ai-core/moodEngine';
import AdminLoreUploader from './AdminLoreUploader';

const AdminConsoleV2 = () => {
  const [user, setUser] = useState<any>(null);
  const [mood, setMood] = useState("neutral");

  useEffect(() => {
    const auth = getAuth();
    return onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  if (!user || user.email !== "your-admin-email@example.com") return null;

  const handleMoodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMood = e.target.value as any;
    setMood(newMood);
    forceMoodOverride(newMood);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white p-4 rounded shadow-xl w-[480px]">
      <h2 className="text-xl mb-2">Arion Admin Console</h2>

      <div className="mb-2">
        <label>Mood Override:</label>
        <select
          className="w-full bg-gray-800 text-white p-2 rounded"
          value={mood}
          onChange={handleMoodChange}
        >
          <option value="neutral">Neutral</option>
          <option value="wary">Wary</option>
          <option value="venomous">Venomous</option>
          <option value="fatigued">Fatigued</option>
          <option value="gutted">Gutted</option>
        </select>
      </div>

      <div className="mb-2">
        <label>Simulate Affinity Score:</label>
        <input
          type="range"
          min={0}
          max={100}
          className="w-full"
          onChange={(e) => updateMoodBasedOnAffinity(parseInt(e.target.value))}
        />
      </div>

      <p className="text-sm text-purple-300 mt-4">Logged in as: {user.email}</p>

      <div className="mt-6">
        <AdminLoreUploader />
      </div>
    
      <QuestEngine />
</div>
  );
};

export default AdminConsoleV2;
