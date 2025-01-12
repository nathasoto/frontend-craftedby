<script setup>

import { ref } from 'vue'
import axios from '@/plugins/Axios.js'
import ProductList from '@/components/ProductList.vue'
import Pagination from '@/components/PaginationControls.vue'
import SearchBar from '@/components/SearchBar.vue'
import CookieBanner from '@/components/CookieBanner.vue'

const products = ref([])
const searchPerformed = ref(false)
const paginatedProducts = ref([])
const currentPage = ref(1)
const itemsPerPage = 3
const paginationVisible = ref(false)
// Reactive state for cookie banner visibility
const showCookieBanner = ref(true);


const handleAcceptCookie = () => {
  showCookieBanner.value = false; // Hide the banner after user accepts the cookies
};
const handleSearch = async (query) => {
  searchPerformed.value = true
  products.value = []
  paginatedProducts.value = []
  currentPage.value = 1
  paginationVisible.value = false

  try {
    const response = await axios.get(`/products/search/${query}`)
    products.value = response.data
    if (products.value.length > 0) {
      paginationVisible.value = true
      updatePaginatedProducts()
    }
  } catch (error) {
    console.error('Erreur lors de la recherche de produits:', error)
  }
}

const updatePaginatedProducts = () => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  paginatedProducts.value = products.value.slice(startIndex, startIndex + itemsPerPage)
}

const nextPage = () => {
  if (currentPage.value * itemsPerPage < products.value.length) {
    currentPage.value++
    updatePaginatedProducts()
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    updatePaginatedProducts()
  }
}

</script>

<template>
  <main class="flex flex-col">
    <section class="flex-grow pt-8 pb-4">
      <div class="flex flex-col justify-center items-center py-8">
        <div class="font-hyperlegible font-normal text-xl text-colorText pb-8 text-center">
          <p>Notre geste pour la planète, vous montrer uniquement ce que vous cherchez</p>
        </div>

        <!-- Search bar -->
        <SearchBar @search="handleSearch" />

        <!-- Display products -->
        <ProductList :paginatedProducts="paginatedProducts" />

        <!-- Pagination, visible only if there are products -->
        <div v-if="paginationVisible">
          <Pagination
            :currentPage="currentPage"
            :itemsPerPage="itemsPerPage"
            :products="products"
            @prevPage="prevPage"
            @nextPage="nextPage"
          />
        </div>

        <!-- Message if no products are found -->
        <p v-if="searchPerformed && !products.length" class="font-hyperlegible font-normal text-lg text-colorText">
          Aucun produit trouvé.
        </p>
      </div>
    </section>

  </main>
  <!-- Cookie Banner Component -->
  <CookieBanner v-if="showCookieBanner" @accept="handleAcceptCookie" />
</template>

<style scoped>
main {
  margin-top: 2.5rem; /* Enough space to avoid covering content with the navbar */
  flex: 1; /* This ensures that the main content occupies the remaining space */
}
</style>