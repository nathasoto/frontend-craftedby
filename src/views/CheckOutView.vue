<script setup>

import ValidationCart from '@/components/ValidationCart.vue'
import AddressForm from '@/components/AddressForm.vue'


</script>

<template>

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

</template>