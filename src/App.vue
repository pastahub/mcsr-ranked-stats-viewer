<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h2>MCSR Ranked Stats Viewer</h2>

    <nav>
      <RouterLink to="/">Leaderboard</RouterLink>
      <RouterLink to="/player">Player Lookup</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--blue);
  border-top: 1px solid var(--blue);
  margin: 1rem;
  padding: .25rem;
}

main {
  display: grid;
  justify-content: center;
  text-align: center;
}

a {
  text-decoration: none;
  color: var(--blue);
  padding: 25px;
  border-radius: 12.5px;
  transition: background .35s ease, color .25s ease-out;
  margin-left: 1rem;
}

a:hover {
  color: var(--bg);
  background: var(--blue);
}

h2 {
  color: var(--blue)
}
</style>
