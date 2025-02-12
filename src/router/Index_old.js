import { createRouter, createWebHistory } from 'vue-router'
import RoleBasedView from '@/views/RoleBasedView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RoleBasedView
    },
    {
      path: '/e-boutique',
      name: 'e-boutique',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CatalogueView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/RoleBasedView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductDetailView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckOutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/productDetail/:id',
      name: 'productDetail',
      component: () => import('../views/ProductDetailView.vue')
    },
    {
      path: '/commande',
      name: 'commande',
      component: () => import('../views/CommandView.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/PaymentView.vue')
    },
    {
      path: '/customize-cookies',
      name: 'customize-cookies',
      component: () => import('../views/CustomizeCookies.vue')
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicy.vue')
    },


  ]
})


export default router
