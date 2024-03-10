<script lang="ts">
  import { signOut } from "firebase/auth";
  import { createEventDispatcher } from "svelte";
  import { Link, link, navigate } from "svelte-navigator";
  import { auth } from "../lib/firebase";
  import lang from "../lib/lang";
  import langStore from "../lib/stores/lang";
  const dispatch = createEventDispatcher();
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
      <li><Link to="/main">{lang[$langStore].home}</Link></li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <li>
        <details>
          <summary> EN/TH </summary>
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <ul class="p-2 bg-gray-900 rounded translate-y-2">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <li>
              <a
                on:click={() => {
                  langStore.update(() => "en");
                }}>EN</a
              >
            </li>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li>
              <a
                on:click={() => {
                  langStore.update(() => "th");
                }}>TH</a
              >
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
