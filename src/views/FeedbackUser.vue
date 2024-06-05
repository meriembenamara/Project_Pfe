<template>
    <div>
      <div class="flex flex-col items-center justify-center h-screen light">
        <div class="w-full max-w-md bg-white rounded-xl shadow-lg  ">
          <div class="divide-y divide-slate-200">
        <h2 class="text-gray-800 text-3xl font-semibold p-6 text-center">Votre avis nous intéresse !</h2>
      
  
          <div class="flex flex-row items-center justify-center p-6">
            <svg v-for="(star, index) in stars" :key="index" class="star w-10 h-10" :class="{ 'text-yellow-500': star, 'text-gray-300 dark:text-gray-500': !star }" @click="toggleStarColor(index)" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </div>
  
        </div>
          <form class="flex flex-col ml-6 mr-6">
            <input v-model="email" placeholder="Saisir votre Email" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text">
            <textarea v-model="comment" placeholder="Saisir votre Commentaires..." class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 h-60" name="feedback"></textarea>
         
          <button class="ml-auto mb-4 mt-2 font-sans text-lg bg-blue-500 text-white py-2 px-3 rounded-lg flex items-center w-15 focus:outline-none transition duration-200 ease-in-out hover:shadow-md active:scale-95 float-right" @click.prevent="submitFeedback">
  <div class="w-8 h-8 flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-6 h-6 mr-2 text-white"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path
        fill="currentColor"
        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
      ></path>
    </svg>
  </div>
  <span class="transition-transform duration-300 ease-in-out mr-2">Envoyer</span>
</button>

          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';
  export default {
    data() {
      return {
        email: '',
        comment: '',
        stars: [false, false, false, false, false],
      };
    },
    methods: {
      toggleStarColor(index) {
        this.stars[index] = !this.stars[index];
      },
      submitFeedback() {
  // Calculer le nombre d'étoiles sélectionnées et non sélectionnées
  const selectedStars = this.stars.filter(star => star).length; // Nombre d'étoiles sélectionnées
  const totalStars = 5;// Nombre total d'étoiles
  const unselectedStars = totalStars - selectedStars; // Nombre d'étoiles non sélectionnées

  // Envoi des données au backend, y compris les étoiles sélectionnées et non sélectionnées
  axios.post('http://localhost:5000/api/feedback/NewFeedback', {
    email: this.email,
    comment: this.comment,
    stars:this.stars,
    selectedStars: selectedStars, // Envoyer le nombre d'étoiles sélectionnées
    unselectedStars: unselectedStars // Envoyer le nombre d'étoiles non sélectionnées
  })
  .then(response => {
    console.log(response.data);
    alert('Feedback enregistré avec succès !');
  })
  .catch(error => {
    console.error('Erreur lors de l\'enregistrement du feedback :', error);
    alert('Une erreur est survenue lors de l\'enregistrement du feedback. Veuillez réessayer.');
  });
}



      
    }
  }
  </script>
  