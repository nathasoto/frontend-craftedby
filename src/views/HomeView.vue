<script setup lang="ts">

import Footer_home from '@/components/FooterHome.vue'
import NavbarHome from '@/components/navbar/navbarHome.vue'
import Product from '@/components/ProductCart.vue'


</script>

<template>
  <body>
    <header><NavbarHome /></header>
    <main>
      <Product />
    </main>

    <footer><Footer_home /></footer>
  </body>
</template>

<style>
.PopoverTrigger {
  background-color: white;
  border-radius: 4px;
}

.PopoverContent {
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  background-color: white;
}

.PopoverArrow {
  background-color: white;
}
</style>