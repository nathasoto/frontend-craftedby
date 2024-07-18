<script setup>
import Navbar_home from '@/components/navbar/navbarHome.vue'
import Footer_home from '@/components/FooterHome.vue'
import PaymentForm from '@/components/PaymentForm.vue'


const userName = localStorage.getItem('userName');

</script>

<template>

  <body class="bg-gray-100">
  <div class="min-h-screen flex flex-col justify-between">
    <!-- Header -->
    <div class="bg-blue-500 py-4 px-6">
      <h1 class="text-white text-2xl font-semibold">Payment Details</h1>
    </div>

    <!-- Main Content (You can add your form here) -->
    <div class="flex-grow flex items-center justify-center">
      <div class="text-center">

        <PaymentForm/>
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-gray-100 py-4 px-6 border-t">
      <p class="text-sm text-gray-600">Secure Payment Powered by Tailwind Bank</p>
    </div>
  </div>
  </body>
</template>

<style>

</style>