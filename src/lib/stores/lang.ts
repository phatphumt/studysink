import { writable } from "svelte/store";

export default writable<"en" | "th">("en");
