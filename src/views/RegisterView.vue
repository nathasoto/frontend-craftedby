<script setup>
import Navbar_home from '@/components/navbar/navbarHome.vue'
import Footer_home from '@/components/FooterHome.vue'
import registerForm from '@/components/RegisterForm.vue'
</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main>
    <registerForm />
  </main>

  <footer>
    <Footer_home />
  </footer>
  </body>
</template>