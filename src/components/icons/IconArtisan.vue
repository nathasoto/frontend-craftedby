<script setup>

</script>


<template>
  <!-- Ícon user -->
  <div className="dropdown dropdown-end">
    <button class="mx-2 p-2 rounded-full hover:bg-colorForm">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke=#2C3532  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-check">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
        <path d="M15 19l2 2l4 -4" />
      </svg>
    </button>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40  ">
      <router-link to="/register" >
        <li ><a className="hover:bg-colorForm">Mon compte</a></li>
      </router-link>
      <router-link to="/login" >
        <li ><a className="hover:bg-colorForm"></a>Ajouter un produit</li>
      </router-link>
      <li ><a className="hover:bg-colorForm">Supprimer le compte</a></li>

    </ul>
  </div>

</template>

<style scoped>

</style>