import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView'
import BusinessView from '../views/BusinessView'
import VisionView from '../views/VisionView'
import ProductView from '../views/ProductView'
import AsView from '../views/AsView'
import AdminView from '../views/AdminView'
import AuthCheckView from '../views/AuthCheckView'
import AsCheckView from "@/views/AsCheckView";
import ProductAuthView from '../views/ProductAuth'
import AdminASView from '../views/AdminASView'

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
  },
  {
    path: '/vision',
    name: 'about',
    component: VisionView
  },
  {
    path: '/product',
    name: 'about',
    component: ProductView
  },
  {
    path: '/as',
    name: 'as',
    component: AsView
  },
  {
    path: '/admin',
    name: 'about',
    component: AdminView
  },
  {
    path: '/authcheck',
    name: 'authcheck',
    component: AuthCheckView
  },
  {
    path: '/ascheck',
    name: 'about',
    component: AsCheckView
  },
  {
    path: '/product-auth',
    name: 'product-auth',
    component: ProductAuthView
  },
  {
    path: '/adminAS',
    name: 'adminAS',
    component: AdminASView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
