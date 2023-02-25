<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'
import Loading from '../components/Loading.vue'
import Match from '../components/Match.vue'

import getMatches from '../getMatches.js'

const route = useRoute()
const name = route.params.name

const matches = ref()
const loaded = ref(false)

getMatches(name)
    .then(res => {
        matches.value = res
        loaded.value = true
    })

</script>

<template>
<h1>Match history for {{ name }}</h1>
<Match v-if="loaded" v-for="match in matches.filter(match => match.match_type == 2)" :match="match" />
<Loading v-else />
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