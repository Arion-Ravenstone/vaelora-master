import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export async function getAffinity(userId: string): Promise<number> {
  const ref = doc(db, "Affinity", userId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data().score : 50;
}

export async function adjustAffinity(userId: string, delta: number) {
  const current = await getAffinity(userId);
  const newScore = Math.max(0, Math.min(100, current + delta));
  const ref = doc(db, "Affinity", userId);
  await setDoc(ref, { score: newScore }, { merge: true });
}
