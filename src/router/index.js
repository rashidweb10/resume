import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResumeView from '../views/ResumeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import PortfolioSingleView from '../views/PortfolioSingleView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },*/
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView
    }, 
    /*{
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },*/
    {
      path: '/recent-work',
      name: 'portfolio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PortfolioView.vue')
    }, 
    {
      path: '/project/:id',
      name: 'portfolioSingle',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/portfolioSingleView.vue')
    },            
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },    
  ]
})

router.beforeEach((to, from) => {
  document.title = 'Rashid | ' + to.name.toLowerCase();
})

export default router
