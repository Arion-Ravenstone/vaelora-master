import React from "react";
import { FaInstagram, FaTiktok, FaFacebook, FaTwitter, FaBlogger, FaReddit, FaLinkedin } from "react-icons/fa";

const socials = [
  { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/arionravenstone" },
  { name: "TikTok", icon: <FaTiktok />, url: "https://www.tiktok.com/@arion.ravenstone" },
  { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/ariontrh" },
  { name: "X (Twitter)", icon: <FaTwitter />, url: "https://www.twitter.com/ArionTRH" },
  { name: "Blogspot", icon: <FaBlogger />, url: "https://arionravestone.blogspot.com/" },
  { name: "Reddit", icon: <FaReddit />, url: "https://www.reddit.com/r/ArionTheReluctanHero/" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/jonathan-murphy-091362243/" }
];

export default function SocialHub() {
  return (
    <div className="text-center p-8 bg-black text-purple-300 rounded shadow border border-purple-700 mt-10">
      <h2 className="text-2xl gothic mb-4">🌐 Follow the World of Arion</h2>
      <div className="flex justify-center flex-wrap gap-4 text-3xl text-purple-300">
        {socials.map(({ name, icon, url }) => (
          <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
            <span className="sr-only">{name}</span>
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
