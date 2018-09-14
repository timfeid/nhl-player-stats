<template>
  <tr class="standings__record">
    <td class="col1">
      <div class="standings__record__team">
        <div style="position: relative; top: -9px;">
          <svg width="25" height="25" class="homepage__game__team__img" style="position: relative; top: 7px;">
            <use :xlink:href="'#team-'+record.team.id+'-20172018-light'"></use>
          </svg>
          {{ record.team.abbreviation }}
        </div>
      </div>
    </td>
    <td>{{ record.gamesPlayed }}</td>
    <td>{{ record.leagueRecord.wins }}</td>
    <td>{{ record.leagueRecord.losses }}</td>
    <td>{{ record.leagueRecord.ot }}</td>
    <td>{{ record.points }}</td>
    <td>{{ record.row }}</td>
    <td>{{ record.goalsScored }}</td>
    <td>{{ record.goalsAgainst }}</td>
    <td>{{ record.goalsScored - record.goalsAgainst }}</td>
    <td>{{ homeRecord }}</td>
    <td>{{ awayRecord }}</td>
    <td>{{ shootoutRecord }}</td>
    <td>{{ last10Record }}</td>
    <td>{{ record.streak.streakCode }}</td>
  </tr>
</template>

<script>
  const HOME = 'home'
  const AWAY = 'away'
  const SHOOTOUT = 'shootOuts'
  const LAST10 = 'lastTen'
  export default {
    props: {
      record: {
        required: true
      },
      rank: {
        required: true
      }
    },
    computed: {
      homeRecord() {
        return this.getRecordFor(HOME)
      },
      awayRecord() {
        return this.getRecordFor(AWAY)
      },
      shootoutRecord() {
        return this.getRecordFor(SHOOTOUT)
      },
      last10Record() {
        return this.getRecordFor(LAST10)
      }
    },
    methods: {
      getRecordFor(what) {
        let records = []
        for (let index in this.record.records.overallRecords) {
          if (this.record.records.overallRecords[index].type === what) {
            records = [
              this.record.records.overallRecords[index].wins,
              this.record.records.overallRecords[index].losses
            ]
            if (typeof this.record.records.overallRecords[index].ot !== 'undefined') {
              records.push(this.record.records.overallRecords[index].ot)
            }
            return records.join('-')
          }
        }
      }
    }
  }
</script>