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
          component: () => import('@/views/desktop/HomeView.vue')
        },
        {
          path: 'signup',
          name: 'signUp',
          component: () => import('@/views/desktop/SignUpView.vue')
        },
        {
          path: 'cartshop',
          name: 'cartShop',
          component: () => import('@/views/default/CartShopView.vue')
        },
        {
          path: 'sucess',
          name: 'sucess',
          component: () => import('@/views/desktop/PaymentSuccesfull.vue')
        }
      ]
    }
  ],
})

export default router;
