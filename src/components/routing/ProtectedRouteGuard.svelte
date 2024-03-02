<script lang="ts">
  import { useLocation, useNavigate } from "svelte-navigator";
  import { authStore } from "../../lib/stores/auth";

  const navigate = useNavigate();

  $: if (!$authStore.currentUser) {
    navigate("/login");
  }
</script>

{#if $authStore.currentUser}
  <slot />
{/if}
