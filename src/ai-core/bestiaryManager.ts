import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export type Creature = {
  name: string;
  dangerTier: number;
  region: string;
  traits: string[];
  description: string;
};

export async function fetchCreaturesByRegion(region: string): Promise<Creature[]> {
  const q = query(collection(db, "Bestiary"), where("region", "==", region));
  const snap = await getDocs(q);
  return snap.docs.map(doc => doc.data() as Creature);
}

export async function fetchCreatureByTag(tag: string): Promise<Creature[]> {
  const q = query(collection(db, "Bestiary"));
  const snap = await getDocs(q);
  return snap.docs
    .map(doc => doc.data() as Creature)
    .filter(creature => creature.traits.includes(tag));
}
