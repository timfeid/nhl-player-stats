<template>
  <div class="stats-table table-container table-container--scrollable">
    <table class="table table-responsive">
      <thead>
        <tr>
          <th>Opponent</th>
          <th>Date</th>
          <th>G</th>
          <th>A</th>
          <th>P</th>
          <th>+/-</th>
          <th>PIM</th>
          <th>PPG</th>
          <th>PPP</th>
          <th>SHG</th>
          <th>SHP</th>
          <th>GWG</th>
          <th>OTG</th>
          <th>S</th>
          <th>S%</th>
          <th>FO%</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game in lastFive">
          <td>
            <div style="position: relative; top: -9px;">
              <svg width="25" height="25" class="homepage__game__team__img" style="position: relative; top: 7px;">
                <use :xlink:href="'#team-'+game.opponent.id+'-20172018-light'"></use>
              </svg>
              {{ game.opponent.abbreviation }}
            </div>
          </td>
          <td class="text-uppercase" v-date-format="{ date: game.date, format: 'MMM DD' }">

          </td>
          <td>
            {{ game.stat.goals }}
          </td>
          <td>
            {{ game.stat.assists }}
          </td>
          <td>
            {{ game.stat.goals + game.stat.assists }}
          </td>
          <td>
            {{ game.stat.plusMinus }}
          </td>
          <td>
            {{ game.stat.pim }}
          </td>
          <td>
            {{ game.stat.powerPlayGoals }}
          </td>
          <td>
            {{ game.stat.powerPlayPoints }}
          </td>
          <td>
            {{ game.stat.shortHandedGoals }}
          </td>
          <td>
            {{ game.stat.shortHandedPoints }}
          </td>
          <td>
            {{ game.stat.gameWinningGoals }}
          </td>
          <td>
            {{ game.stat.overTimeGoals }}
          </td>
          <td>
            {{ game.stat.shots }}
          </td>
          <td>
            {{ game.stat.shotPct }}
          </td>
          <td>
            {{ game.stat.faceOffPct }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DateFormat from '@/directives/DateFormat'

export default {
  directives: {
    DateFormat,
  },

  props: {
    gameLog: {
      required: true,
      type: Array,
    },
  },

  data() {
    return {
      lastFive: this.gameLog.splice(0,5),
    }
  },
}
</script>