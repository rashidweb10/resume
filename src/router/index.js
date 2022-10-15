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
      component: HomeView,
      meta: { title: "Home" }
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
      meta: { title: "Resume" },
      component: () => import('../views/ResumeView.vue')
    }, 
    /*{
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },*/
    {
      path: '/recent-work',
      name: 'portfolio',
      meta: { title: "Recent Work" },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PortfolioView.vue')
    }, 
    {
      path: '/project/:slug/:id',
      name: 'portfolioSingle',
      meta: { title: "Project Detail" },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/portfolioSingleView.vue')
    },            
    {
      path: '/contact',
      name: 'contact',
      meta: { title: "Contact" },
      component: ContactView
    },    
  ]
})

router.beforeEach((to, from) => {
  //console.log(to.params.slug);
  
  if(to.params.slug)
  {
    document.title = 'Rashid | ' + to.params.slug.replace('-', ' ');
  }
  else
  {
    document.title = 'Rashid | ' + to.meta.title;
  }
  
})

export default router
