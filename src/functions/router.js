
import { createRouter, createWebHistory } from 'vue-router';
const routes = [  

  {
    path: '/',
    name: 'Offer',
    component: () => import('../components/PageOneOffer.vue')
  },
  {
    path: '/list_offer',
    name: 'ListOffer',
    component: () => import('../components/ListOffer.vue')
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;

