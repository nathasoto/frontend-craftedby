<script setup>
import ProductItem from './ProductItem.vue'

defineProps({
  paginatedProducts: Array
})

</script>

<template>
  <!-- Only display this section if the 'paginatedProducts' array has any products -->
  <div v-if="paginatedProducts.length" class="mt-8 w-full max-w-lg">
    <!-- Title of the search results section -->
    <h2 class="text-xl font-semibold mb-4"> Résultats de recherche :</h2>
    <!-- List of products displayed in a grid layout -->
    <ul class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
      <!-- Iterate over each product in the 'paginatedProducts' array and render a ProductItem component for each -->
      <!-- The 'product' object is passed to the ProductItem component as a prop -->
      <ProductItem
        v-for="(product, index) in paginatedProducts"
        :key="index"
        :product="product"
      />
    </ul>
  </div>

</template>

<style scoped>

</style>