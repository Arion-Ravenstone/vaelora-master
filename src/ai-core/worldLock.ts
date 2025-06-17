import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function lockWorldState(eventId: string) {
  const ref = doc(db, "WorldState", eventId);
  await setDoc(ref, { locked: true });
}

export async function isWorldStateLocked(eventId: string): Promise<boolean> {
  const ref = doc(db, "WorldState", eventId);
  const snap = await getDoc(ref);
  return snap.exists() && snap.data().locked === true;
}
