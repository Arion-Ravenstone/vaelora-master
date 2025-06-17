export async function generateVoice(text: string, character: string): Promise<void> {
  const payload = {
    text,
    voice: character,
    model: "eleven_monologue"
  };
  const res = await fetch("/api/voice", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const audio = await res.blob();
  const url = URL.createObjectURL(audio);
  new Audio(url).play();
}
