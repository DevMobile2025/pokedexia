import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: 'signup',
          name: 'signUp',
          component: () => import('@/views/SignUpView.vue')
        },
        {
          path: 'cartshop',
          name: 'cartShop',
          component: () => import('@/views/CartShopView.vue')
        }
      ]
    }
  ],
})

export default router;
