<script lang="ts">
  import { navigate } from "svelte-navigator";
  import { signInWithPopup } from "firebase/auth";
  import { auth, provider } from "../lib/firebase";
  let loading: boolean = false;
  document.title = "StudySync · Login";
</script>

<main class="min-h-[91vh] flex flex-col justify-center items-center">
  <button
    disabled={loading}
    on:click={async () => {
      loading = true;
      try {
        await signInWithPopup(auth, provider);
      } catch (e) {
        console.log(e);
      }
      navigate("/main");
    }}
    class="active:scale-95 transition-all bg-gradient-to-r text-white from-primary to-secondary px-6 py-4 rounded-lg select-none cursor-pointer flex items-center space-x-2 justify-center"
  >
    <span class="font-semibold text-3xl">Sign in with Google </span>
  </button>
</main>
