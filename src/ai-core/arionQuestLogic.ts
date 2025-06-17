import { getQuestState } from "./questManager";

export async function modifyToneBasedOnQuest(userId: string, baseTone: string): Promise<string> {
  const state = await getQuestState(userId);
  if (state.failed.length > 0) {
    return "venomous";
  } else if (state.completed.length > 3) {
    return "grave";
  } else if (state.active.includes("wolf_chapel") || state.active.includes("flame_bound")) {
    return "wary";
  }
  return baseTone;
}

export function getQuestMention(userId: string, questId: string): string {
  switch (questId) {
    case "wolf_chapel":
      return "The wolves you disturbed still remember your footsteps.";
    case "flame_bound":
      return "The flame tests more than strength. It demands sacrifice.";
    default:
      return "";
  }
}
