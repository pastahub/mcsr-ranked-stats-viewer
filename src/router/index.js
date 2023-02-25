import { createRouter, createWebHistory } from 'vue-router'
import LeaderboardView from '../views/LeaderboardView.vue'
import PlayerLookupView from '../views/PlayerLookupView.vue'
import PlayerView from '../views/PlayerView.vue'
import MatchesView from '../views/MatchesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LeaderboardView
    },
    {
      path: '/player',
      component: PlayerLookupView
    },
    {
      path: '/player/:name',
      component: PlayerView
    },
    {
      path: '/matches/:name',
      component: MatchesView
    }
  ]
})

export default router
