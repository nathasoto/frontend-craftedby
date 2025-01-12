<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/UserStore.js';
import DOMPurify from 'dompurify';

// Define reactive variables for form fields
const lastName = ref('');
const name= ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const isRegistered = ref(false);
const successMessage = ref('');
const errorMessage = ref('');
const isArtisan = ref(false); // Checkbox state for Artisan role

const router = useRouter();
const userStore = useUserStore();


const sanitizeInput = (input) => {
  return DOMPurify.sanitize(input);
};

/**
 * Handles the registration process by sanitizing user inputs,
 * attempting to register the user via the store, and managing
 * the success or error messages accordingly.
 *
 * @async
 * @function handleRegister
 * @throws {Error} Will throw an error if the registration fails.
 *
 * @description
 * This function performs the following tasks:
 * - Sanitizes the input fields (name, last name, email, password) to prevent XSS attacks.
 * - Calls the `register` action from the `userStore` to attempt the registration.
 * - Displays a success message upon successful registration and redirects the user to the login page after a short delay.
 * - Handles errors based on the error code (e.g., email already taken or unexpected errors).
 *
 * @returns {void}
 */

const handleRegister = async () => {

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Les mots de passe ne correspondent pas.';
    return;
  }
  try {

    const sanitizedName = sanitizeInput(name.value);
    const sanitizedLastName = sanitizeInput(lastName.value);
    const sanitizedEmail = sanitizeInput(email.value);
    const sanitizedPassword = sanitizeInput(password.value);
    const role = isArtisan.value ? 'artisan' : ' '; // Set role based on checkbox

    // Attempt to register the user
    await userStore.register(sanitizedName, sanitizedLastName, sanitizedEmail, sanitizedPassword, role);

    isRegistered.value = true;

    // Show success message
    successMessage.value = 'Compte créé avec succès ! Redirection vers la page de connexion ...';
    // After a 2-second delay, redirect to login page
    setTimeout(() => {
      router.push('/login');
    }, 5000);

  } catch (error) {
    if (error && error.message) {
      if (error.status === 422){
        errorMessage.value = 'The email has already been taken.';
      }
      else {
        errorMessage.value = "An unexpected error occurred. Please try again later.";
      }
    }
    else {
      // Display a generic error message for unexpected errors
      errorMessage.value = "An unexpected error occurred. Please try again later.";
    }
  }
};


</script>

<template>
  <!-- Main container for the registration page -->
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">

      <!-- Display success message when account is created -->
      <div v-if="successMessage" class="mb-4 text-colorLogo">
        {{ successMessage }}
      </div>

      <!-- Registration form -->
      <form @submit.prevent="handleRegister" v-if="!isRegistered">
        <div class="mb-4">
          <label for="lastName" class="block text-gray-700">Nom</label>
          <input
            type="text"
            id="lastName"
            aria-required="true"
            v-model="lastName"
            required

            class="input input-bordered w-full font-hyperlegible font-normal"
            placeholder="Entrez votre nom"
          />
        </div>
        <div class="mb-4">
          <label for="nom" class="block text-gray-700">Prenom</label>
          <input
            type="text"
            id="name."
            v-model="name"
            required
            class="input input-bordered w-full font-hyperlegible font-normal"
            placeholder="Entrez votre prenom"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="input input-bordered w-full font-hyperlegible font-normal"
            placeholder="Entrez votre email"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Mot de passe</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="input input-bordered w-full font-hyperlegible font-normal"
            placeholder="Entrez votre mot de passe"
          />
        </div>
        <p v-if="password && password.length < 8" class="text-red-500 text-sm mt-2">
          La mot de passe doit contenir au moins 8 caractères.
        </p>
        <div class="mb-4">
          <label for="confirmPassword" class="block text-gray-700">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            class="input input-bordered w-full font-hyperlegible font-normal"
            placeholder="Confirme le mot de passe"
          />
        </div>

        <!-- Role selection as optional checkbox -->
        <div class="mb-4">
          <input type="checkbox" id="artisanCheckbox" v-model="isArtisan" class="mr-2">
          <label for="artisanCheckbox" class="text-gray-700">Êtes-vous un artisan ?</label>
        </div>

        <!-- Submit button -->
        <button type="submit" class=" btn btn-wide hover:bg-colorForm font-hyperlegible font-normal text-medium text-colorText ">Créer un compte</button>
      </form>

      <!-- Error Messages -->
      <div v-if="errorMessage">{{ errorMessage }}</div>
    </div>
  </div>
</template>


<style scoped>

</style>
