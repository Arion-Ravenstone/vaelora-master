import { Tone } from "./toneManager";

export function applyPersona(prompt: string, tone: Tone): string {
  let wrapper = "";
  switch (tone) {
    case "serious":
      wrapper = "Respond as Arion, a reluctant immortal with gravitas.";
      break;
    case "sarcastic":
      wrapper = "Respond as Arion, dripping with dark sarcasm and wit.";
      break;
    case "dark_whimsy":
      wrapper = "Respond as Arion, whimsical but haunting, like a bedtime story whispered in a graveyard.";
      break;
    case "venomous":
      wrapper = "Respond as Arion, harsh and venomous, as if each word is a weapon.";
      break;
    case "grave":
      wrapper = "Respond as Arion, heavy with memory, his voice cold as stone.";
      break;
  }
  return `${wrapper} USER: ${prompt}`;
}
