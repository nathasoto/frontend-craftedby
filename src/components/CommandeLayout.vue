<script setup>
import { useCartStore } from '../stores/CartStore.js'
import { useAddressStore } from '../stores/AddressStore.js'
import { useUserStore } from '../stores/UserStore.js'
import { useRouter } from 'vue-router'
import axios from '@/plugins/Axios'; // Import configured Axios instance
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const router = useRouter()
const addressStore = useAddressStore()
const cartStore = useCartStore()
const userStore = useUserStore()
const isAuthenticated =  userStore.isAuthenticated;



const confirmOrder = async () => {
  try {
    const orderData = {
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

    const response = await axios.post('/create_order', orderData);

    // alert("Commande réussie ! Votre commande a été placée avec succès.");
    Toastify({
      text: "Commande réussie ! Votre commande est en cours de préparation.",
      duration: 5000,
      close: true,
      gravity: "top",
      position: "center",
      style: {
        color: "black",
        background: "linear-gradient(to right, #FCF3EE, #FFFFFF)"
      }
    }).showToast();

    // Handle success (e.g., show confirmation message, clear cart)
    console.log('Order placed successfully:', response.data);
    cartStore.clearCart(); // Clear the cart after placing the order or implement as needed

    if (isAuthenticated) {
      await router.push('/CommandClient');
    } else {
      await router.push('/');
    }

  } catch (error) {
    console.error('Error placing order:', error);
    // Handle error (e.g., show error message)
  }
};
</script>

<template>
  <div class="flex justify-center items-center h-full mt-4">

    <div class="commande-container border border-gray-300 p-6 max-w-lg">
      <h1 class="text-3xl font-hyperlegible font-semibold mb-4">Commande</h1>

      <!-- User Information -->

      <div class="user-info mb-6">
        <div class="flex flex-col items-start" v-if="!userStore.name">
          <p class="text-colorText text-medium cursor-pointer hover:text-colorHover font-hyperlegible font-normal mb-4">
            <a href="/register" class="underline">Créer un compte</a>
<!--            ou entrer une adresse e-mail.-->
          </p>
<!--            <input-->
<!--              type="email"-->
<!--              id="email"-->
<!--              v-model="email"-->
<!--              aria-required="true"-->
<!--              required-->
<!--              class="input input-bordered w-full font-hyperlegible font-normal"-->
<!--              placeholder="Entrez votre email" />-->
        </div>


        <div class="flex items-start flex-col" v-if="userStore.name">
          <h2 class="text-xl font-hyperlegible  font-semibold mb-2"> Informations sur l'utilisateur</h2>
          <p><strong>Utilisateur:</strong> {{ userStore.name }}</p>
        </div>
      </div>

      <!-- Address Information -->
      <div class="address-info mb-6">
        <h2 class=" font-hyperlegible  text-xl font-semibold mb-2">Informations sur l'adresse</h2>
        <p><strong>Adresse :</strong> {{ addressStore.address }}</p>
        <p><strong>Ville :</strong> {{ addressStore.city }}</p>
        <p><strong>Code Postal :</strong> {{ addressStore.postalCode }}</p>
        <p><strong>Pays :</strong> {{ addressStore.country }}</p>
        <p><strong>Téléphone :</strong> {{ addressStore.phone }}</p>
      </div>

      <!-- Cart Information -->
      <div class="cart-info">
        <h2 class="text-xl font-semibold mb-2">Informations sur le panier</h2>
        <ul>
          <li v-for="item in cartStore.items" :key="item.id + '-' + item.color.id + '-' + item.size.id" class="mb-2">
            <span class="font-semibold">{{ item.title }}</span>
            <span> (Couleur: {{ item.color.name }}, Dimension: {{ item.size.name }})</span>
            --- {{ item.quantity }} x ${{ item.price }} €
          </li>
        </ul>
        <p class="font-hyperlegible font-semibold">Total des articles : {{ cartStore.totalItems }}</p>
        <p class="font-hyperlegible font-semibold">Prix total : {{ cartStore.totalPrice }} $</p>
      </div>

      <!-- Confirmation -->
      <div class="flex justify-end mt-6">
        <button @click="confirmOrder" class="btn btn-wide hover:bg-colorForm font-hyperlegible font-normal text-medium text-colorText">
          Confirmer
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
