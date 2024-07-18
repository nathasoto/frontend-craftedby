<script setup>
import { IconBrandPinterest } from '@tabler/icons-vue';
import { IconBrandYoutube } from '@tabler/icons-vue';
import { IconBrandInstagram } from '@tabler/icons-vue';
import { IconBrandFacebook } from '@tabler/icons-vue';
</script>

<template>
  <footer class="bg-custom-color p-8 flex justify-center items-center">
    <div class="max-w-screen-lg">
      <div class="mb-4 flex flex-col items-center">
        <!-- Section header for questions -->
        <h3 class="text-xl font-bold mb-2">DES QUESTIONS ?</h3>
        <ul class="text-gray-600 text-center">
          <!-- Frequently Asked Questions link -->
          <li class="mb-2"><a href="#" class="hover:text-gray-800"></a>Foire aux questions</li>
          <!-- Privacy Policy link -->
          <li class="mb-2"><a href="#" class="hover:text-gray-800">Politique de confidentialité</a></li>
          <!-- Cookie Policy link -->
          <li class="mb-2"><a href="#" class="hover:text-gray-800">Politique de Cookies</a></li>
          <!-- Contact Us link -->
          <li><a href="#" class="hover:text-gray-800">Nous contacter</a></li>
        </ul>
      </div>
      <div class="flex justify-center">
        <!-- Social media icons -->
        <div class="flex space-x-4">
          <IconBrandPinterest class="w-8 h-8" />
          <IconBrandYoutube class="w-8 h-8" />
          <IconBrandInstagram class="w-8 h-8" />
          <IconBrandFacebook class="w-8 h-8" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Custom background color */
.bg-custom-color {
  background-color: #FCFCFC;
}

/* Alternate custom background color */
.bg-custom-color2 {
  background-color: #FCF3EE;
}

/* Custom font style for a specific class */
.font-sacramento {
  font-family: 'Sacramento', cursive;
  font-size: 35px;
}
</style>
