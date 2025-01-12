<script setup>
// Importing necessary Vue functions
import { ref, defineEmits } from 'vue'
// Declaring a reactive reference for the search query input
const searchQuery = ref('')
// Defining the 'search' event that will be emitted when the search is triggered
const emit = defineEmits(['search'])

// Function to handle the search action
const handleSearch = () => {
  // Emit the 'search' event with the value of the search query
  // This allows the parent component to listen for this event and act on it
  emit('search', searchQuery.value)
}
</script>

<template>
  <!-- Main container for the search component -->
  <div class="w-full max-w-lg px-4">
    <!-- Hidden label for accessibility, helps screen readers to understand the purpose of the input -->
    <!-- The 'sr-only' class hides the label visually, but it is still read by screen readers -->
    <label for="searchInput" class="sr-only">Entrez le produit</label>

    <!-- Input field for search query, bound to 'searchQuery' using v-model -->
    <input
      id="searchInput"
      v-model="searchQuery"
      type="text"
      placeholder="Entrez le nom de produit"
      class="input input-bordered w-full max-w-lg font-hyperlegible font-normal text-medium text-colorText"
      aria-label="Champ de recherche de produit"
      aria-required="true"
      @keyup.enter="handleSearch"
    />

    <!-- Container for the search button -->
    <div class="mt-4 flex justify-center">
      <!-- Search button that triggers the search when clicked -->
      <button
        @click="handleSearch"
        class="btn btn-wide hover:bg-colorForm font-hyperlegible font-normal text-medium text-colorText"
        aria-label="Chercher des produits "
      >
        Chercher
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>