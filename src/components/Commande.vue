<template>
  <div class="flex justify-center items-center h-full">
    <div class="commande-container border border-gray-300 p-6 max-w-lg">
      <h1 class="text-3xl font-semibold mb-4">Commande</h1>

      <!-- User Information -->
      <div class="user-info mb-6">
        <div class="flex items-center" v-if="userStore.username === null">
          <button @click="redirectToCreateAccount" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Créer un compte</button>
        </div>
        <div class="flex items-start flex-col" v-if="userStore.username !== null">
          <h2 class="text-xl font-semibold mb-2">User Information</h2>
          <p><strong>User:</strong> {{ userStore.username }}</p>
        </div>
      </div>

      <!-- Address Information -->
      <div class="address-info mb-6">
        <h2 class="text-xl font-semibold mb-2">Address Information</h2>
        <p><strong>Address:</strong> {{ addressStore.address }}</p>
        <p><strong>City:</strong> {{ addressStore.city }}</p>
        <p><strong>Postal Code:</strong> {{ addressStore.postalCode }}</p>
        <p><strong>Country:</strong> {{ addressStore.country }}</p>
        <p><strong>Phone:</strong> {{ addressStore.phone }}</p>
      </div>

      <!-- Cart Information -->
      <div class="cart-info">
        <h2 class="text-xl font-semibold mb-2">Cart Information</h2>
        <ul>
          <li v-for="item in cartStore.items" :key="item.id + '-' + item.color.id + '-' + item.size.id" class="mb-2">
            <span class="font-semibold">{{ item.title }}</span>
            <span> (Color: {{ item.color.name }}, Size: {{ item.size.name }})</span>
            --- {{ item.quantity }} x ${{ item.price }}
          </li>
        </ul>
        <p class="font-semibold">Total Items: {{ cartStore.totalItems }}</p>
        <p class="font-semibold">Total Price: ${{ cartStore.totalPrice }}</p>
      </div>

      <!-- Confirmation and Payment Button -->
      <div class="flex justify-end mt-6">
        <button @click="confirmOrder" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2">
          Confirm  and pay Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/CartStore.js'
import { useAddressStore } from '../stores/AddressStore.js'
import { useUserStore } from '../stores/UserStore.js'
import { useRouter } from 'vue-router'
import axios from '@/plugins/Axios'; // Import configured Axios instance

const router = useRouter()
const addressStore = useAddressStore()
const cartStore = useCartStore()
const userStore = useUserStore()

const redirectToCreateAccount = () => {
  router.push('/register');
};

const confirmOrder = async () => {
  try {
    const orderData = {
      total: cartStore.totalPrice,
      shipping_address: `${addressStore.address}, ${addressStore.city}, ${addressStore.postalCode}, ${addressStore.country}`,
      mobile_phone: addressStore.phone,
      status: 'pending',
      products: cartStore.items.map(item => ({
        id: item.id,
        quantity: item.quantity,
        unit_price: item.price,
        color_id: item.color.id,
        size_id: item.size.id
      }))
    };

    // Assuming you have axios or another HTTP client configured
    const response = await axios.post('/create_order', orderData);

    // Handle success (e.g., show confirmation message, clear cart)
    console.log('Order placed successfully:', response.data);
    cartStore.clearCart(); // Clear the cart after placing the order or implement as needed

    // Redirect to a confirmation page or another route
    router.push('/payment');

  } catch (error) {
    console.error('Error placing order:', error);
    // Handle error (e.g., show error message)
  }
};
</script>

<style scoped>
/* Add scoped styles here if needed */
</style>
