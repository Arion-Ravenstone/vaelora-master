import React from "react";
import ArionOverlay from "../components/ArionAIOverlay/ArionOverlay";
import SocialHub from "../components/SocialHub";

const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-serif">
      <ArionOverlay />
      <main className="p-8">
        <h1 className="text-4xl mb-4">Welcome to the World of Arion</h1>
        <p className="text-lg max-w-xl">
          Arion, the reluctant hero, waits. Ask him. Challenge him. Listen to the memories he can't forget.
        </p>
      </main>
      <footer className="p-8">
        <SocialHub />
      </footer>
    </div>
  );
};

export default Homepage;
