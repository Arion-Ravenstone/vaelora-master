export type Tone = "serious" | "sarcastic" | "dark_whimsy" | "venomous" | "grave";

let currentTone: Tone = "serious";

export function getTone(): Tone {
  return currentTone;
}

export function setTone(tone: Tone) {
  currentTone = tone;
}
