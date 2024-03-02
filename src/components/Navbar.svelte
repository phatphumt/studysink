<script lang="ts">
  import { signOut } from "firebase/auth";
  import { createEventDispatcher } from "svelte";
  import { Link, link, navigate } from "svelte-navigator";
  import { auth } from "../lib/firebase";
  const dispatch = createEventDispatcher();

  export let isLogin: boolean;
</script>

<div class="navbar bg-gradient-to-r from-primary to-gray-900 text-white">
  <div class="flex-1">
    <a
      href="/"
      class="btn btn-ghost text-xl"
      use:link
      on:click={() => {
        dispatch("entered");
      }}>StudySync</a
    >
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><Link to="/main">Home</Link></li>
      {#if isLogin}
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li
          on:click={async () => {
            await signOut(auth);
            navigate("/");
          }}
        >
          <!-- svelte-ignore a11y-missing-attribute -->
          <a>Log out</a>
        </li>
      {:else}
        <li><Link to="/login">Log in</Link></li>
      {/if}
    </ul>
  </div>
</div>
