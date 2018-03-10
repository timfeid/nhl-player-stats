<template>
  <div style="background: #eaeaea">
    <div>
      <div class="player-stats-block">
        <h5 class="text-center">Game Log</h5>
        <game-log :game-log="gameLog" v-if="player" />
      </div>

      <div class="player-stats-block">
        <h5 class="text-center">Career Stats</h5>
        <career-stats :seasons="seasons" :career="career" :playoffs="playoffs" v-if="player" />
      </div>
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
      stats: 'yearByYear,careerRegularSeason,gameLog,yearByYearPlayoffs'
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

    playoffs() {
      let playoffs = []
      if (this.player) {
        for (let stat of this.player.stats) {
          if (stat.type.displayName === 'yearByYearPlayoffs') {
            for (let split of stat.splits) {
              if (split.league.id === 133) {
                playoffs.push(split)
              }
            }
          }
        }
      }

      return playoffs
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