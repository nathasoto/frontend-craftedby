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
    <button type="submit" class="mt-8 bg-blue-500 text-white py-2 px-4 rounded">Payer</button>

    <!-- Message shown when redirecting is true -->
    <div v-if="redirecting" class="bg-gray-200 p-3 rounded-lg mt-4">
      Redirection en cours...
    </div>

    <!-- Success Message -->
    <div v-if="paymentSuccess" class="bg-green-200 p-6 rounded-lg mt-4 text-center text-2xl font-bold">
      Paiement réussi !
      <br />
      Redirection vers la page d'accueil...
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Data for payment information
const cardNumber = ref('');
const expirationDate = ref('');
const cvv = ref('');

const router = useRouter();
const redirecting = ref(false);
const paymentSuccess = ref(false); // State to manage payment success message

// Function to handle form submission
const handleSubmit = () => {
  // Simulate payment logic here
  simulatePayment()
      .then(() => {
        // Clear localStorage data (if needed)
        localStorage.clear();

        // Set redirecting to true to show the redirect message
        redirecting.value = true;

        // After 2 seconds, navigate to the payment page
        setTimeout(() => {
          paymentSuccess.value = true; // Show payment success message
          redirecting.value = false; // Hide redirection message
          router.push('/'); // Redirect to Home page
        }, 2000); // Wait 2 seconds before redirecting
      })
      .catch(error => {
        console.error('Error processing payment:', error);
        // Handle payment error if needed
      });
};

// Function to simulate a successful payment (replace with actual payment logic)
const simulatePayment = () => {
  return new Promise((resolve, reject) => {
    // Simulate a delay (replace with actual payment API call)
    setTimeout(() => {
      // Simulate success (you can also simulate failure by calling reject())
      resolve();
    }, 1000); // Simulate 1 second delay
  });
};
</script>

<style scoped>
/* Additional styles for the success message */
.bg-green-200 {
  background-color: #9ae6b4; /* Green background color */
}
</style>
