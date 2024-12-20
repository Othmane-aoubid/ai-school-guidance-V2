import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faChartLine, faRobot, faChartPie, faTrophy, faStar, faGraduationCap, faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faChartLine, faRobot, faChartPie, faTrophy, faStar, faGraduationCap, faBook)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')



