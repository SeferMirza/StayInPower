import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  } from '@fortawesome/free-regular-svg-icons'
import {
  faStar,
  faUpLong,
  faDownLong,
  faPersonMilitaryPointing,
  faLeaf,
  faDove,
  faFlag,
  faShieldAlt,
  faFistRaised
} from '@fortawesome/free-solid-svg-icons'

library.add([
  faStar,
  faUpLong,
  faDownLong,
  faPersonMilitaryPointing,
  faLeaf,
  faDove,
  faFlag,
  faShieldAlt,
  faFistRaised
]);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())

app.mount('#app')
