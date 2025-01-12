<template>
  <div class="customize-cookies">
    <h1>Personnaliser mes choix de cookies</h1>
    <form @submit.prevent="savePreferences">
      <label class="font-hyperlegible font-normal text-medium text-colorText">
        <input type="checkbox" v-model="preferences.analytics" />
        Cookie de mesure d'audience
      </label>
      <p class="font-hyperlegible font-normal text-medium text-colorText"> ce cookie nous permet d'obtenir vos informations . Il permet notamment de comprendre que vous arrivez et de reconstituer votre parcours.</p>
      <label class="font-hyperlegible font-normal text-medium text-colorText">
        <input type="checkbox" v-model="preferences.marketing" />
        Cookie publicitaire & réseaux sociaux
      </label>
       <p class="font-hyperlegible font-normal text-medium text-colorText">
         ces cookies peuvent être déposés par nos partenaires afin de proposer des publicités ciblées et pertinentes en dehors du site alinea.com. Ces cookies peuvent être associés à vos données afin de constituer un profil client combinant vos données de navigation et les données liées à votre compte client et à vos achats, y compris provenant de sources externes. Sur la base de ce profil client, notre entreprise et ses partenaires peuvent vous présenter des contenus et publicités personnalisés, sur notre site ou sur des supports externes, y compris les sites de médias, les réseaux sociaux et la télévision segmentée.
       </p>
      <label class="font-hyperlegible font-normal text-medium text-colorText">
        <input type="checkbox" v-model="preferences.essential"   />
        Cookie de service et de personnalisation
      </label>
      <p class="font-hyperlegible font-normal text-medium text-colorText">ces cookies vous permettent d'accéder à des services supplémentaires afin de vous offrir une expérience personnalisée sur le site, en fonction de votre navigation et de vos préférences </p>
      <button type="submit">Sauvegarder mes préférences</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const preferences = ref({
  analytics: false,
  marketing: false,
  essential: true,
})

const router = useRouter()

const savePreferences = () => {
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences.value))
  router.push('/')
}
</script>

<style scoped>
.customize-cookies {
  padding: 50px;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 50px;
}
.customize-cookies h1 {
  font-size: 1.5em;
  margin-bottom: 10px;
}
.customize-cookies form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
button {
  background-color: #80bc8a;
  color: #000;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
