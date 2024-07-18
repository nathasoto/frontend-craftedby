<script setup>
import { useCartStore } from '../stores/CartStore.js';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();
const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};

const clearCart = () => {
  cartStore.clearCart();
};

const checkout = () => {

  router.push('/checkout');
};


</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold mb-6">Your Cart</h2>
    <div v-if="cartStore.items.length > 0" class="bg-white shadow overflow-hidden sm:rounded-lg">
      <!-- List of products in the cart -->
      <ul class="divide-y divide-gray-200">
        <li v-for="item in cartStore.items" :key="item.id + item.color + item.size" class="py-4 flex items-center">
          <!-- Product image -->
          <div class="h-20 w-20 rounded-full overflow-hidden flex items-center justify-center">
            <img :src="item.image" alt="Product Image" class="h-12 w-12 object-cover">
          </div>
          <!-- Product details -->
          <div class="flex-1 ml-4">
            <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            <p class="text-gray-500">{{ item.price }}$ x {{ item.quantity }} </p>
            <p class="text-gray-500">Color: {{ item.color.name}}</p>
            <p class="text-gray-500">Size: {{ item.size.name }}</p>
          </div>
          <!-- Button to remove the product from the cart -->
          <div class="flex flex-col justify-between">
            <button @click="removeFromCart(item.id)" class="text-red-600 hover:text-red-800">Remove</button>
          </div>
        </li>
      </ul>
      <!-- Cart total and action buttons -->
      <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
        <p class="text-lg font-semibold">Total: {{ cartStore.totalPrice }}$</p>
        <div class="flex justify-end mt-4">
          <button @click="clearCart" class="bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
            Vider le Panier
          </button>
          <button @click="checkout" class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Passer à la caisse
          </button>
          <!-- Button to continue shopping -->
          <router-link to="/e-boutique">
            <button type="submit" class="bg-custom-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Continuer vos achats</button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Message when the cart is empty -->
    <div v-else class="bg-white shadow overflow-hidden sm:rounded-lg p-4">
      <p class="text-lg">Votre panier est vide.</p>
    </div>
  </div>
</template>

<style scoped>

.bg-custom-color {
  background-color: #3B5249;
}

</style>
