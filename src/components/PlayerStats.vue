<template>
  <div class="hello">
    <div class="container-fluid">
      <h1>Last Five Games</h1>
      <game-log :game-log="gameLog" v-if="player"></game-log>


      <h1>Career Stats</h1>
      <career-stats :seasons="seasons" :career="career" v-if="player"></career-stats>
    </div>
  </div>
</template>

<script>
import GameLog from '@/components/GameLog'
import CareerStats from '@/components/CareerStats'

export default {
  name: 'PlayerStats',
  data () {
    return {
      player: null,
    }
  },

  mounted() {
    let params = {
      expand: 'person.stats,stats.team',
      stats: 'yearByYear,careerRegularSeason,gameLog'
    }

    this.$http.get('https://statsapi.web.nhl.com/api/v1/people/' + window.webConnector.load(), {
      params
    }).then(this.gotPerson, this.failed)
  },

  components: {
    GameLog,
    CareerStats,
  },

  computed: {
    gameLog() {
      if (this.player) {
        for (let stat of this.player.stats) {
          if (stat.type.displayName === 'gameLog') {
            return stat.splits
          }
        }
      }
    },

    seasons() {
      let seasons = []
      if (this.player) {
        for (let stat of this.player.stats) {
          if (stat.type.displayName === 'yearByYear') {
            for (let split of stat.splits) {
              if (split.league.id === 133) {
                seasons.push(split)
              }
            }
          }
        }
      }

      return seasons
    },

    career() {
      if (this.player) {
        for (let stat of this.player.stats) {
          if (stat.type.displayName === 'careerRegularSeason') {
            return stat.splits[0]
          }
        }
      }
    },
  },

  methods: {
    gotPerson(response) {
      this.player = response.data.people[0]
    },

    failed() {
      console.log("fail")
    }
  }
}
</script>