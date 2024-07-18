<template>
  <!-- Navigation bar -->
  <nav class="bg-custom-color p-4 flex justify-between items-center">
    <!-- Logo section -->
    <div class="flex-grow flex justify-center">
      <a href="/">
        <!-- Company logo -->
        <img src="@/assets/logo.png" alt="Logo">
      </a>
    </div>
    <!-- Navigation buttons -->
    <div class="flex space-x-4">
      <!-- Search button -->
      <button class="text-gray-600 hover:text-red-600 focus:outline-none">
        <IconSearch class="w-6 h-6"/>
      </button>
      <!-- Login button -->
      <router-link to="/login" class="text-gray-600 hover:text-red-600 focus:outline-none">
        <button>
          <IconUser class="w-6 h-6" />
        </button>
      </router-link>
      <!-- Cart button -->
      <router-link to="/cart" class="relative text-gray-600 hover:text-red-600 focus:outline-none">
        <button class="text-gray-600 hover:text-red-600 focus:outline-none">
          <IconShoppingCart class="w-6 h-6" />
          <!-- Cart items count badge -->
          <span v-if="totalItems > 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {{ totalItems }}
          </span>
        </button>
      </router-link>
    </div>
  </nav>

  <!-- Secondary navigation bar -->
  <nav class="bg-custom-color p-5 flex flex-col md:flex-row justify-center md:space-x-60">
    <!-- Link to e-boutique page -->
    <a href="/e-boutique" class="text-lg text-gray-600 hover:text-red-600 font-sacramento">e-boutique</a>
    <!-- Link to blog artisan page -->
    <a href="/blog-artisan" class="text-lg text-gray-600 hover:text-red-600 font-sacramento">blog artisan</a>
  </nav>
</template>

<script setup>
import { useCartStore } from '../stores/CartStore.js';
import { IconSearch, IconUser, IconShoppingCart } from '@tabler/icons-vue';
import { computed } from 'vue';

// Initialize the cart store
const cartStore = useCartStore();
// Compute the total number of items in the cart
const totalItems = computed(() => cartStore.totalItems);
</script>

<style scoped>
/* Custom background color */
.bg-custom-color {
  background-color: #FCFCFC;
}
/* Custom font style */
.font-sacramento {
  font-family: 'Sacramento', cursive;
  font-size: 35px;
}
/* Styles for the logo image */
img {
  width: 500px;
  height: 100px;
}
</style>
