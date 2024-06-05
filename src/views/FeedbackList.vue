<template>
<div class="grid grid-cols-2 gap-2 "> 

  <div class="flex flex-col  bg-white p-5 rounded-md mt-5 shadow-md " v-for="feedback in feedbacks" :key="feedback._id">


    
<div class="flex flex-row justify-between w-full">
  <div class=" flex items-center justify-center">
  <div  class="float-left"> 
    <img class="object-cover w-12 h-12 rounded-full " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">
  </div>
  
  <div>
    <h2 class="text-md font-bold px-2 text-gray-800 dark:text-white mr-10">Meriem Ben Amara</h2>
    <h4 class="text-sm px-2 text-gray-800 dark:text-white ">{{ feedback.email }}</h4>
  </div>
  

   </div>

   <div class="text-xs">
  <div class="flex flex-row float-right">
   <!-- Dessiner les étoiles sélectionnées -->
 <!-- v-for="star in feedback.selectedStars" key="star"  -->
 <svg   v-for="star in feedback.selectedStars" :key="star" class=" text-yellow-500 star w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>


 <svg   v-for="star in feedback.unselectedStars" :key="star"  class="text-gray-300 dark:text-gray-500 star w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
 

<!-- <svg
 v-for="star in feedback.selectedStars" :key="star" 
          viewBox="0 0 20 20"
          class="h-8 w-8 text-yellow-400 star"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg> -->

      <!--   <svg
 v-for="star in feedback.unselectedStars" :key="star" 
          viewBox="0 0 20 20"
          class="h-8 w-8 text-yellow-500 star"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.049 2.927c.3-.916 1.603-.916 1.902 0l1.286 3.953a1.5 1.5 0 001.421 1.033h4.171c.949 0 1.341 1.154.577 1.715l-3.38 2.458a1.5 1.5 0 00-.54 1.659l1.286 3.953c.3.916-.757 1.67-1.539 1.145l-3.38-2.458a1.5 1.5 0 00-1.76 0l-3.38 2.458c-.782.525-1.838-.229-1.539-1.145l1.286-3.953a1.5 1.5 0 00-.54-1.659l-3.38-2.458c-.764-.561-.372-1.715.577-1.715h4.171a1.5 1.5 0 001.421-1.033l1.286-3.953z"
          ></path>
        </svg>-->

  
        <!-- Dessiner les étoiles non sélectionnées -->
        <!--<svg v-for="star in feedback.unselectedStars" class="star" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" :key="star">
          <path d="M22 9.27l-5 5 1.18 6.94L12 18.39l-6.18 3.82L7 14.27l-5-5 6.91-.38L12 2l3.09 6.89L22 9.27z" fill="none"/>
        </svg> -->
    
  </div>
   </div>

</div>


<div class="text-md mt-6 ml-1 ">{{ feedback.comment }}
</div>
<div class="flex flex-row justify-end">
<button @click="toggleFeedbackVisibility(feedback._id)" 
    class="focus:outline-none w-20 h-10 mt-4 float-right text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm  me-2 mb-2 dark:focus:ring">
            {{ feedback.visible ? 'Retirer' : 'Partager' }}
          </button>
        </div>
</div>


</div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      feedbacks: [],
    };
  },
  mounted() {
    this.getFeedbacks();
  },
  methods: {
    getFeedbacks() {
      axios.get('http://localhost:5000/api/feedback//FeedbackList')
        .then(response => {
          this.feedbacks = response.data;
        
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des feedbacks :', error);
        });
    },

    async toggleFeedbackVisibility(feedbackId) {
      const feedback = this.feedbacks.find(feedback => feedback._id === feedbackId);
      if (feedback) {
        try {
          if (feedback.visible) {
            // Appeler la fonction pour rendre le feedback invisible
            await this.makeFeedbackInvisible(feedbackId);
            feedback.visible = false; // Mettre à jour localement l'attribut 'visible'
          } else {
            // Appeler la fonction pour rendre le feedback visible
            await this.makeFeedbackVisible(feedbackId);
            feedback.visible = true; // Mettre à jour localement l'attribut 'visible'
          }
        } catch (error) {
          console.error('Erreur lors de la mise à jour du feedback:', error.message);
        }
      }
    },

    async makeFeedbackVisible(feedbackId) {
    try {
      const response = await axios.put(`http://localhost:5000/api/feedback/updateFeedbackVisibility/${feedbackId}`,{ visible:true});
      console.log(response.data.message);
      // Mettez à jour l'état de l'application si nécessaire
    } catch (error) {
      console.error(error.message);
    }
  },

  async makeFeedbackInvisible(feedbackId) {
    try {
      const response = await axios.put(`http://localhost:5000/api/feedback/makeFeedbacksInvisible/${feedbackId}`,{ visible:false});
      console.log(response.data.message);
      // Mettez à jour l'état de l'application si nécessaire
    } catch (error) {
      console.error(error.message);
    }
  }
    
}
};
</script>