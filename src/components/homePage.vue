<template>
  <div class="background-image">
    <div class="titre">
      <h1>Let’s make EstimaPro work for you</h1>
    </div>
    <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" style="max-width: 100%; max-height: 100%;" />
    <input type="file" @change="uploadImage" accept="image/" ref="fileInput" style="display: none">
  
    <button @click="openFileInput" type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center me-2 mb-2">Télécharger plan</button>
    <router-link to="/formCreation">
      <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center me-2 mb-2">Remplir formulaire</button>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      Image: {
        imageUrl: null
      }
    };
  },
  methods: {
    async openFileInput() {
      this.$refs.fileInput.click();
    },
    async uploadImage(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('imageUrl', file);

      try {
        const response = await axios.post('http://localhost:5000/image/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.status === 200) {
          this.Image.imageUrl = response.data;
          console.log('this image', this.Image.imageUrl);
          alert('Image uploaded successfully! Image URL: ' + this.Image.imageUrl);
        } else {
          alert('Failed to upload image!');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Error uploading image!');
      }
    },

    async getImageFromDatabase() {
      try {
        const response = await axios.get('http://localhost:5000/image/download'); 
        if (response.status === 200) {
          this.imageUrl = response.data.imageUrl; 
        } else {
          console.error('Failed to get image from database');
        }
      } catch (error) {
        console.error('Error getting image from database:', error);
      }
    }
  },
  mounted() {
    this.getImageFromDatabase(); // Appeler la méthode pour récupérer l'image lorsque le composant est monté
  }
};
</script>

<style scoped>
.background-image {
  padding: 180px 0;
  margin: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-image: url('/public/background.avif');
  background-size: 100%;
  background-position: center;
}
</style>
