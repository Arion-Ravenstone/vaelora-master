import { OpenAI } from "openai";
import { getTone } from "./toneManager";
import { buildPrompt } from "./PromptConstructor";
import { applyPersona } from "./PersonaConstraints";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function askArion(userInput: string, memory: string, mood: string) {
  const tone = getTone();
  const rawPrompt = buildPrompt(userInput, memory, tone, mood);
  const finalPrompt = applyPersona(rawPrompt, tone);

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: finalPrompt }],
    temperature: 0.8
  });

  return response.choices[0].message.content.trim();
}
