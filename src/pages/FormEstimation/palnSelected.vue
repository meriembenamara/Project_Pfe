<template>
    <div>
      <input type="file" @click="uploadImage" alt="Selected Image">
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        selectedImageURL: null,
        imageUrl:null
      };
    },
    created() {
      this.fetchImage();
    },
    methods: {
      async fetchImage() {
        try {
          const response = await axios.get('http://localhost:5000/image/download');
          this.selectedImageURL = response.data.imageUrl; // Correction ici
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      }
    }
  }
  </script>
  