<script setup>
import Navbar_home from '@/components/navbar/navbarHome.vue'
import Footer_home from '@/components/FooterHome.vue'
import LoginForm from '@/components/LoginForm.vue'
</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main>
  <LoginForm />
  </main>

  <footer>
    <Footer_home />
  </footer>
  </body>
</template>