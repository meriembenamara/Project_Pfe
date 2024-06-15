<template>
 <div class="flex">
  <div class="w-1/2 ml-14"><div class="image" ><img src="/img.png" alt="image"></div>
  <br><br><br><br>
  <h3 class="text-6xl text-center text-shadow shadow-gray-500">Welcome To Our World !</h3>
  <br>
   <h2 class="text-center text-2xl">100% Automatically and <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
    <span class="relative text-white">Free</span>
  </span></h2></div>
  <div class="w-1/2"><div class="card"> 
    <div class="flex flex-col items-center space-y-8">
      <div class="mt-28">
      <input type="file" @change="uploadImage" accept="image/" ref="fileInput" style="display: none">
    <button @click="openFileInput" class="cursor-pointer w-60 h-14 bg-blue-500 text-white rounded-3xl hover:bg-blue-700 hover:shadow-lg transition-all group active:w-11 active:h-11 active:rounded-full active:duration-300 ease-in-out">Importer plan</button>
    <br><br>
    <p class="text-sm text-shadow shadow-gray-800">Vous pouvez essayer sans plan</p>
    <br>
    <router-link to="/formCreation">
    <button class="cursor-pointer w-60 h-14 bg-gray-200 text-black rounded-3xl hover:bg-blue-700 hover:shadow-lg transition-all group active:w-11 active:h-11 active:rounded-full active:duration-300 ease-in-out">Sans plan</button>
  </router-link>
</div>
<br><br>
<!-- <p class="text-left">Pas d'image?<br>
Essayez-en un :</p> -->
</div>

 </div>
</div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      imageUrl: 'test',
      uploadedImageid:''
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
          this.imageUrl = response.data.fileName;
          this.uploadedImageid = response.data._id;
          this.$router.push('/plan/'+ this.uploadedImageid)
          // alert('Image uploaded successfully! Image URL: ' + this.Image.imageUrl);
        } else {
          alert('Failed to upload image!');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Error uploading image!');
      }
    },

    // async getImageFromDatabase() {
    //   try {
    //     const response = await axios.get('http://localhost:5000/image/download');
    //     let data = await response.json();
    //     console.log(data);
    //     if (response.status === 200) {
    //       this.imageUrl = data.data.fileName;
    //     } else {
    //       console.error('Failed to get image from database');
    //     }
    //   } catch (error) {
    //     console.error('Error getting image from database:', error);
    //   }
    // },
  },
  mounted() {

  }
};
</script>

<style scoped>
.background-image {
  padding: 180px 0;
  margin: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  /* background-image: url('/public/background.avif'); */
  background-size: 100%;
  background-position: center;
}
.card {
  width: 440px;
  height: 354px;
  border-radius: 30px;
  background: #ffffff;
  box-shadow: 5px 15px 30px #cac8c8, 30px 30px #ffffff;
  margin-top: 100px;
}
.image {
  width: 400px;
  height: 330px;
  border-radius: 40px;
  background: #ffffff;
  margin-top: -100px;
}
</style>
