import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

export async function getQuestState(userId: string) {
  const ref = doc(db, "Quests", userId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : { active: [], completed: [], failed: [] };
}

export async function updateQuestState(userId: string, questId: string, status: "active" | "completed" | "failed") {
  const ref = doc(db, "Quests", userId);
  const data = await getQuestState(userId);
  if (!data[status].includes(questId)) {
    await setDoc(ref, {
      ...data,
      [status]: arrayUnion(questId)
    }, { merge: true });
  }
}
