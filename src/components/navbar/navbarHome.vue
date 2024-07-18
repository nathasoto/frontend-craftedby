<script setup>
import IconLogin from '@/components/icons/iconLogin.vue'
import IconSearch from '@/components/icons/iconSearch.vue'
import IconCart from '@/components/icons/iconCart.vue'


</script>

<template>
  <nav class="navbar bg-base-100 shadow-lg">
    <div class="flex-none mx-auto">
      <a href="/" class="font-bold text-lg text-gray-800">
        <img src="../../assets/logo.png" alt="Logo" class="w-auto h-auto max-w-xs max-h-16">
      </a>
    </div>
    <div class="flex-none gap-2">

      <IconSearch />
      <IconCart />
      <IconLogin />

    </div>
  </nav>

</template>

<style scoped>


</style>