import type { AuthStore } from "./stores/auth";

export function checkLoggedIn(fn: () => void, auth: AuthStore) {
  if (auth.currentUser === null) {
    fn();
  }
}
