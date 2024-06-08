<template>
  <div>
  <div class="flex justify-center items-center">
    <img class=" w-96 h-80" :src="this.imageUrl" alt="Uploaded Image" style="max-width: 100%; max-height: 100%;" />
  </div>
<div>
  <br><br>
  <router-link to="/FormGlobal">
      <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center me-2 mb-2">Estimation global</button>
    </router-link>
    <router-link to="/estimationParEtape">
      <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center me-2 mb-2">Estimation par étape</button>
    </router-link>
</div>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      imageUrl: null,
      fileName:'',
      selectedPlanID: ''
    };
  },
  methods: {
  
    async getImageById() {
      try {
        const response = await axios.get(`http://localhost:5000/image/download/${this.selectedPlanID}`);
        this.imageUrl = `http://localhost:5000/${response.data.fileName}`;
        console.log(this.imageUrl);
      } catch (error) {
        console.error('Error getting image from database:', error);
      }
    }
  },
  mounted() {
    this.selectedPlanID = this.$route.params.id;
    // this.getImageFromDatabase(); // Appeler la méthode pour récupérer l'image lorsque le composant est monté
    this.getImageById();
  }
};
</script>

