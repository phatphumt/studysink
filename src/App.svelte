<script lang="ts">
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./views/Home.svelte";
  import Navbar from "./components/Navbar.svelte";
  import { onDestroy, onMount } from "svelte";
  import Login from "./views/Login.svelte";
  import { onAuthStateChanged } from "firebase/auth";
  import { auth } from "./lib/firebase";
  import { authStore } from "./lib/stores/auth";
  import Main from "./views/Main.svelte";
  import ProtectedRoute from "./components/routing/ProtectedRoute.svelte";
  import lang from "./lib/stores/lang";
  import Create from "./views/Create.svelte";

  const onEnter = () => {
    const localLang: "en" | "th" =
      <"en" | "th">localStorage.getItem("lang") || "en";
    lang.update(() => localLang);
    onAuthStateChanged(auth, (user) => {
      authStore.set({
        currentUser: user,
        isLoading: false,
      });
    });
  };

  onMount(onEnter);
</script>

<Router primary={false}>
  <header>
    <Navbar on:entered={onEnter} />
  </header>
  <main class="min-h-[92.6vh] bg-gradient-to-t from-gray-900 to-gray-800">
    {#if !$authStore.isLoading}
      <Route path="/"><Home /></Route>
      <Route path="/login">
        <Login />
      </Route>
      <ProtectedRoute path="/main">
        <Main />
      </ProtectedRoute>
      <ProtectedRoute path="/create">
        <Create />
      </ProtectedRoute>
    {/if}
  </main>
</Router>
