<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'
import Loading from '../components/Loading.vue'

import PlayerSearchBar from '../components/PlayerSearchBar.vue'

const route = useRoute()
const name = route.params.name

const mojangData = ref()
const rankedData = ref()
const loaded = ref(false)
const trimmedUUID = ref('')

fetch(`https://api.ashcon.app/mojang/v2/user/${name}`)
    .then(res => res.json())
    .then(res => {
        mojangData.value = res
        trimmedUUID.value = res.uuid.replaceAll('-', '')
    })
    .then(() => fetch(`https://mcsrranked.com/api/users/${trimmedUUID.value}`))
    .then(res => res.json())
    .then(res => {
        rankedData.value = res.data
        loaded.value = true
    })
</script>

<template>
<div v-if="loaded">
    <h1>Stats for {{ mojangData.username }}</h1>
    <img :src="`https://crafatar.com/avatars/${mojangData.uuid}?size=64&overlay`">
    <p>{{ rankedData.elo_rate }} elo (#{{ rankedData.elo_rank }})</p>
    <p>{{ rankedData.records[2].win }}/{{ rankedData.total_played }} games won (lifetime)</p>
    <p>{{ rankedData.current_winstreak }} current winstreak ({{ rankedData.highest_winstreak }} best winstreak)</p>
    <RouterLink :to="`/matches/${mojangData.username}`">Match History</RouterLink>
    <h2>Look up another player</h2>
    <PlayerSearchBar />
</div>
<div v-else>
    <h1>Fetching stats for {{ name }}</h1>
    <Loading />
</div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: var(--blue);
  padding: .5rem;
  border-radius: 12.5px;
  transition: background .35s ease, color .25s ease-out;
}

a:hover {
  color: var(--bg);
  background: var(--blue);
}
</style>