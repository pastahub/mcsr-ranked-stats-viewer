<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const value = ref("")

function onSubmit(event) {
    if (event.key === 'Enter') {
        router.push(`/player/${value.value}`)
    }
}
</script>

<template>
    <input type="text" placeholder="Enter player name" v-model="value" @keypress="onSubmit">
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