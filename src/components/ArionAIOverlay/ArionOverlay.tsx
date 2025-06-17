
import React, { useState } from 'react';
import FloatingSigilToggle from './FloatingSigilToggle';

const ArionOverlay = () => {
  const [visible, setVisible] = useState(false);
  const [output, setOutput] = useState("...");

  const toggleOverlay = () => setVisible(!visible);

  const speak = (text: string) => {
    setOutput(text);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  };

  return (
    <>
      <FloatingSigilToggle onClick={toggleOverlay} active={visible} />
      {visible && (
        <div className="fixed inset-0 bg-black/90 text-gray-200 z-50 p-4 flex flex-col justify-end">
          <div className="mb-4 max-h-96 overflow-y-auto text-lg font-serif">
            {output}
          </div>
          <div className="flex gap-2">
            <input
              className="flex-1 p-2 rounded bg-gray-800 border border-gray-600"
              type="text"
              placeholder="Speak to Arion..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const value = (e.target as HTMLInputElement).value;
                  speak(`You said: ${value}. Arion replies with dry sarcasm.`);
                  (e.target as HTMLInputElement).value = '';
                }
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ArionOverlay;
