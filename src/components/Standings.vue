<template>
  <div class="container-fluid pt-1 standings">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" :class="{ active: this.component === 'wildcard' }" @click="component = 'wildcard'">Wild Card</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: this.component === 'division' }" @click="component = 'division'">Division</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active">
        <div :is="component"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Wildcard from "@/components/Wildcard"
import Division from "@/components/Division"

export default {
  data() {
    return {
      component: 'wildcard'
    }
  },
  components: {
    Wildcard,
    Division
  }
}
</script>