<script setup>
import PlayerSearchBar from '../components/PlayerSearchBar.vue'
</script>

<template>
    <h1>Player Lookup</h1>
    <PlayerSearchBar />
</template>

<style scoped>
input {
    color: var(--color);
    background: var(--bg);
    border: 1px solid var(--color);
    width: 12rem;
    height: 2rem;
    border-radius: 12.5px;
    text-align: center;
    font-size: 1rem;
    justify-self: center;
}
</style>