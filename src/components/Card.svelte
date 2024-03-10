<script lang="ts">
  export let title: string;
  export let desc: string;
  export let isFavourite: boolean = false;
  import Icon from "@iconify/svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<div class="card w-96 h-auto bg-primary text-primary-content relative">
  <div class="card-body">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex justify-between items-center">
      <h2 class="card-title">{title}</h2>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="tooltip tooltip-top cursor-pointer"
        data-tip={!isFavourite
          ? "Click to add to favourite"
          : "Click to remove from favourite"}
        on:click={() => {
          dispatch("tooglefavorite");
        }}
      >
        {#if isFavourite}
          <Icon icon="mdi:star" style="font-size: 28px; color: gold" class="" />
        {:else}
          <Icon icon="mdi:star-outline" style="font-size: 28px;" class="" />
        {/if}
      </div>
    </div>
    <p>{desc}</p>
    <div class="card-actions flex justify-between mt-2 items-center">
      <div class="flex items-center space-x-1">
        <div class="tooltip tooltip-left cursor-pointer" data-tip="Play">
          <Icon icon="mdi:play-speed" style="font-size: 24px;" />
        </div>
        <div class="tooltip tooltip-right cursor-pointer" data-tip="History">
          <Icon icon="mdi:clock-arrow" style="font-size: 28px;" />
        </div>
      </div>
      <div>
        <button
          class="btn btn-sm bg-sky-400 border-sky-400 hover:opacity-80 hover:bg-sky-400 hover:border-sky-400"
          ><Icon icon="mdi:ios-share" style="font-size: 16px;" /></button
        >
        <button class="btn btn-sm btn-success"
          ><Icon icon="mdi:edit" style="font-size: 16px" /></button
        >
        <button class="btn btn-sm btn-error"
          ><Icon icon="mdi:delete" style="font-size: 16px" /></button
        >
      </div>
    </div>
  </div>
</div>
