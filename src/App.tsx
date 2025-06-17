import QuestEngine from "@/modules/quest-engine/QuestEngine";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoreGenerator from "./components/Lore/LoreGenerator";
import LoreOfTheDay from "./components/Lore/LoreOfTheDay";
import RPGLanding from "./components/Home/RPGLanding";
import SocialHub from "./components/Home/SocialHub";

export default function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Routes>
        <Route path="/quest" element={<QuestEngine />} />
        <Route path="/" element={<LoreOfTheDay />} />
        <Route path="/start" element={<RPGLanding />} />
        <Route path="/gm" element={<LoreGenerator />} />
        <Route path="/community" element={<SocialHub />} />
      </Routes>
    </main>
  );
}