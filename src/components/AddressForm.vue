<script setup>
import { useAddressStore } from '../stores/AddressStore.js';
import { useRouter } from 'vue-router';
import { ref } from 'vue';


const addressStore  =  useAddressStore ()
const router = useRouter()

// Data for delivery address
const address = ref('');
const city = ref('');
const postalCode = ref('');
const country = ref('');
const phone = ref('');
// const redirecting = ref(false);

const saveAndRedirect = () => {

  router.push('/Payment');


  addressStore.setAddress(address.value);
  addressStore.setCity(city.value);
  addressStore.setPostalCode(postalCode.value);
  addressStore.setCountry(country.value);
  addressStore.setPhone(phone.value);

};

</script>

<template>
  <!-- delivery address -->
  <form @submit.prevent="saveAndRedirect" class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <!-- delivery address -->
    <div class="mb-4">
      <label for="address" class="block text-gray-700">Adresse</label>
      <input type="text" id="address" v-model="address" required
             class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
             placeholder="Votre adresse" />
      <div v-if="!address" class="text-red-500">*</div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <div class="mb-4">
          <label for="city" class="block text-gray-700">Ville</label>
          <input type="text" id="city" v-model="city" required
                 class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                 placeholder="Votre ville" />
          <div v-if="!city" class="text-red-500">*</div>
        </div>
      </div>
      <div>
        <div class="mb-4">
          <label for="postalCode" class="block text-gray-700">Code postal</label>
          <input type="text" id="postalCode" v-model="postalCode" required pattern="[0-9]*"
                 class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                 placeholder="Votre code postal" />
          <div v-if="!postalCode" class="text-red-500">*</div>
        </div>
      </div>
    </div>
    <div class="mb-4">
      <div class="flex items-center mb-4">
      <label for="country" class="block text-gray-700">Pays</label>
      <div v-if="!country" class="text-red-500">*</div>
      </div>
      <input type="text" id="country" v-model="country" required
             class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
             placeholder="Votre pays" />

    </div>
    <div class="mb-4">
      <div class="flex items-center mb-4">
      <label for="phone" class="block text-gray-700">Téléphone</label>
      <div v-if="!phone" class="text-red-500">*</div>
      </div>
      <input type="text" id="phone" v-model="phone" required pattern="[0-9]*"
             class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
             placeholder="Votre numéro de téléphone" />
    </div>
    <button type="submit" class="btn btn-wide hover:bg-colorForm font-hyperlegible font-normal text-medium text-colorText">Ajouter une carte</button>

  </form>

</template>

<style scoped>

</style>