import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function LoreOfTheDay() {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchLore = async () => {
      const snapshot = await getDocs(collection(db, "lore"));
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const random = docs[Math.floor(Math.random() * docs.length)];
      setEntry(random);
    };
    fetchLore();
  }, []);

  if (!entry) return null;

  return (
    <div className="mt-6 bg-gray-900 p-4 rounded border border-purple-700 shadow">
      <h3 className="text-lg gothic text-purple-300">📜 Lore of the Day</h3>
      <h4 className="text-white font-bold mt-2">{entry.topic}</h4>
      <p className="text-sm text-gray-200 mt-1 whitespace-pre-wrap">{entry.content}</p>
    </div>
  );
}