import { createMemoryHistory, createRouter } from 'vue-router'

import details from './Pages/showDetails.vue'
import homePage from './Pages/HomePage.vue'

const routes = [
  { path: '/details', component: details },
  { path: '/', component: homePage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router