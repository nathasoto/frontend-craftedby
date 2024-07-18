<script setup>
import Navbar_home from '@/components/navbar/navbarHome.vue'
import Footer_home from '@/components/FooterHome.vue'
import ValidationCart from '@/components/ValidationCart.vue'
import AddressForm from '@/components/AddressForm.vue'


</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main>

    <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

      <h1 class="mb-4 text-3xl">Panier</h1>
        <ValidationCart />

      <div class="mt-8">
        <h1 class="mb-4 text-3xl">Adresse de livraison</h1>
        <AddressForm />
      </div>
    </div>

  </main>

  <footer>
    <Footer_home />
  </footer>
  </body>
</template>