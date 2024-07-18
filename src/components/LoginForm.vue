<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <!-- Login form -->
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <!-- Email label and input -->
          <label for="email" class="block text-gray-700">Email</label>
          <input type="text" id="email" v-model="email" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <!-- Password label and input -->
          <label for="password" class="block text-gray-700">Password</label>
          <input type="password" id="password" v-model="password" required class="w-full px-3 py-2 border rounded" />
        </div>
        <!-- Login submit button -->
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/UserStore.js';
import { useRouter } from 'vue-router';

// Reactive variables for email and password
const email = ref('');
const password = ref('');

const userStore = useUserStore();
const router = useRouter();

// Function to handle the login process
const handleLogin = async () => {
  try {
    await userStore.login(email.value, password.value);
    router.push('/account');
    console.log('Successful login. Redirecting to account page...');
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
};
</script>

<style scoped>
/* Styles for the login page */
</style>
