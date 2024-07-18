<script setup>
import { ref } from 'vue';

// A ref to control the visibility of the search bar
const showSearch = ref(false);

// Function to toggle the visibility of the search bar and focus on the input field
function toggleSearch() {
  showSearch.value = !showSearch.value;
  if (showSearch.value) {
    setTimeout(() => {
      const inputElement = document.getElementById('searchInput');
      if (inputElement) {
        inputElement.focus();
      }
    }, 0);
  }
}

// Placeholder function to handle search input
function handleSearchInput(event) {
  // Handle search input here
  console.log(event.target.value);
}
</script>

<template>
  <div class="flex items-center space-x-2">
    <!-- Search icon -->
    <button class="p-2 rounded-full hover:bg-colorForm" @click="toggleSearch">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2C3532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-search">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
    </button>

    <!-- Search bar -->
    <div v-if="showSearch" class="relative">
      <input id="searchInput" type="text" placeholder="Search..." class="px-4 py-2 border border-gray-300 rounded-md text-sm" @input="handleSearchInput">
    </div>
  </div>
</template>

<style scoped>

</style>
