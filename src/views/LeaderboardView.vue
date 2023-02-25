<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Loading from '../components/Loading.vue'

const router = useRouter()
const data = ref()
const loaded = ref(false)

fetch("https://mcsrranked.com/api/leaderboard")
    .then(res => res.json())
    .then(res => {
        data.value = res.data
        loaded.value = true
        console.log("data fetched")
        console.log(data.value)
    })
</script>

<template>
<div v-if=loaded>
    <h1>Season {{ data.seasonNumber }} Leaderboard</h1>
    <table>
        <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Elo</th>
        </tr>
        <tr class="player-row" v-for="user in data.users" @click="router.push(`/player/${user.nickname}`)">
            <td>{{ user.elo_rank }}</td>
            <td>{{ user.nickname }}</td>
            <td>{{ user.elo_rate }}</td>
        </tr>
    </table>
</div>
<div v-else>
    <h1>Fetching leaderboard</h1>
    <Loading />
</div>
</template>

<style scoped>
div {
    display: grid;
    justify-content: center;
}

table {
    text-align: center;
    border-collapse: collapse;
}

th {
    color: var(--blue)
}

tr {
    height: 2rem;
    transition: background .35s ease, color .35s ease;
}

tr:nth-child(2n) {
    background: var(--bg-secondary);
}

.player-row {
    cursor: pointer;
}

.player-row:hover {
    background: var(--blue);
    color: var(--bg);
}
</style>