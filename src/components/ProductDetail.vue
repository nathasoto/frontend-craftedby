<template>
  <!-- Main container for the product details page -->
  <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <!-- Left side: Product image -->
        <div class="p-4">
          <img :src="product.image_path" alt="Product Image" class="h-96 object-contain" v-if="product">
        </div>
        <!-- Right side: Product details -->
        <div class="p-4">
          <h3 class="text-lg font-semibold leading-6 text-gray-900" v-if="product">{{ product.name }}</h3>
          <p class="text-lg font-semibold text-gray-900 mb-4" v-if="product">{{ product.price }}$</p>
          <!-- Quantity selection -->
          <div class="flex items-center mb-4">
            <label for="quantity" class="mr-2">Quantity:</label>
            <div class="flex items-center">
              <!-- Button to decrement quantity -->
              <button @click="decrementQuantity" class="px-2 py-1 bg-gray-200 text-gray-700 rounded-l-md focus:outline-none">
                -
              </button>
              <!-- Quantity input field (read-only) -->
              <input type="text" id="quantity" :value="quantity" class="w-16 border-gray-300 rounded-none text-center focus:ring-blue-500 focus:border-blue-500" readonly>
              <!-- Button to increment quantity -->
              <button @click="incrementQuantity" class="px-2 py-1 bg-gray-200 text-gray-700 rounded-r-md focus:outline-none">
                +
              </button>
            </div>
          </div>

          <!-- Colors section -->
          <div class="mr-2">
            <dt class="text-sm font-medium text-gray-500 sm:w-1/3">Color</dt>
            <dd class="mt-1 sm:w-2/3" v-if="product">
              <div>
                <select v-model="selectedColor" id="color" class="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option v-for="color in product.colors" :key="color.id" :value="{ id: color.id, name: color.name }">{{ color.name }}</option>
                </select>
              </div>
            </dd>
          </div>

          <!-- Sizes section -->
          <div class="mr-2">
            <dt class="text-sm font-medium text-gray-500 sm:w-1/3">Sizes</dt>
            <dd class="mt-1 sm:w-2/3" v-if="product">
              <div>
                <select v-model="selectedSize" id="size" class="block w-full px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option v-for="size in product.sizes" :key="size.id" :value="{ id: size.id, name: size.name }">{{ size.name }}</option>
                </select>
              </div>
            </dd>
          </div>

          <!-- Button to add the product to the cart -->
          <div class="flex justify-end">
            <button @click="addToCart" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
         </div>

        </div>
      </div>
      <!-- Product description section -->
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="sm:flex sm:space-x-4 sm:px-6 sm:py-4">
            <dt class="text-sm font-medium text-gray-500 sm:w-1/3">Creation History</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:w-2/3" v-if="product">{{ product.history }}</dd>
          </div>

        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from '@/plugins/Axios.js';
import { useRoute } from 'vue-router';
import { useCartStore } from '../stores/CartStore.js';
import { ref, onMounted } from 'vue';

const route = useRoute();
const productId = route.params.id;

const product = ref(null);
const quantity = ref(1);
const selectedColor = ref(null);
const selectedSize = ref(null);

const cartStore = useCartStore();

const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  cartStore.addToCart({
    id: product.value.id,
    title: product.value.name,
    price: product.value.price,
    quantity: quantity.value,
    image: product.value.image_path,
    color : selectedColor.value,
    size: selectedSize.value

  });
};

const fetchProduct = async () => {
  try {
    const response = await axios.get(`/products/${productId}`);
    product.value = response.data.data;
    console.log('Product obtained:', product.value);
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};

onMounted(fetchProduct);
</script>

<style scoped>
/* Scoped styles for the product details page */
</style>
