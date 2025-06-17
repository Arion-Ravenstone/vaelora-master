import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function fetchLoreByTags(tags: string[]): Promise<string[]> {
  const q = query(collection(db, "Lore_Events"));
  const snap = await getDocs(q);
  const results: string[] = [];

  snap.forEach(doc => {
    const data = doc.data();
    const match = data.tags?.some((tag: string) => tags.includes(tag));
    if (match && data.content) {
      results.push(data.content);
    }
  });

  return results.slice(0, 3); // Limit to 3 lore entries per injection
}
