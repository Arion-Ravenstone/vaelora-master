import { MoodState } from "./moodEngine";

type MoodZoneConfig = {
  [zone: string]: MoodState;
};

const zoneMoodMap: MoodZoneConfig = {
  "/": "neutral",
  "/chapel": "wary",
  "/luna": "gutted",
  "/admin": "fatigued",
  "/flame": "venomous",
  "/echoes": "grave",
  "/prologue": "neutral",
  "/wolf-den": "wary"
};

export function getMoodForZone(path: string): MoodState {
  return zoneMoodMap[path] || "neutral";
}
