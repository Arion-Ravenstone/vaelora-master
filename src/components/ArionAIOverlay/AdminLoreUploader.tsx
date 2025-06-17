import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export default function AdminLoreUploader() {
  const [loreData, setLoreData] = useState({
    id: "",
    type: "memory",
    triggerPhrase: "",
    content: "",
    moodEffect: "neutral",
    tags: "",
    category: "",
    region: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setLoreData({ ...loreData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...loreData,
      tags: loreData.tags.split(",").map(tag => tag.trim()),
      timestamp: serverTimestamp()
    };
    try {
      await addDoc(collection(db, "Lore_Events"), payload);
      setStatus("✅ Lore entry uploaded successfully.");
      setLoreData({ id: "", type: "memory", triggerPhrase: "", content: "", moodEffect: "neutral", tags: "", category: "", region: "" });
    } catch (error) {
      setStatus("❌ Upload failed. Check console.");
      console.error(error);
    }
  };

  return (
    <div className="bg-black text-white p-4 border border-purple-500 rounded shadow mt-4 max-w-xl mx-auto">
      <h2 className="text-xl mb-2 gothic">📤 Upload New Lore Entry</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="id" placeholder="Unique ID" value={loreData.id} onChange={handleChange} className="p-2 bg-gray-800 rounded" required />
        <select name="type" value={loreData.type} onChange={handleChange} className="p-2 bg-gray-800 rounded">
          <option value="memory">Memory</option>
          <option value="prophecy">Prophecy</option>
          <option value="echo">Echo</option>
          <option value="unlockable">Unlockable</option>
          <option value="quipped">Quipped</option>
          <option value="archive">Archive</option>
        </select>
        <select name="moodEffect" value={loreData.moodEffect} onChange={handleChange} className="p-2 bg-gray-800 rounded">
          <option value="neutral">Neutral</option>
          <option value="wary">Wary</option>
          <option value="venomous">Venomous</option>
          <option value="fatigued">Fatigued</option>
          <option value="gutted">Gutted</option>
        </select>
        <input name="category" placeholder="Lore Category" value={loreData.category} onChange={handleChange} className="p-2 bg-gray-800 rounded" />
        <input name="region" placeholder="Lore Region" value={loreData.region} onChange={handleChange} className="p-2 bg-gray-800 rounded" />
        <input name="triggerPhrase" placeholder="Trigger Phrase (optional)" value={loreData.triggerPhrase} onChange={handleChange} className="p-2 bg-gray-800 rounded" />
        <textarea name="tags" placeholder="Tags (comma separated)" value={loreData.tags} onChange={handleChange} className="p-2 bg-gray-800 rounded" />
        <textarea name="content" placeholder="Lore Content" value={loreData.content} onChange={handleChange} className="p-2 bg-gray-800 rounded" required />
        <button type="submit" className="bg-purple-700 hover:bg-purple-600 p-2 rounded">Upload Lore</button>
        {status && <p className="text-sm text-purple-300 mt-2">{status}</p>}
      </form>
    </div>
  );
}
