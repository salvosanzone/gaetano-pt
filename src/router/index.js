import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import i18n from '../i18n.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: 'bio',
        name: 'bio',
        component: () => import('../views/BioView.vue')
      },
      {
        path: 'service',
        name: 'service',
        component: () => import('../views/ServiceView.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
