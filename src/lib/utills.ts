import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { authStore, type AuthStore } from "./stores/auth";

export function checkLoggedIn(fn: () => void, auth: AuthStore) {
  if (auth.currentUser === null) {
    fn();
  }
}

export type Quizes = {
  name: string;
  createdAt: { nanoseconds: string; seconds: string };
  owner: string;
  originalOwner: string;
  quiz: Quiz[];
  id: string;
};

export type Quiz = { question: string; answer: string; id: string };

export async function getAllQuiz() {
  let userData: AuthStore;
  const unsub = authStore.subscribe((el) => {
    if (el.currentUser === null) {
      throw new Error("no current user");
    }
    userData = el;
  });
  unsub();
  const q = query(
    collection(db, "quizes"),
    // TODO: fix this shit
    where("onwer", "==", userData.currentUser)
  );
  const qSnap = await getDocs(q);
  let data: Quizes[] = [];

  qSnap.forEach((el) => {
    data = [...data, <Quizes>{ ...el.data(), id: el.id }];
  });

  return data;
}
