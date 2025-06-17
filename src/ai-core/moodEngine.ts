import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export type MoodState = "neutral" | "wary" | "venomous" | "fatigued" | "gutted";

let currentMood: MoodState = "neutral";

export function getCurrentMood(): MoodState {
  return currentMood;
}

export function updateMoodBasedOnAffinity(affinityScore: number) {
  if (affinityScore > 75) currentMood = "neutral";
  else if (affinityScore > 50) currentMood = "wary";
  else if (affinityScore > 30) currentMood = "fatigued";
  else if (affinityScore > 10) currentMood = "venomous";
  else currentMood = "gutted";
}

export function forceMoodOverride(mood: MoodState) {
  currentMood = mood;
}

export async function checkForTraumaTriggers(input: string, userId: string): Promise<string | null> {
  const traumaPhrases = ["Gisela", "Nanami", "Luna", "fire", "betrayal", "blood"];
  for (const keyword of traumaPhrases) {
    if (input.toLowerCase().includes(keyword.toLowerCase())) {
      currentMood = "gutted";
      try {
        await addDoc(collection(db, "Trauma_Triggers"), {
          userId,
          keyword,
          timestamp: serverTimestamp()
        });
      } catch (e) {
        console.error("Failed to log trauma trigger:", e);
      }
      return `The mention of ${keyword} makes Arion pause... a shadow falls across his face.`;
    }
  }
  return null;
}

export function themedProphecy(): string | null {
  const themes = {
    war: [
      "Steel will fail where silence prevails.",
      "The ground will drink the blood of friends and foes alike."
    ],
    betrayal: [
      "Trust no oath spoken under the waning moon.",
      "The knife always finds the back unguarded."
    ],
    legacy: [
      "What you bury today, your heirs will unearth in ruin.",
      "Ashes speak louder than the songs of kings."
    ],
    omens: [
      "The ravens gather where rot stirs beneath the soil.",
      "When the stars refuse to speak, death walks the valley."
    ]
  };
  const keys = Object.keys(themes);
  const pick = keys[Math.floor(Math.random() * keys.length)];
  const options = themes[pick as keyof typeof themes];
  return options[Math.floor(Math.random() * options.length)];
}
