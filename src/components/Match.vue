<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps(['match'])

const match = props.match
let winner
if (match.winner == match.members[0].uuid) {
    winner = match.members[0].nickname
} else {
    winner = match.members[1].nickname
}
let time = match.final_time
const minutes = Math.floor(time / 60000)
time -= minutes * 60000
const seconds = Math.floor(time / 1000)
time -= seconds * 1000
const millis = time

const date = new Date(match.match_date * 1000)
const formattedDate = date.toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'})
</script>

<template>
<div class="match-grid">
    <p class="span-3">{{ formattedDate }}</p>
    <img :src="`https://crafatar.com/avatars/${match.members[0].uuid}?size=64&overlay`" @click="router.push(`/player/${match.members[0].nickname}`)">
    <h2>vs</h2>
    <img :src="`https://crafatar.com/avatars/${match.members[1].uuid}?size=64&overlay`" @click="router.push(`/player/${match.members[1].nickname}`)">
    <p @click="router.push(`/player/${match.members[0].nickname}`)">{{ match.members[0].nickname }}</p>
    <p @click="router.push(`/player/${match.members[1].nickname}`)">{{ match.members[1].nickname }}</p>
    <p class="span-3">{{ minutes + ":" + seconds.toString().padStart(2, '0') + "." + millis.toString().padStart(3, '0') }}</p>
    <p class="span-3">Winner: {{ winner }}</p>
    <p class="span-3">Seed: {{ match.match_seed }}</p>
    <p class="span-3" v-if="match.forfeit">(Forfeit)</p>
</div>
</template>

<style scoped>
.match-grid {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    background: var(--bg-secondary);
    padding: .5rem;
    border-radius: 1rem;
    margin: 1rem;
    transition: background .35s ease;
}

.match-grid:hover {
    background: var(--blue);
}

img {
    justify-self: center;
    cursor: pointer;
    transition: filter .35s ease;
}

p {
    margin: .25rem;
    color: var(--blue);
    cursor: pointer;
    transition: color .35s ease;
}

.match-grid:hover > p {
    color: var(--bg)
}

.span-3 {
    grid-column: span 3;
    color: var(--color);
    cursor: auto;
}

img:hover {
    filter: brightness(150%)
}

h2 {
    grid-row: span 2;
}
</style>