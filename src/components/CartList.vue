<script setup>
import { useCartStore } from '../stores/CartStore.js';
import { useRouter } from 'vue-router';
import { computed } from 'vue'
import { useUserStore } from '../stores/UserStore.js';

const cartStore = useCartStore();
const router = useRouter();
const user = useUserStore()
const isAuthenticated = computed(() => user.isAuthenticated)


const redirectToHome = computed(() => {
  return isAuthenticated.value ? '/account' : '/'
})
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
    <h2 class="text-2xl font-hyperlegible font-bold mb-6">Panier</h2>
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
            <h3 class="text-lg font-hyperlegible font-normal">{{ item.title }}</h3>
            <p class="font-hyperlegible font-bold  text-colorText">{{ item.price }} € x {{ item.quantity }} </p>
            <p class="font-hyperlegible font-normal text-medium text-colorText">Couleur: {{ item.color.name}}</p>
            <p class="font-hyperlegible font-normal text-medium text-colorText">Dimensions: {{ item.size.name }}</p>
          </div>
          <!-- Button to remove the product from the cart -->
          <div class="flex flex-col justify-between">
            <button @click="removeFromCart(item.id)" class="font-hyperlegible font-normal text-medium text-red-600 hover:text-red-800 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=black stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 inline">
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </button>
          </div>
        </li>
      </ul>
      <!-- Cart total and action buttons -->
      <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
        <p class="text-lg font-hyperlegible font-bold text-large text-colorText ">Total: {{ cartStore.totalPrice }}€</p>
        <div class="flex justify-end mt-4">

          <button @click="clearCart" class="font-hyperlegible  bg-customGray  text-black font-bold py-2 px-4 rounded mr-2">
            Vider le Panier
          </button>

          <button @click="checkout" class="font-hyperlegible  bg-colorForm  text-black font-bold py-2 px-4 rounded mr-2">
            Passer à la caisse
          </button>
          <!-- Button to continue shopping -->
          <router-link :to="redirectToHome">
            <button type="submit" class="font-hyperlegible bg-customGreen text-black  font-bold py-2 px-4 rounded mr-2">
              Continuer vos achats
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- Message when the cart is empty -->
    <div v-else class="font-hyperlegible bg-white shadow overflow-hidden sm:rounded-lg p-4">
      <p class="text-lg">Votre panier est vide.</p>
    </div>
  </div>
</template>

<style scoped>


</style>
