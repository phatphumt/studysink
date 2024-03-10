import { signInWithRedirect, signOut, type User } from "firebase/auth";
import { writable } from "svelte/store";
import { auth, provider } from "../firebase";

export type AuthStore = {
  currentUser: User | null;
  isLoading: boolean;
};

export const authStore = writable<AuthStore>({
  currentUser: null,
  isLoading: true,
});

