<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/UserStore.js';

// Define reactive variables for form fields
const prenom = ref('');
const nom = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const isRegistered = ref(false);
const errorMessage = ref('');
const isArtisan = ref(false); // Checkbox state for Artisan role

const router = useRouter();
const userStore = useUserStore();

// Function to handle the registration form submission
const handleRegister = async () => {
  try {
    const role = isArtisan.value ? 'artisan' : ' '; // Set role based on checkbox

    await userStore.register(nom.value,prenom.value, email.value, password.value, role);

    isRegistered.value = true;
    setTimeout(() => {
      router.push('/login');
    }, 2000); // 2-second delay before redirection
  } catch (error) {
    errorMessage.value = error.response.data.message || 'Registration failed.';
    console.error('Registration Error:', error);
  }
};


</script>

<template>
  <!-- Main container for the registration page -->
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <!-- Registration form -->
      <form @submit.prevent="handleRegister" v-if="!isRegistered">
        <div class="mb-4">
          <label for="prenom" class="block text-gray-700">First Name</label>
          <input type="text" id="prenom" v-model="prenom" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="nom" class="block text-gray-700">Last Name</label>
          <input type="text" id="nom" v-model="nom" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input type="email" id="email" v-model="email" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Password</label>
          <input type="password" id="password" v-model="password" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="confirmPassword" class="block text-gray-700">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required class="w-full px-3 py-2 border rounded" />
        </div>
        <!-- Role selection as optional checkbox -->
        <div class="mb-4">
          <input type="checkbox" id="artisanCheckbox" v-model="isArtisan" class="mr-2">
          <label for="artisanCheckbox" class="text-gray-700">Are you an artisan?</label>
        </div>
        <!-- Display error message if there is any -->
        <div v-if="errorMessage" class="mb-4 text-red-500">
          {{ errorMessage }}
        </div>
        <!-- Submit button -->
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">Create Account</button>
      </form>
      <!-- Success message displayed after registration -->
      <div v-else class="text-center">
        <p class="text-xl text-green-500">Account created successfully! Redirecting to the login page...</p>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Scoped styles for the registration page */
</style>
