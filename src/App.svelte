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

  const onEnter = () => {
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
    <Navbar on:entered={onEnter} isLogin={$authStore.currentUser !== null} />
  </header>
  <main>
    <Route path="/"><Home /></Route>
    <Route path="/login">
      <Login />
    </Route>
    <ProtectedRoute path="/main">
      <Main></Main>
    </ProtectedRoute>
  </main>
</Router>
