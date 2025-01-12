<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/UserStore.js'
import { useRouter } from 'vue-router'

// Reactive variables for email and password
const email = ref('')
const password = ref('')
// const successMessage = ref('')
const errorMessage = ref('')

// const errorMessages = {
//   en: {
//     401: 'Invalid email or password. Please try again.',
//     0: 'Network error. Please check your internet connection and try again.',
//     default: 'An unexpected error occurred. Please try again later.',
//   },
//   fr: {
//     401: "E-mail ou mot de passe invalide. Veuillez réessayer.",
//     0: "Erreur de réseau. Veuillez vérifier votre connexion Internet et réessayer.",
//     default: "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
//   },
// };

const userStore = useUserStore()
const router = useRouter()


// const getUserLanguage = () => {
//   const lang = navigator.language.split('-')[0];
//   return lang in errorMessages ? lang : 'fr';
// };


/**
 * Handles the login process by attempting to log the user in with the provided email and password.
 * If the login is successful, the user is redirected to their account page.
 * If the login fails, an appropriate error message is displayed based on the type of error.
 * @async
 * @function handleLogin
 * @returns {Promise<void>} Returns a promise that resolves when the login process is completed.
 */
const handleLogin = async () => {
  try {
    // Attempt login using provided email and password
    await userStore.login(email.value, password.value);

    // Display success message and redirect user to account page
    // successMessage.value = 'Connexion réussie ! Redirection vers votre compte...';
    await router.push('/account');

  } catch (error) {
    // Handle error based on the error type
    if (error && error.message) {
      if (error.status === 401) {
        errorMessage.value = 'Email ou mot de passe invalide. Veuillez réessayer.';
      }
      else if (error.status === 0) {
        errorMessage.value ='Erreur de réseau. Veuillez vérifier votre connexion Internet et réessayer.';
      }
      else {
        errorMessage.value = 'Une erreur inattendue est survenue. Veuillez réessayer plus tard.';
      }
    }
    else {
      // Display a generic error message for unexpected errors
      errorMessage.value = 'Une erreur inattendue est survenue. Veuillez réessayer plus tard.';
    }
  }
};

const isLoading = computed(() => userStore.isLoading)

</script>
<template>
    <div class="flex items-center justify-center min-h-screen bg-base-200">
      <!-- Card Component from DaisyUI -->
      <div class="card w-full max-w-sm md:max-w-md lg:max-w-lg bg-white shadow-lg rounded-lg p-6">
<!--        &lt;!&ndash; Success Message &ndash;&gt;-->
<!--        <div v-if="successMessage" class="alert alert-success mb-4">-->
<!--          <span>{{ successMessage }}</span>-->
<!--        </div>-->
        <!-- Loading Message -->
        <div v-if="isLoading" class="alert alert-info mb-4 bg-customGreen">
          <span>Chargement...</span>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin">
          <!-- Email Field -->
          <div class="form-control mb-4">
            <label for="email" class="label font-hyperlegible font-normal">
              <span class="label-text">Adresse Email</span>
            </label>
            <input
              type="email"
              id="email"
              v-model="email"
              aria-required="true"
              required
              class="input input-bordered w-full font-hyperlegible font-normal"
              placeholder="Entrez votre email" />
          </div>

          <!-- Password Field -->
          <div class="form-control mb-4">
            <label for="password" class="label">
              <span class="label-text font-hyperlegible font-normal">Mot de Passe</span>
            </label>
            <input
              type="password"
              id="password"
              v-model="password"
              aria-required="true"
              required
              class="input input-bordered w-full font-hyperlegible font-normal"
              placeholder="Entrez votre mot de passe" />
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="alert alert-error mb-4 font-hyperlegible font-normal">
            <span>{{ errorMessage }}</span>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="btn hover:bg-colorForm font-hyperlegible font-normal text-medium text-colorText w-full">
            Se connecter
          </button>
        </form>
      </div>
    </div>

</template>


<style scoped>

</style>
