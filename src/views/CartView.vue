<script setup>
import Navbar_home from '@/components/navbar/navbarHome.vue'
import Footer_home from '@/components/FooterHome.vue'
import CartList from '@/components/CartList.vue'
</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main>
    <CartList />
  </main>

  <footer>
    <Footer_home />
  </footer>
  </body>
</template>