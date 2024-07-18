
<script setup>
import { useUserStore } from '../stores/UserStore.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();


const handleLogout = async () => {
  try {
    await userStore.logout();
    // Redirige a la página de inicio después del logout
    router.push('/');

  } catch (error) {
    console.error('Error during logout:', error);

  }
};
</script>
<template>
  <div @click="handleLogout" class="flex justify-end w-full px-4">
    <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
  </div>
</template>

<style scoped>

</style>