<script lang="ts">
  import { Route } from "svelte-navigator";
  import ProtectedRouteGuard from "./ProtectedRouteGuard.svelte";

  export let path: string;
</script>

<Route {path} let:location let:navigate let:params>
  <ProtectedRouteGuard>
    <slot {params} {location} {navigate} />
  </ProtectedRouteGuard>
</Route>
