import React from 'react';

const ZonePopover: React.FC<{ zone: any; onClose: () => void }> = ({ zone, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-purple-500 rounded-xl p-6 max-w-lg">
        <h2 className="text-2xl gothic text-purple-400 mb-2">{zone.name}</h2>
        <p className="mb-4 text-sm text-gray-300 italic">Mood: {zone.mood}</p>
        <p className="text-white">{zone.description}</p>
        <button
          onClick={onClose}
          className="mt-6 bg-purple-700 hover:bg-purple-900 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ZonePopover;
