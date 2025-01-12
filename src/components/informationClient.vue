<!--<script setup>-->
<!--import { ref, onMounted, computed } from 'vue'-->
<!--import { useUserStore } from '@/stores/UserStore.js';-->
<!--import axios from "axios";-->

<!--// Estados Reactivos-->
<!--const userStore = useUserStore();-->

<!--// const loading = ref(true);-->
<!--// const passwordForm = ref({-->
<!--//   currentPassword: "",-->
<!--//   newPassword: "",-->
<!--// });-->





<!--const user = computed(() => ({-->
<!--  name: userStore.name,-->
<!--  last_name: userStore.last_name,-->
<!--  email: userStore.email,-->
<!--}));-->
<!--const isLoading = computed(() => userStore.isLoading);-->

<!--// Función para cargar datos del usuario-->
<!--const fetchUserData = async () => {-->
<!--  try {-->
<!--    await userStore.fetchUser();-->
<!--  } catch (error) {-->
<!--    console.error("Error al cargar los datos del usuario:", error);-->
<!--  }-->
<!--};-->

<!--// Confirmar eliminación de cuenta-->
<!--const confirmDeleteAccount = async () => {-->
<!--  if (confirm("¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.")) {-->
<!--    await deleteAccount();-->
<!--  }-->
<!--};-->

<!--// Eliminar cuenta-->
<!--const deleteAccount = async () => {-->
<!--  try {-->
<!--    await userStore.deleteAccount(); // Llamar a la función en el store-->
<!--    alert("Cuenta eliminada correctamente.");-->
<!--    window.location.href = "/"; // Redirigir al home-->
<!--  } catch (error) {-->
<!--    console.error("Error al eliminar la cuenta:", error);-->
<!--    alert("Hubo un error al eliminar la cuenta.");-->
<!--  }-->
<!--};-->

<!--// Cargar datos del usuario al montar el componente-->
<!--onMounted(fetchUserData);-->

<!--</script>-->

<!--<template>-->
<!--  <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">-->
<!--    <h1 class="text-2xl font-bold mb-4">Perfil del Cliente</h1>-->

<!--    <div v-if="isLoading" class="text-center">-->
<!--      <p class="text-gray-500">Cargando...</p>-->
<!--    </div>-->

<!--    <div v-else>-->
<!--      &lt;!&ndash; Información del cliente &ndash;&gt;-->
<!--      <div class="mb-6">-->
<!--        <p class="text-lg"><strong>Nombre:</strong> {{ user.name }}</p>-->
<!--        <p class="text-lg"><strong>Apellido:</strong> {{ user.last_name || 'No especificado' }}</p>-->
<!--        <p class="text-lg"><strong>Email:</strong> {{ user.email }}</p>-->
<!--      </div>-->

<!--      &lt;!&ndash; Botón para eliminar cuenta &ndash;&gt;-->
<!--      <div class="mb-6">-->
<!--        <h2 class="text-xl font-semibold mb-4">Eliminar Cuenta</h2>-->
<!--        <button-->
<!--          @click="confirmDeleteAccount"-->
<!--          class="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"-->
<!--        >-->
<!--          Eliminar Mi Cuenta-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->

<!--</style>-->