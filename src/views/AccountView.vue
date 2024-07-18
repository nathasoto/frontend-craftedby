<script setup>

import Navbar_home from '@/components/navbar/navbarHome.vue'
import Footer_home from '@/components/FooterHome.vue'
import LogoutButton from '@/components/LogoutButton.vue'
import { useUserStore } from '../stores/UserStore.js';
import { onMounted } from "vue";
import AccountAdmin from "@/components/AccountAdmin.vue";
import AccountClient from "@/components/AccountClient.vue";

const { isLoading, roles } = useUserStore();

onMounted(async () => {
  await useUserStore().fetchRoles(); // Fetch roles on component mount
});

</script>

<template>
  <body>
  <header>
    <Navbar_home />
  </header>

  <LogoutButton />

  <div>
    <h1>Bienvenue</h1>
    <template v-if="isLoading">
      <p>Loading...</p>
    </template>
    <template v-else>
      <template v-if="roles.includes('admin')">
        <!-- Display content for "admin" role -->
        <AccountAdmin/>
      </template>
      <template v-else-if="roles.includes('authClient')">
        <!-- Display content for "authClient" role -->
        <AccountClient/>
      </template>
      <template v-if="roles.includes('artisan')">
        <!-- Display content for "artisan" role -->
        <p>Artisan Panel</p>
      </template>
    </template>
  </div>

  <footer>
    <Footer_home />
  </footer>
  </body>
</template>
