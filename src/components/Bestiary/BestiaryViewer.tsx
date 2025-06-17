import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const BestiaryViewer = () => {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    const fetchCreatures = async () => {
      const snap = await getDocs(collection(db, 'Bestiary'));
      const data = snap.docs.map(doc => doc.data());
      setCreatures(data);
    };
    fetchCreatures();
  }, []);

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl gothic mb-4">🧟 Bestiary of Arion</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {creatures.map((c, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded-xl border border-purple-700 shadow">
            <h3 className="text-xl text-purple-400">{c.name}</h3>
            <p className="text-sm italic text-gray-300">Region: {c.region}</p>
            <p className="text-sm text-gray-400">Tier {c.dangerTier} | Traits: {c.traits.join(', ')}</p>
            <p className="mt-2 text-white">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestiaryViewer;
