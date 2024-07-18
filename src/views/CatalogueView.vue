<script setup>
import Navbar_home from '@/components/navbar/navbarHome.vue'
import Footer_home from '@/components/FooterHome.vue'
import Product from '@/components/ProductCart.vue'

</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main>
    <Product />
  </main>


  <footer>
    <Footer_home />
  </footer>
  </body>
</template>