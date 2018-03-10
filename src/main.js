import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/sass/main.sass'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

axios.get('https://www-league.nhlstatic.com/images/logos/team-sprites/20172018.svg').then((response) => {
  console.log(response)
  let node = document.createElement('div')
  node.style.display = 'none'
  node.innerHTML = response.data
  document.body.appendChild(node)
})