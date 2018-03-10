import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PlayerStats from '@/components/PlayerStats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: PlayerStats
    },
    {
      path: '/player-stats/:id',
      name: 'PlayerStats',
      component: PlayerStats,
    }
  ]
})
