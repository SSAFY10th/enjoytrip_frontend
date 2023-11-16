import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './HomeView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth/register',
      name: 'register',
      component: () => import('./RegisterView.vue'),
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('./LoginView.vue'),
    },
    {
      path: '/plan/create',
      name: 'createPlan',
      component: () => import('./CreatePlanView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('./404.vue'),
    },
  ],
})
