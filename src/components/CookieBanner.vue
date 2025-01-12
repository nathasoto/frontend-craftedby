<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const cookiePreferences = ref(false)
const router = useRouter()

const acceptCookies = () => {
  localStorage.setItem('cookiePreferences', 'true')
  cookiePreferences.value = true
}

const continueWithoutAccepting = () => {
  localStorage.setItem('cookiePreferences', 'false')
  cookiePreferences.value = true
}

const customizeChoice = () => {
  router.push('/customize-cookies')
  cookiePreferences.value = true
}

onMounted(() => {
  cookiePreferences.value = localStorage.getItem('cookiePreferences') === 'true'
})
</script>

<template>
  <div v-if="!cookiePreferences" class="cookie-banner">
    <div class="banner-content font-hyperlegible ">
      <p>Vos données personnelles, votre choix</p>
      <p>Nous utilisons des cookies et traceurs pour stocker et accéder à des informations sur votre ordinateur ou smartphone. Ces cookies nous permettent:</p>
      <p>1. d'assurer le fonctionnement du site</p>
      <p>2. mesurer l'audience du site</p>
      <p>3. personnaliser l'interface</p>
      <p>4. créer un profil personnalisé en combinant des données de navigation et des données liées à votre compte client et à vos achats, y compris provenant de sources externes (membres de l’alliance Valiuz)</p>
      <p>5. afficher des publicités ciblées sur notre site ou des supports externes, y compris les sites de médias, les réseaux sociaux et la télévision segmentée.</p>
      <p>Cliquez sur "Tout accepter" pour donner votre consentement. Vous pouvez également refuser les cookies en cliquant sur "Continuer sans accepter". Vous pouvez personnaliser vos choix et accéder à la liste des éditeurs de cookies utilisés sur notre site en cliquant sur "Personnaliser mes choix". Vous pouvez changer d'avis à tout moment en cliquant sur le lien « Politique de Cookies » en bas de chaque page du site.</p>

      <div class="buttons font-hyperlegible ">
        <button @click="acceptCookies">Tout accepter</button>
        <button @click="continueWithoutAccepting">Continuer sans accepter</button>
        <button @click="customizeChoice">Personnaliser mon choix</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Style for paragraphs inside the banner */
p {
  font-size: 18px;
}

/* Style for the cookie banner */
.cookie-banner {
  position: fixed; /* Fix the banner at the bottom of the screen */
  bottom: 0; /* Position it at the bottom of the screen */
  left: 50%; /* Center the banner horizontally */
  transform: translateX(-50%); /* Adjust the position to properly center it */
  background-color: #333; /* Background color of the banner */
  color: #fff; /* White text color */
  text-align: center; /* Center the text */
  display: flex; /* Use flexbox to center the elements */
  justify-content: center; /* Center the child elements horizontally */
  align-items: center; /* Center the child elements vertically */
  width: auto; /* The width adjusts to the content */
  max-width: 600px; /* Maximum size for large screens */
  border-radius: 10px; /* Rounded corners */
  overflow-y: auto; /* Allows scrolling if the content exceeds the area */
  height: auto; /* The height adjusts based on the content */
}

/* Inner container of the banner */
.banner-content {
  padding: 15px; /* Padding inside the container */
  background-color: #444; /* Background color of the container */
  border-radius: 8px; /* Rounded corners for the container */
  max-height: none; /* No height limit */
  overflow-y: hidden; /* Content does not get cut off by default */
}

/* Style for paragraphs inside the banner */
.cookie-banner p {
  margin: 0 0 10px 0; /* Margin to separate paragraphs */
}

/* Style for the button container */
.buttons {
  margin-top: 10px; /* Top margin to separate the buttons */
  display: flex; /* Use flexbox to organize the buttons */
  gap: 10px; /* Space between the buttons */
  justify-content: center; /* Center the buttons horizontally */
}

/* Style for the buttons inside the banner */
.buttons button {
  background-color: #ffffff; /* White background for the buttons */
  border: none; /* Remove the border of the buttons */
  color: #181818; /* Dark text color */
  padding: 5px 10px; /* Padding inside the buttons */
  cursor: pointer; /* Change the cursor when hovering over the button */
  border-radius: 3px; /* Slightly rounded corners */
}

/* Style for small screens */
@media (max-width: 600px) {
  .cookie-banner {
    width: 90%; /* Ensure it takes up 90% of the width on mobile screens */
    max-width: 90%; /* Do not let the banner grow more than necessary */
    left: 5%; /* Adjust the position to center it */
    transform: none; /* Remove the centering transformation */
    height: auto; /* Adjust the height according to the content */
  }

  .banner-content {
    padding: 10px; /* Reduced padding for small screens */
    max-height: 60vh; /* Limit the height to 60% of the screen height */
    overflow-y: auto; /* Allows scrolling when content exceeds the space */
  }

  p {
    font-size: 16px; /* Reduce the font size for small screens */
  }

  .buttons {
    flex-direction: column; /* Stack the buttons vertically */
    gap: 5px; /* Reduce the gap between buttons */
  }

  .buttons button {
    width: 100%; /* Buttons take up the full width */
  }
}

/* Style for large screens */
@media (min-width: 601px) {
  .cookie-banner {
    width: auto; /* The banner adjusts to the size of the content */
    max-width: 900px; /* Maximum size of the banner */
    height: auto; /* Height adjusts based on the content */
    left: 50%; /* Center the banner */
    transform: translateX(-50%); /* Ensures it's centered */
  }

  .banner-content {
    height: auto; /* Automatically adjusts the height */
    overflow-y: visible; /* Content is not cut off on large screens */
  }

  p {
    font-size: 18px; /* Larger font size for large screens */
  }

  .buttons {
    flex-direction: row; /* Arrange the buttons in a row */
    gap: 15px; /* More space between the buttons */
  }

  .buttons button {
    width: auto; /* The buttons adjust to the size of the content */
  }
}
</style>

