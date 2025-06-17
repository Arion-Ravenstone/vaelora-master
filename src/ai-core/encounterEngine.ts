import { fetchCreaturesByRegion } from "./bestiaryManager";

export async function generateEncounter(region: string): Promise<string> {
  const list = await fetchCreaturesByRegion(region);
  if (list.length === 0) return "The path is eerily silent. Nothing stirs here.";

  const pick = list[Math.floor(Math.random() * list.length)];
  return \`⚔️ You encounter: \${pick.name} — Tier \${pick.dangerTier}\n\${pick.description}\`;
}
