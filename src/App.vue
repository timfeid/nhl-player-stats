<template>
  <div id="app">
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import PlayerStats from '@/components/PlayerStats'
import Standings from '@/components/Standings'
import News from '@/components/News'

export default {
  name: 'App',
  data() {
  	return {
	  	currentComponent: window.webConnector.component(),
  	}
  },
  components: {
  	PlayerStats,
    Standings,
    News
  }
}
</script>