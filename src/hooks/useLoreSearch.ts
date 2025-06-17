import { useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export const useLoreSearch = () => {
  const [results, setResults] = useState([]);

  const searchLore = async (term) => {
    const q = query(collection(db, "lore"));  // Can expand with Firestore text filters
    const snapshot = await getDocs(q);
    const matches = snapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(entry => entry.title.toLowerCase().includes(term.toLowerCase()) || entry.content.toLowerCase().includes(term.toLowerCase()));
    setResults(matches);
  };

  return { results, searchLore };
};