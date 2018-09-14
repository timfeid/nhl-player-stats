<template>
  <div v-if="standings.length !== 0">
    <div v-for="conference in conferences">
      <h1>{{ conference }} Conference</h1>

      <standings-table v-for="divisionLeader in divisionLeaders(conference)" :name="divisionLeader.division.name" :short-name="divisionLeader.division.name.substr(0, 3)" :records="divisionLeader.teamRecords"></standings-table>

      <standings-table class="standings--wildcard" name="Wildcard" short-name="WC" :records="wildcard(conference).teamRecords"></standings-table>

    </div>

  </div>
</template>

<script>
import StandingsTable from "@/components/StandingsTable"

export default {
  mounted() {
    this.getStandings()
  },
  components: {
    StandingsTable
  },
  data() {
    return {
      standings: [],
      conferences: [
        'Eastern',
        'Western'
      ]
    }
  },
  computed: {
  },
  methods: {
    getStandings() {
      this.$http.get('https://statsapi.web.nhl.com/api/v1/standings/wildCardWithLeaders?expand=standings.record,standings.team,standings.division,standings.conference,team.schedule.next,team.schedule.previous&season=20182019')
        .then(this.gotStandings)
    },
    gotStandings({data}) {
      this.standings = data.records
    },
    divisionLeaders(conference) {
      let divisionLeaders = []
      for (let index in this.standings) {
        if (this.standings[index].conference.name === conference
            && this.standings[index].standingsType === 'divisionLeaders') {
          divisionLeaders.push(this.standings[index])
        }
      }
      return divisionLeaders
    },
    wildcard(conference) {
      for (let index in this.standings) {
        if (this.standings[index].conference.name === conference
            && this.standings[index].standingsType === 'wildCard') {
          return this.standings[index]
        }
      }
    }
  }
}
</script>