import {createRouter, createWebHistory} from 'vue-router';
import Homepage from '@/pages/Homepage.vue';
import ApartmentPage from '@/pages/ApartmentPage.vue';
import ErrorPage from '@/pages/ErrorPage.vue';

const routes = [
  {
    path: '/',
    component: Homepage,
    name: 'homepage'
  },
  {
    path: '/apartments/:id',
    component: ApartmentPage,
    name: 'apartment'
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage,
    name: 'error-page'
  },
]

const router = new createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;