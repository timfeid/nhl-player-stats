<template>
  <div class="table-container table-container--scrollable">
    <table class="table table-responsive">
      <thead>
          <tr>
            <th class="col1">
              <span class="d-none d-md-inline">{{ name }}</span>
              <span class="d-md-none">{{ shortName }}</span>
            </th>
            <th>GP</th>
            <th>W</th>
            <th>L</th>
            <th>O</th>
            <th>P</th>
            <th>ROW</th>
            <th>GF</th>
            <th>GA</th>
            <th>Diff</th>
            <th>Home</th>
            <th>Away</th>
            <th>S/O</th>
            <th>L10</th>
            <th>STRK</th>
          </tr>
      </thead>
      <tbody>
        <tr :class="{'standings__record--highlight': record.team.id === 1}" is="record-row" v-for="(record, index) in records" :record="record" :rank="index + 1"></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import RecordRow from "@/components/RecordRow"

export default {
  props: {
    name: {
      required: true,
      type: String
    },
    shortName: {
      required: true,
      type: String
    },
    records: {
      required: true,
      type: Array
    }
  },
  components: {
    RecordRow
  }
}
</script>