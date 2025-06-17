import React from "react";
import { Link } from "react-router-dom";

export default function RPGLanding() {
  return (
    <section className="text-center gothic text-purple-300 p-12 bg-gradient-to-b from-black to-purple-950 min-h-screen">
      <img src="/assets/arion-banner.png" alt="World of Arion Banner" className="w-full max-h-96 object-cover mb-8" />
      <h1 className="text-5xl mb-4">🌌 Enter the World of Arion</h1>
      <p className="text-lg max-w-xl mx-auto mb-6">
        A realm where fate bends to will, choices shape reality, and every shadow whispers your name...
      </p>
      <Link to="/quests" className="bg-purple-700 hover:bg-purple-600 px-6 py-3 text-white rounded text-xl transition">
        🎮 Start Your Journey
      </Link>
    </section>
  );
}