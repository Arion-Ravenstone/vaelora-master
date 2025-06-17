import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function checkIfDead(name: string): Promise<boolean> {
  const ref = doc(db, "Permadeath", name);
  const snap = await getDoc(ref);
  return snap.exists();
}

export async function registerDeath(name: string) {
  const ref = doc(db, "Permadeath", name);
  await setDoc(ref, { dead: true });
}
