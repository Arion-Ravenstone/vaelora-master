import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export type CharacterProfile = {
  name: string;
  class: string;
  stats: {
    resolve: number;
    intuition: number;
    wrath: number;
  };
  createdAt: string;
};

export async function getCharacter(userId: string): Promise<CharacterProfile | null> {
  const ref = doc(db, "Characters", userId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() as CharacterProfile : null;
}

export async function createCharacter(userId: string, profile: CharacterProfile) {
  const ref = doc(db, "Characters", userId);
  await setDoc(ref, profile);
}
