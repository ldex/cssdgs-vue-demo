import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from '../views/ErrorView.vue'
import Step1View from '../views/form/Step1View.vue'
import Step2View from '../views/form/Step2View.vue'
import Step3View from '../views/form/Step3View.vue'
import store from '@/store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/FormView.vue'),
    children: [
      {
        path: 'step1',
        name: 'step1',
        component: Step1View
      },
      {
        path: 'step2',
        name: 'step2',
        component: Step2View
      },
      {
        path: 'step3',
        name: 'step3',
        component: Step3View
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView
  },
  // {
  //   path: '*',
  //   redirect: { name: "error" }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name == 'step2') {
    if(!store.getters['form/formStep1Valid']) {
      next({ name: 'step1' })
    } else next()
  } else next()
  if (to.name == 'step3') {
    if(!store.getters['form/formStep2Valid']) {
      next({ name: 'step2' })
    } else next()
  } else next()
})

export default router
