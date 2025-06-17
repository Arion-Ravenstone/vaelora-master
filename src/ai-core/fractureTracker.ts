import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function markFracture(userId: string, reason: string) {
  const ref = doc(db, "Fractures", userId);
  const snap = await getDoc(ref);
  const data = snap.exists() ? snap.data() : { reasons: [] };
  await setDoc(ref, { reasons: [...data.reasons, reason] });
}

export async function hasFracture(userId: string): Promise<boolean> {
  const ref = doc(db, "Fractures", userId);
  const snap = await getDoc(ref);
  return snap.exists() && (snap.data().reasons || []).length > 0;
}
