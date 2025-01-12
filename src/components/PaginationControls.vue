<script setup>
defineProps({
  currentPage: Number,   // The current page number (used for pagination).
  itemsPerPage: Number,  // The number of items to display per page.
  products: Array        // The list of products to paginate.
})
const emit = defineEmits(['prevPage', 'nextPage'])

const prevPage = () => {
  emit('prevPage')
}

const nextPage = () => {
  emit('nextPage')
}
</script>
<template>
  <div class="flex justify-between mt-4 text-lg font-bold gap-52">
    <button
      class="btn btn-sm"
      :disabled="currentPage === 1"
      @click="prevPage"
    >
      &lt;
    </button>
    <button
      class="btn btn-sm"
      :disabled="currentPage * itemsPerPage >= products.length"
      @click="nextPage"
    >
      &gt;
    </button>
  </div>
</template>

<style scoped>

</style>