<script setup>
import { useCartStore } from '../stores/CartStore.js';


const cartStore = useCartStore();


</script>

<template>

    <!-- Cart items -->
    <div v-if="cartStore.items.length > 0" class="bg-white shadow overflow-hidden sm:rounded-lg">
      <!-- List of products in the cart -->
      <ul class="divide-y divide-gray-200">
        <li v-for="item in cartStore.items" :key="item.id" class="py-4 flex items-center">
          <!-- Product image -->
          <div class="h-20 w-20 rounded-full overflow-hidden flex items-center justify-center">
            <img :src="item.image" alt="Product Image" class="h-12 w-12 object-cover">
          </div>
          <!-- Product details -->
          <div class="flex-1 ml-4 text-right">
            <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            <p class="text-gray-500">{{ item.price }}$ x {{ item.quantity }}</p>
            <p class="text-gray-500">Color : {{ item.color.name }}</p>
            <p class="text-gray-500"> Size :{{ item.size.name }}</p>
          </div>
        </li>
      </ul>
      <!-- Cart total -->
      <div class="border-t border-gray-200 px-4 py-4 sm:px-6 flex justify-between items-center">
        <p class="text-lg font-semibold">Total:</p>
        <p class="text-lg font-semibold">{{ cartStore.totalPrice }}$</p>
      </div>


  </div>
</template>

<style scoped>

</style>