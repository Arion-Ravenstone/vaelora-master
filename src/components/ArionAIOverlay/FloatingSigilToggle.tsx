
import React from 'react';

const FloatingSigilToggle = ({ onClick, active }: { onClick: () => void; active: boolean }) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-xl transition-all ${
        active ? 'bg-red-800' : 'bg-gray-700'
      } hover:bg-red-700`}
      title="Summon Arion"
    >
      <span className="text-white text-xl font-bold">𐌰</span>
    </button>
  );
};

export default FloatingSigilToggle;
