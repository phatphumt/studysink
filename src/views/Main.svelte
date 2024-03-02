<script lang="ts">
  import { authStore } from "../lib/stores/auth";
  document.title = "StudySync · Home";
</script>

<main>
  Email: {$authStore.currentUser?.email}<br />
  Display Name: {$authStore.currentUser?.displayName}
  <img src={$authStore.currentUser?.photoURL} alt="" width="30" height="30" />
</main>
