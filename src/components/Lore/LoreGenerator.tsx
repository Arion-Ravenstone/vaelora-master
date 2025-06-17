import React, { useState, useContext } from "react";
import { useLoreGeneration } from "../../hooks/useLoreGeneration";
import { AuthContext } from "../../auth/AuthProvider"; // assumed auth provider

export default function LoreGenerator() {
  const { user } = useContext(AuthContext);
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("serious");

  const { loading, error, lore, generateAndSaveLore } = useLoreGeneration();

  if (!user?.admin) {
    return <p className="text-center text-red-400 gothic p-8">🔒 Access denied. Admins only.</p>;
  }

  const handleGenerate = async () => {
    if (!topic) return;
    await generateAndSaveLore(topic, tone);
  };

  return (
    <div className="bg-black text-purple-300 p-6 rounded border border-purple-800 shadow-md max-w-2xl mx-auto mt-6">
      <h2 className="text-xl gothic mb-4">🧠 Arion AI Lore Generator</h2>

      <label className="block mb-2">Topic</label>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full mb-4 p-2 bg-gray-800 text-white rounded"
        placeholder="e.g., The Crystal Archives"
      />

      <label className="block mb-2">Narration Style</label>
      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        className="w-full mb-4 p-2 bg-gray-800 text-white rounded"
      >
        <option value="serious">Serious</option>
        <option value="whimsical">Whimsical</option>
        <option value="sarcastic">Sarcastic</option>
        <option value="dark">Dark Humor</option>
      </select>

      <button
        onClick={handleGenerate}
        className="bg-purple-700 px-4 py-2 rounded text-white hover:bg-purple-600 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Generating..." : "✨ Generate & Save"}
      </button>

      {error && <p className="text-red-400 mt-4">{error}</p>}

      {lore && (
        <div className="mt-6 bg-gray-900 p-4 rounded text-sm border border-purple-700">
          <h3 className="mb-2 gothic text-lg">📖 Lore Entry</h3>
          <pre className="whitespace-pre-wrap text-white">{lore}</pre>
        </div>
      )}
    </div>
  );
}