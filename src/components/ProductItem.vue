<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  product: Object
})
const goToProductDetail = (id) => {
  router.push(`/productDetail/${id}`);

}
</script>

<template>
  <li
    class="p-4 flex flex-col items-center justify-between h-56 text-center"
    @click="goToProductDetail(product.id)"
  >
  <h3 class="font-hyperlegible font-bold text-colorText text-lg h-12 flex items-center justify-center">
    {{ product.name }}
  </h3>
  <img
    :src="product.image_path"
    alt="Image of {{ product.name }}"
    class="w-40 h-40 object-cover rounded-md"
  />
  <p class="font-hyperlegible font-bold text-colorText text-sm mt-2">
    {{ product.price }} €
  </p>
  </li>
</template>

<style scoped>

</style>