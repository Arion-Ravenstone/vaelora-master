import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import ZonePopover from './ZonePopover';

type Zone = {
  id: string;
  name: string;
  description: string;
  mood: string;
};

const WorldMap: React.FC = () => {
  const [zones, setZones] = useState<Zone[]>([]);
  const [selected, setSelected] = useState<Zone | null>(null);

  useEffect(() => {
    const fetchZones = async () => {
      const snap = await getDocs(collection(db, 'WorldMap'));
      const data: Zone[] = [];
      snap.forEach(doc => data.push(doc.data() as Zone));
      setZones(data);
    };
    fetchZones();
  }, []);

  return (
    <div className="relative bg-black text-white p-6">
      <h2 className="text-3xl gothic text-center mb-4">World of Pandora</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {zones.map(zone => (
          <button
            key={zone.id}
            className="bg-gray-800 hover:bg-purple-700 rounded-xl p-4 text-left shadow"
            onClick={() => setSelected(zone)}
          >
            <h3 className="text-xl">{zone.name}</h3>
            <p className="text-sm italic text-gray-400">Mood: {zone.mood}</p>
          </button>
        ))}
      </div>
      {selected && <ZonePopover zone={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default WorldMap;
