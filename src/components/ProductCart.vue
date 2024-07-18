<script setup>
import axios from '@/plugins/Axios.js';
import { ref, onMounted } from 'vue';



// Defines a reactive variable for storing products
const products = ref([]);


// Function to get API products
const fetchProducts = async () => {
  try {
    const response = await axios.get('/products');
    products.value = response.data.data;
    console.log('products obtained:', products.value); // Debug log
  } catch (error) {
    console.error('Error when obtaining the products', error);
  }
};

// Calls fetchProducts when component is mounted
onMounted(fetchProducts);
</script>

<template>
  <div class="flex justify-center p-2">
    <div class="flex flex-wrap gap-4 justify-center p-2">
      <div v-for="product in products" :key="product.id" class="w-full md:w-1/3">
        <!-- Content of the product card -->
        <router-link :to="'/ProductDetail/' + product.id">
          <!-- Product card -->
          <div class="p-4 border rounded-lg shadow-md">
            <!-- Product image -->
            <img class="h-40 w-40 mx-auto my-auto p-5" :src="product.image_path" alt="Product Image" />
            <div class="p-6">
              <!-- Product title -->
              <div class="title-container w-full">
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ product.name.substring(0, 50) }}
                </h3>
              </div>
              <!-- Product description -->
              <div class="description-container h-20 w-full">
                <p class="mt-1 text-sm text-gray-500">
                  {{ product.description.substring(0, 100) }}...
                </p>
              </div>
              <!-- Product price -->
              <p class="mt-2 text-lg font-semibold text-gray-900 text-center mx-auto">{{ product.price }}$</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for the product list */
</style>

