<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Data for payment information
const cardNumber = ref('');
const expirationDate = ref('');
const cvv = ref('');

const router = useRouter();


// Function to handle form submission
const handleSubmit = () => {
  router.push('/Command');
};


</script>
<template>
  <!-- Form for payment information -->
  <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded">
    <div class="mb-4">
      <label for="cardNumber" class="block text-gray-700">Card Number</label>
      <input type="text" id="cardNumber" v-model="cardNumber" required pattern="[0-9]{16}"
             class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
             placeholder="1234 5678 9012 3456" />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="expirationDate" class="block text-gray-700">Expiration Date</label>
        <input type="text" id="expirationDate" v-model="expirationDate" required pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
               class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
               placeholder="MM/YY" />
      </div>
      <div>
        <label for="cvv" class="block text-gray-700">CVV</label>
        <input type="text" id="cvv" v-model="cvv" required pattern="[0-9]{3,4}"
               class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
               placeholder="123" />
      </div>
    </div>
    <button type="submit" class="mt-8 bg-customGreen text-black py-2 px-4 rounded">Continuer</button>



  </form>
</template>



<style scoped>
/* Additional styles for the success message */
.bg-green-200 {
  background-color: #9ae6b4; /* Green background color */
}
</style>
