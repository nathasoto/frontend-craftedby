<template>
  <!-- Login icon -->
  <div class="dropdown dropdown-end">
    <button class="mx-2 p-2 rounded-full hover:bg-colorForm" @click="toggleHamburger">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2C3532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    </button>
    <!-- Dropdown menu with dynamic class to move it left only when active -->
    <ul :class="['dropdown-content', 'z-[1]', 'menu', 'p-2', 'shadow', 'bg-base-100', 'rounded-box', 'w-40', { 'left-0': isHamburgerActive && isMobile, 'right-0': !isHamburgerActive && !isMobile }]">
      <router-link to="/register">
        <li><a class="hover:bg-colorForm">Créer un compte</a></li>
      </router-link>
      <router-link to="/login">
        <li><a class="hover:bg-colorForm">Se connecter</a></li>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Reactive variable to control whether the hamburger menu is active
const isHamburgerActive = ref(false);

// Reactive variable to control whether we are in mobile view
const isMobile = ref(window.innerWidth <= 768); // Adjust the value 768 based on the screen size you want for "mobile"

// Function to toggle the hamburger menu state
function toggleHamburger() {
  isHamburgerActive.value = !isHamburgerActive.value;
}

// Function to check and update if the view is mobile based on the window size
function checkMobileView() {
  isMobile.value = window.innerWidth <= 768; // Adjust the value 768 based on your definition of "mobile"
}

// Detect changes in window size
onMounted(() => {
  window.addEventListener('resize', checkMobileView); // Add event listener to detect resizing
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobileView); // Clean up the event listener when the component is unmounted
});
</script>

<style scoped>
/* Style for the menu when it shows in hamburger mode (left side) */
.left-0 {
  left: 0; /* This positions the menu to the left when active */
}

/* Style for the menu in normal mode (right side) */
.right-0 {
  right: 0; /* This positions the menu to the right when not in hamburger mode */
}
</style>
