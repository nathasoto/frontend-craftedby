import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@/stores/UserStore.js'; // Store for user state management

// Define layouts for different user roles
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';  // For authentication-related pages
// import ArtisanLayout from '@/layouts/ArtisanLayout.vue';  // For artisans
// import AdminLayout from '@/layouts/AdminLayout.vue';  // For admin pages

// Define views with lazy loading
const HomeView= () => import('../views/HomeView.vue');
const ProductDetailView = () => import('../views/ProductDetailView.vue');
const LoginView = () => import('../views/LoginView.vue');
const RegisterView = () => import('../views/RegisterView.vue');
const CartView = () => import('../views/CartView.vue');
const PrivacyPolicy = () => import('../views/PrivacyPolicy.vue');
const CustomizeCookies = () => import('../views/CustomizeCookies.vue');
const CommandClient = () => import('../views/CommandClient.vue');
const CheckOutView = () => import('../views/CheckOutView.vue');
const CommandView = () => import('../views/CommandView.vue');
const PaymentView= () => import('../views/PaymentView.vue');
const AccountClient= () => import('../views/AccountClient.vue');


const routes = [
  // Main home page, accessible by all users
  {
    path: '/',
    name: 'home',
    component: MainLayout, // Main layout for all users
    children: [
      {
        path: '',
        name :'homeChild',
        component: HomeView,
      },
      {
        path: '/productDetail/:id',
        name: 'productDetail',
        component: ProductDetailView, // Lazy-loaded
      },
      {
        path: '/cart',
        name: 'cart',
        component: CartView, // Lazy-loaded
      },
      {
        path: '/CheckOut',
        name: 'CheckOut',
        component: CheckOutView, // Lazy-loaded
      },
      {
        path: '/Command',
        name: 'Command',
        component: CommandView, // Lazy-loaded
      },
      {
        path: '/payment',
        name: 'payment',
        component: PaymentView
      },
      {
        path: '/login',
        name: 'login',
        component: LoginView, // Lazy-loaded

      },
      {
        path: '/register',
        name: 'register',
        component: RegisterView, // Lazy-loaded

      },
      {
        path: '/privacy-policy',
        name: 'privacy-policy',
        component: PrivacyPolicy, // Lazy-loaded

      },
      {
        path: '/customize-cookies',
        name: 'customize-cookies',
        component: CustomizeCookies, // Lazy-loaded

      }
    ],
  },

  {
    path: '/account',
    name: 'account',
    component: AuthLayout, // Auth layout for authenticated users
    meta: { requiresAuth: true }, // Route requires authentication
    children: [
      {
        path: '',
        name:'accountChild',
        component: HomeView, // Orders component
      },
      {
        path: '/CommandClient',
        name: 'CommandClient',
        component: CommandClient, // Lazy-loaded
      },
      {
        path: '/AccountClient',
        name: 'AccountClient',
        component: AccountClient, // Lazy-loaded
      },

    ],
  },
  //
  // // Admin route, accessible only for admin users
  // {
  //   path: '/admin-dashboard',
  //   name: 'admin-dashboard',
  //   component: AdminLayout, // Admin-specific layout
  //   meta: { requiresAuth: true, requiresRole: 'admin' }, // Only accessible for users with the 'admin' role
  //   children: [
  //     {
  //       path: '',
  //       component: AdminDashboard, // Admin dashboard component
  //     },
  //   ],
  // },
  //
  // // Artisan route, accessible only for artisan users
  // {
  //   path: '/artisan-dashboard',
  //   name: 'artisan-dashboard',
  //   component: ArtisanLayout, // Artisan layout for artisan users
  //   meta: { requiresAuth: true, requiresRole: 'artisan' }, // Only accessible for users with the 'artisan' role
  //   children: [
  //     {
  //       path: '',
  //       component: () => import('../views/ArtisanDashboard.vue'), // Artisan-specific dashboard
  //     },
  //   ],
  // },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Route guard to check authentication and role-based access
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const isAuthenticated = userStore.isAuthenticated;
  const userRoles = userStore.roles;


  // Check if the route requires authentication and the user is not authenticated
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next('/login'); // Redirect to login if not authenticated
  }

  // Check if the route requires a specific role and the user doesn't have that role
  if (to.meta.requiresRole && !userRoles.includes(to.meta.requiresRole)) {
    return next('/login'); // Redirect to login if the user doesn't have the required role
  }

  next(); // Allow navigation if checks pass
});

export default router;
