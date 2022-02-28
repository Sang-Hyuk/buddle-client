import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView'
import BusinessView from '../views/BusinessView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/company',
    name: 'company',
    component: CompanyView
  },
  {
    path: '/business',
    name: 'about',
    component: BusinessView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
