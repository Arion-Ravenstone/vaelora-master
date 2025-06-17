import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const useLoreGeneration = () => {
  const [loading, setLoading] = useState(false);
  const [lore, setLore] = useState("");
  const [error, setError] = useState("");

  const generateAndSaveLore = async (topic, tone) => {
    setLoading(true);
    setError("");
    setLore("");

    const prompt = \`You are Arion AI, gothic narrator of the Realm of Arion. In a \${tone} voice, write a 2-paragraph lore entry about "\${topic}" including one mystery and one known fact.\`;

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": \`Bearer \${OPENAI_API_KEY}\`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4o",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.8
        })
      });

      const data = await res.json();
      const content = data.choices?.[0]?.message?.content || "No response.";

      setLore(content);

      const docRef = await addDoc(collection(db, "lore"), {
        topic,
        tone,
        content,
        createdAt: Timestamp.now()
      });

      return { id: docRef.id, content };
    } catch (err) {
      console.error(err);
      setError("Generation failed.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, lore, error, generateAndSaveLore };
};