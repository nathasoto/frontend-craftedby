<script setup>
import { IconBrandFacebook, IconBrandInstagram, IconBrandPinterest, IconBrandYoutube } from '@tabler/icons-vue'
</script>

<template>
    <div class="w-1/2 ">
      <div class=" flex flex-col items-center">
        <!-- Section header for questions -->
        <h3 class="text-lg font-hyperlegible font-bold mb-2">DES QUESTIONS ?</h3>
        <ul class="text-gray-600 text-center">
          <!-- Frequently Asked Questions link -->
          <li class="mb-2"><a href="#" class=" font-hyperlegible custom-hover ">Foire aux questions</a></li>
          <!-- Privacy Policy link -->
          <li class="mb-2"><a href="/privacy-policy" class="font-hyperlegible custom-hover">Politique de confidentialité</a></li>
          <!-- Cookie Policy link -->
          <li class="mb-2"><a href="/customize-cookies" class="font-hyperlegible custom-hover">Politique de Cookies</a></li>
          <!-- Contact Us link -->
          <li><a href="#" class="font-hyperlegible custom-hover">Nous contacter</a></li>
        </ul>
      </div>
      <div class="flex justify-center">
        <!-- Social media icons -->
        <div class="flex space-x-4">
          <IconBrandPinterest class="social-icon  custom-hover" />
          <IconBrandYoutube class="social-icon  custom-hover" />
          <IconBrandInstagram class="social-icon  custom-hover" />
          <IconBrandFacebook class="social-icon  custom-hover" />
        </div>
      </div>
    </div>
</template>

<style scoped>
.social-icon {
  width: 2rem;
  height: 2rem;
}
.custom-hover:hover {
   color: #a80500;
 }
</style>