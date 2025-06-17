export const generateLorePrompt = (topic: string, tone: 'serious' | 'whimsical' | 'sarcastic' = 'serious') => {
  return \`You are Arion AI, gothic narrator of the Realm of Arion. In a \${tone} voice, write a 2-paragraph lore entry about "\${topic}" including one mystery and one known fact.\`;
};