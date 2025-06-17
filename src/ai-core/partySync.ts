import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

export async function joinParty(userId: string, partyId: string) {
  const ref = doc(db, "Party", partyId);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, { members: [userId] });
  } else {
    await updateDoc(ref, { members: arrayUnion(userId) });
  }
}

export async function getPartyMembers(partyId: string): Promise<string[]> {
  const ref = doc(db, "Party", partyId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data().members || [] : [];
}
