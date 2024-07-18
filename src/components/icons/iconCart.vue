<script setup>
import { useCartStore } from '@/stores/CartStore.js';
import { computed } from 'vue';


// Initialize the cart store
const cartStore = useCartStore();
// Compute the total number of items in the cart
const totalItems = computed(() => cartStore.totalItems);

</script>

<template>
  <!-- Ícon Cart -->
  <router-link to="/cart" class="relative">
    <button class="mx-2 p-2 rounded-full hover:bg-colorForm relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2C3532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
      <span v-if="totalItems > 0" class="absolute top-1 right-1 -mt-2 -mr-2 w-5 h-5 flex items-center justify-center bg-red-600 rounded-full text-white text-xs font-bold">
      {{ totalItems }}
    </span>
    </button>
  </router-link>

</template>

<style scoped>

</style>