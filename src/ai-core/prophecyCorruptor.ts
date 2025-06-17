export function corruptProphecy(original: string): string {
  return original.replace(/the/g, "no longer the").replace(/will/g, "might").replace(/shall/g, "could")
    + "\n[This prophecy bears the mark of corruption. It may no longer come true.]";
}
