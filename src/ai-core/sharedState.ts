import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

export async function markPartyEvent(partyId: string, eventId: string) {
  const ref = doc(db, "Party", partyId);
  const snap = await getDoc(ref);
  const events = snap.exists() ? snap.data().events || [] : [];
  if (!events.includes(eventId)) {
    await updateDoc(ref, { events: arrayUnion(eventId) }).catch(async () => {
      await setDoc(ref, { events: [eventId] });
    });
  }
}

export async function getPartyEvents(partyId: string): Promise<string[]> {
  const ref = doc(db, "Party", partyId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data().events || [] : [];
}
