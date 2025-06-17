import { Tone } from "./toneManager";

export function buildPrompt(userInput: string, memory: string, tone: Tone, mood: string): string {
  return \`Tone: \${tone}\nMood: \${mood}\nMemory: \${memory}\n\nQ: \${userInput}\nA:\`;
}
