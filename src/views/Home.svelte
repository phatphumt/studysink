<script lang="ts">
  let opened = false;
</script>

<div class="drawer">
  <input
    id="my-drawer"
    bind:checked={opened}
    type="checkbox"
    class="drawer-toggle"
  />
  <main class="drawer-content min-h-[91vh]">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="w-2 h-full" on:mouseenter={() => (opened = true)}></div>
  </main>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul
      class="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
      on:mouseleave={() => (opened = false)}
    >
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a>Sidebar Item 1</a></li>
      <!-- svelte-ignore a11y-missing-attribute -->
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
