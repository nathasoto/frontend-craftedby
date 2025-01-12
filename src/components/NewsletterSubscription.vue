<script setup>

</script>

<template>
  <div class="w-1/2 ">
    <div class="bg-colorForm  flex flex-col pl-4 p-3 rounded-lg  mr-3.5">
      <h3 class="font-hyperlegible text-xl font-bold mb-3">Newsletter</h3>
      <h5 class="font-hyperlegible mb-1">Subscribe to our newsletter and receive our latest news and offers!*</h5>
      <form @submit.prevent="submitNewsletter" class="font-hyperlegible flex flex-col">
        <div class="flex flex-wrap items-center">
          <!-- Email input for newsletter subscription -->
          <input type="email" placeholder="Votre adresse e-mail" class="text-xxs flex-grow mb-4 w-full sm:w-auto" required>
        </div>
        <div class="flex justify-end">
          <!-- Submit button for newsletter subscription -->
          <button class="font-hyperlegible btn btn-ls sm:btn-sm md:btn-md lg:btn-s hover:bg-white">Inscrivez-moi</button>
        </div>
        <p class="font-hyperlegible text-xs">*Un seul e-mail sera envoyé chaque mois.</p>
      </form>
    </div>
  </div>

</template>

<style scoped>

</style>