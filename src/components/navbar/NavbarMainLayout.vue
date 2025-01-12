<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import IconLogin from '@/components/icons/iconLogin.vue'
import IconCart from '@/components/icons/iconCart.vue'
const isMenuOpen = ref(false);

// Function to close the menu if clicked outside
const handleClickOutside = (event) => {
  const menu = document.getElementById('menu'); // Get the menu element
  const button = document.getElementById('hamburger'); // Get the hamburger button

  if (menu && !menu.contains(event.target) && !button.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

// Set up and clean up event listener
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

</script>

<template>
  <nav class="navbar bg-base-100 shadow-lg">
    <div class="flex-none mx-auto">
      <a href="/" class="font-bold text-lg text-gray-800">
        <img src="../../assets/logo.png" alt="Logo" class="w-auto h-auto max-w-xs max-h-12">
      </a>
    </div>

    <!-- Hamburger menu for mobile -->
    <div class="flex-none md:hidden">
      <button id="hamburger" @click="isMenuOpen = !isMenuOpen" class="p-2 text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Menu for desktop -->
    <div class="flex-none gap-2 hidden md:flex">
      <IconCart />
      <IconLogin />
    </div>

    <!-- Dropdown menu for mobile -->
    <div v-if="isMenuOpen" id="menu" class="md:hidden bg-white shadow-md p-4 absolute top-0 left-0 w-full">
      <div class="flex flex-col gap-2">
        <IconCart />
        <IconLogin />
      </div>
    </div>
  </nav>

</template>

<style scoped>

</style>