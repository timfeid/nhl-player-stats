<template>
  <div>
    <ul class="mb-3 nav nav-pills justify-content-center">
      <li class="nav-item">
        <a @click="nav = 'regular'" class="nav-link" :class="{ active: nav === 'regular' }" href="#">
          Regular Seasons
          <font-awesome-icon class="ml-1" :icon="faHockeyPuck" />
        </a>
      </li>
      <li class="nav-item" v-if="playoffs.length > 0">
        <a @click="nav = 'playoffs'" class="nav-link" :class="{ active: nav === 'playoffs' }" href="#">
          Playoffs
          <font-awesome-icon class="ml-1" :icon="faTrophy" />
        </a>
      </li>
    </ul>

    <div class="stats-table table-container table-container--scrollable">
      <table class="table table-responsive">
        <thead>
          <tr>
            <th @click="sortBy('season')" :class="{ 'stats--highlight': sortedBy === 'season' }">
              Season
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('team')" :class="{ 'stats--highlight': sortedBy === 'team' }">
              Team
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('games')" :class="{ 'stats--highlight': sortedBy === 'games' }">
              GP
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('goals')" :class="{ 'stats--highlight': sortedBy === 'goals' }">
              G
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('assists')" :class="{ 'stats--highlight': sortedBy === 'assists' }">
              A
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('points')" :class="{ 'stats--highlight': sortedBy === 'points' }">
              P
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('plusMinus')" :class="{ 'stats--highlight': sortedBy === 'plusMinus' }">
              +/-
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('pim')" :class="{ 'stats--highlight': sortedBy === 'pim' }">
              PIM
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('powerPlayGoals')" :class="{ 'stats--highlight': sortedBy === 'powerPlayGoals' }">
              PPG
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('powerPlayPoints')" :class="{ 'stats--highlight': sortedBy === 'powerPlayPoints' }">
              PPP
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('shortHandedGoals')" :class="{ 'stats--highlight': sortedBy === 'shortHandedGoals' }">
              SHG
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('shortHandedPoints')" :class="{ 'stats--highlight': sortedBy === 'shortHandedPoints' }">
              SHP
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('gameWinningGoals')" :class="{ 'stats--highlight': sortedBy === 'gameWinningGoals' }">
              GWG
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('overTimeGoals')" :class="{ 'stats--highlight': sortedBy === 'overTimeGoals' }">
              OTG
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('shots')" :class="{ 'stats--highlight': sortedBy === 'shots' }">
              S
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('shotPct')" :class="{ 'stats--highlight': sortedBy === 'shotPct' }">
              S%
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
            <th @click="sortBy('faceOffPct')" :class="{ 'stats--highlight': sortedBy === 'faceOffPct' }">
              FO%
              <font-awesome-icon class="stats--icon" :icon="icon" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="season in sortedSeasons">
            <td :class="{ 'stats--highlight': sortedBy === 'season' }">
              {{ season.season.substr(0, 4) }}-{{ season.season.substr(4, season.season.length) }}
            </td>
            <td class="text-left" :class="{ 'stats--highlight': sortedBy === 'team' }">
              {{ season.team.abbreviation }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'games' }">
              {{ season.stat.games }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'goals' }">
              {{ season.stat.goals }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'assists' }">
              {{ season.stat.assists }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'points' }">
              {{ season.stat.points }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'plusMinus' }">
              {{ season.stat.plusMinus }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'pim' }">
              {{ season.stat.pim }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'powerPlayGoals' }">
              {{ season.stat.powerPlayGoals }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'powerPlayPoints' }">
              {{ season.stat.powerPlayPoints }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'shortHandedGoals' }">
              {{ season.stat.shortHandedGoals }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'shortHandedPoints' }">
              {{ season.stat.shortHandedPoints }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'gameWinningGoals' }">
              {{ season.stat.gameWinningGoals }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'overTimeGoals' }">
              {{ season.stat.overTimeGoals }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'shots' }">
              {{ season.stat.shots }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'shotPct' }">
              {{ (typeof season.stat.shotPct !== 'undefined') ? parseFloat(season.stat.shotPct).toFixed(2) : '&mdash;' }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'faceOffPct' }">
              {{ (typeof season.stat.faceoffPct !== 'undefined') ? parseFloat(season.stat.faceoffPct).toFixed(2) : '&mdash;' }}
            </td>
          </tr>

          <tr class="font-weight-bold">
            <td :class="{ 'stats--highlight': sortedBy === 'season' }">
              Career
            </td>
            <td class="text-left" :class="{ 'stats--highlight': sortedBy === 'team' }">
              &mdash;
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'games' }">
              {{ career.stat.games }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'goals' }">
              {{ career.stat.goals }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'assists' }">
              {{ career.stat.assists }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'points' }">
              {{ career.stat.points }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'plusMinus' }">
              {{ career.stat.plusMinus }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'pim' }">
              {{ career.stat.pim }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'powerPlayGoals' }">
              {{ career.stat.powerPlayGoals }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'powerPlayPoints' }">
              {{ career.stat.powerPlayPoints }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'shortHandedGoals' }">
              {{ career.stat.shortHandedGoals }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'shortHandedPoints' }">
              {{ career.stat.shortHandedPoints }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'gameWinningGoals' }">
              {{ career.stat.gameWinningGoals }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'overTimeGoals' }">
              {{ career.stat.overTimeGoals }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'shots' }">
              {{ career.stat.shots }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'shotPct' }">
              {{ (typeof career.stat.shotPct !== 'undefined') ? parseFloat(career.stat.shotPct).toFixed(2) : '&mdash;' }}
            </td>
            <td :class="{ 'stats--highlight': sortedBy === 'faceOffPct' }">
              {{ (typeof career.stat.faceoffPct !== 'undefined') ? parseFloat(career.stat.faceoffPct).toFixed(2) : '&mdash;' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Team from '@/directives/Team'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCaretUp } from '@fortawesome/fontawesome-free-solid'
import { faCaretDown } from '@fortawesome/fontawesome-free-solid'
import { faHockeyPuck } from '@fortawesome/fontawesome-free-solid'
import { faTrophy } from '@fortawesome/fontawesome-free-solid'

export default {
  directives: {
    Team,
  },

  props: {
    seasons: {
      required: true,
      type: Array,
    },
    playoffs: {
      required: true,
      type: Array,
    },
    career: {
      required: true,
      type: Object,
    }
  },

  components: {
    FontAwesomeIcon,
  },

  computed: {
    icon() {
      return this.sortedDirection === 'asc' ? faCaretDown : faCaretUp
    },
    sortedSeasons() {
      let seasons = this.nav === 'regular' ? this.seasons : this.playoffs
      return seasons.sort((a, b) => {
        if (this.sortedBy === 'season') {
          if (this.sortedDirection === 'asc') {
            return parseFloat(b.season, 10) - parseFloat(a.season, 10)
          }

          return parseFloat(a.season, 10) - parseFloat(b.season, 10)
        }
        if (this.sortedBy === 'team') {
          if (this.sortedDirection === 'asc') {
            return (b.team.abbreviation.substr(0,1) > a.team.abbreviation.substr(0,1)) ? -1 : 1
          }

          return (a.team.abbreviation.substr(0,1) < b.team.abbreviation.substr(0,1)) ? 1 : -1
        }
        if (this.sortedDirection === 'asc') {
          return parseFloat(b.stat[this.sortedBy], 10) - parseFloat(a.stat[this.sortedBy], 10)
        }

        return parseFloat(a.stat[this.sortedBy], 10) - parseFloat(b.stat[this.sortedBy], 10)
      })
    }
  },

  data() {
    return {
      sortedBy: 'season',
      sortedDirection: 'desc',
      nav: 'regular',
      faHockeyPuck,
      faTrophy,
    }
  },

  methods: {
    sortBy(sortBy) {
      if (this.sortedBy === sortBy) {
        this.sortedDirection = this.sortedDirection === 'asc' ? 'desc' : 'asc'
        return
      }
      this.sortedDirection = 'asc'
      this.sortedBy = sortBy
    },
  }
}
</script>