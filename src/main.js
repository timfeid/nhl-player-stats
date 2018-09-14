import Vue from 'vue'
import App from './App'
import './assets/sass/main.sass'
import axios from 'axios'

require('typeface-roboto')
require('typeface-roboto-mono')
require('typeface-merriweather')

Vue.prototype.$http = axios

Vue.config.productionTip = false

if (!window.webConnector) {
  window.webConnector = {
    load() {
      return 8472382
    },
    component() {
      return 'news'
    },
    newsId() {
      return 300086148
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})

axios.get('https://www-league.nhlstatic.com/images/logos/team-sprites/20182019.svg').then((response) => {
  let node = document.createElement('div')
  node.style.display = 'none'
  node.innerHTML = response.data
  document.body.appendChild(node)
})