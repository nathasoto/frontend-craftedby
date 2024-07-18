<script setup>
import Navbar_home from '@/components/navbar/navbarHome.vue'
import Footer_home from '@/components/FooterHome.vue'
import ProductDetail from '@/components/ProductDetail.vue'

</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main>
    <ProductDetail />
  </main>

  <footer>
    <Footer_home />
  </footer>
  </body>
</template>