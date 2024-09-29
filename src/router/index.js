import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import HomeView from '../views/HomeView.vue'
//import ResumeView from '../views/ResumeView.vue'
//import PortfolioView from '../views/PortfolioView.vue'
//import PortfolioSingleView from '../views/PortfolioSingleView.vue'
//import ContactView from '../views/ContactView.vue'
//import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: "Home" },
      component: HomeView
    },
    {
      path: '/my-resume',
      name: 'resume',
      meta: { title: "Resume" },
      component: () => import('../views/ResumeView.vue')
    },
    {
      path: '/recent-work',
      name: 'portfolio',
      meta: { title: "Recent Work" },
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/project/:slug/:id',
      name: 'portfolioSingle',
      meta: { title: "Project Detail" },
      component: () => import('../views/portfolioSingleView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: { title: "Contact" },
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/404',
      name: '404',
      meta: { title: "PageNotFound" },
      component: () => import('../views/PageNotFound.vue')
    },
  ]
})

router.beforeEach((to, from) => {

  if (to.params.slug) {
    document.title = 'Rashid | ' + to.params.slug.replace('-', ' ');
  }
  else {
    document.title = 'Rashid | ' + to.meta.title;
  }

})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }else{
    router.push("404")
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
