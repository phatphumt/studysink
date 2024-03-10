<script lang="ts">
  import { Link, navigate } from "svelte-navigator";
  import Card from "../components/Card.svelte";
  import { authStore } from "../lib/stores/auth";

  document.title = "StudySync · Home";
  let searchTerm = "";
  let originalCard = [
    { title: "test", desc: "test", isFavourite: false },
    { title: "reda", desc: "test", isFavourite: false },
    { title: "reda", desc: "test", isFavourite: false },
    { title: "reda", desc: "test", isFavourite: false },
    { title: "reda", desc: "test", isFavourite: false },
    { title: "reda", desc: "test", isFavourite: false },
    { title: "reda", desc: "test", isFavourite: false },
    { title: "reda", desc: "test", isFavourite: false },
    { title: "reda", desc: "test", isFavourite: true },
    { title: "reda", desc: "test", isFavourite: true },
    { title: "reda", desc: "test", isFavourite: true },
    { title: "reda", desc: "test", isFavourite: true },
    { title: "reda", desc: "test", isFavourite: true },
    { title: "reda", desc: "test", isFavourite: true },
    { title: "reda", desc: "test", isFavourite: true },
  ];
  let card = originalCard;
  let modalRef: HTMLDialogElement | null = null;

  $: {
    console.log(searchTerm);
    if (searchTerm !== "") {
      card = card.filter((el) => el.title.includes(searchTerm));
    } else {
      card = originalCard;
    }
  }
</script>

<main class="min-h-[92vh] flex justify-center items-center flex-col text-white">
  <div class="w-[85%] flex flex-col items-center space-y-6 mt-6">
    <h1 class="text-5xl font-semibold text-center">
      Your Quiz ({$authStore.currentUser?.displayName})
    </h1>
    <div class="flex w-[80%] items-center space-x-1">
      <input
        bind:value={searchTerm}
        type="text"
        placeholder="Try Searching"
        class="input input-bordered text-black w-[94%]"
      />
      <button
        on:click={() => navigate("/create")}
        class="btn btn-success lg:w-[4%] w-[7%] text-2xl font-semibold flex items-center"
        >+</button
      >
    </div>
    <div class="flex gap-4 sm:flex-row flex-col">
      <button class="px-4 py-2 bg-black rounded-lg select-none cursor-pointer">
        Recently Played
      </button>
      <button class="px-4 py-2 bg-black rounded-lg select-none cursor-pointer">
        Favourites
      </button>
      <button class="px-4 py-2 bg-black rounded-lg select-none cursor-pointer">
        Shared with you
      </button>
      <button class="px-4 py-2 bg-black rounded-lg select-none cursor-pointer">
        Created by you
      </button>
    </div>
    {#if card.length === 0}
      {#if originalCard.length === 0}
        <p>no stuff yet</p>
      {:else}
        <p>had stuff but skill issue cant find stuff</p>
      {/if}
    {:else}
      <div
        class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4 pb-4 scrollbar-hide"
      >
        {#each card as { desc, title, isFavourite }}
          <Card
            {title}
            {desc}
            {isFavourite}
            on:tooglefavorite={() => console.log("test123")}
          />
        {/each}
      </div>
    {/if}
  </div>
</main>
