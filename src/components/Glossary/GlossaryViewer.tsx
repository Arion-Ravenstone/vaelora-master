import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const GlossaryViewer = () => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const fetchTerms = async () => {
      const snap = await getDocs(collection(db, 'Glossary'));
      const data = snap.docs.map(doc => doc.data());
      setTerms(data);
    };
    fetchTerms();
  }, []);

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl gothic mb-4">📖 Arion World Glossary</h2>
      {terms.map((term, i) => (
        <div key={i} className="border-b border-purple-800 py-2">
          <h3 className="text-lg text-purple-300">{term.word}</h3>
          <p className="text-sm italic text-gray-400">({term.category})</p>
          <p className="text-white">{term.definition}</p>
        </div>
      ))}
    </div>
  );
};

export default GlossaryViewer;
