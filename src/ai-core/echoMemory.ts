import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

export async function addEcho(userId: string, echo: string) {
  const ref = doc(db, "Echo_Memory", userId);
  await updateDoc(ref, { phrases: arrayUnion(echo) }).catch(async () => {
    await setDoc(ref, { phrases: [echo] });
  });
}

export async function getEchoes(userId: string): Promise<string[]> {
  const ref = doc(db, "Echo_Memory", userId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data().phrases || [] : [];
}
