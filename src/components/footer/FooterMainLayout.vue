<script setup>

import FooterSupportAndSocialLinks from '@/components/FooterSupportAndSocialLinks.vue'
import NewsletterSubscription from '@/components/NewsletterSubscription.vue'
</script>

<template>
  <footer>
    <div class="flex justify-between items-start mt-9">

      <FooterSupportAndSocialLinks/>

      <!-- Newsletter subscription section -->
      <newsletter-subscription></newsletter-subscription>
    </div>
  </footer>
</template>

<style scoped>
</style>
