<template>
  <div>
   <!-- Header Component -->
   <HeaderUser />
    <main>
   <!--================Blog Area =================-->
 
        <!-- slider Area Start-->
        <div class="slider-area ">
            <div class="single-slider hero-overly slider-height2 d-flex align-items-center" style="background-image: url('assets/img/hero/about.jpg');">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap pt-100">
                                <h2>Bienvenue Dans Notre Monde !</h2>
                                
                                <nav aria-label="breadcrumb ">
                                    <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Project</a></li> 
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- slider Area End-->
          <!-- Services Area Start -->
          <div class="services-area1 section-padding30">
            <div class="container">
                <!-- section tittle -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-tittle mb-55">
                            <div class="front-text">
                                <h2 class="">Nos Services</h2>
                            </div>
                            <span class="back-text">Services</span>
                        </div>
                    </div>
                </div>
                <div class="button-row">
    <div class="button-container">
      <input type="file" @change="uploadImage" accept="image/" ref="fileInput" style="display: none">
        <button @click="openFileInput" class="btn">
            <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>
            <span class="text">Importer Plan</span>
        </button>
    </div>
    <div class="button-container">

    <router-link to="/formCreation">
        <button class="btn">
            <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>
            <span class="text">Sans Plan</span>
        </button>
      </router-link>
    </div>
</div>

<div class="text-center">
    <h2 class="text-2xl">100% Automatically and 
        <span class="relative inline-block">
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                <span class="relative text-white">Free</span>
            </span>
        </span>
    </h2>
</div>


            </div>
          </div>
      
        <!-- Services Area End -->
  
    
      <!--================Blog Area =================-->
    </main>
   <!-- Footer Component -->
   <FooterUser />
  </div>
</template>

<script>
import axios from 'axios';
import HeaderUser from '../components/HeaderUser.vue'
import FooterUser from '../components/FooterUser.vue'
export default {
  components: {
    HeaderUser,
    FooterUser
  },
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



.btn {
  border: none;
  width: 15em;
  height: 5em;
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #1C1A1C;
  cursor: pointer;
  transition: all 450ms ease-in-out;
}

.sparkle {
  fill:  #ffffff;
  transition: all 800ms ease;
}

.text {
  font-weight: 600;
  color: #AAAAAA;
  font-size: medium;
}

.btn:hover {
  background: linear-gradient(0deg,#A47CF3,#683FEA);
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
  inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
  0px 0px 0px 4px rgba(255, 255, 255, 0.2),
  0px 0px 180px 0px #9917FF;
  transform: translateY(-2px);
}

.btn:hover .text {
  color: white;
}

.btn:hover .sparkle {
  fill: white;
  transform: scale(1.2);
}
.button-row {
    display: flex;
    justify-content: space-around; /* Adjusts the space between the buttons */
    align-items: center; /* Centers the buttons vertically */
    margin-bottom: 20px; /* Adds space between the button row and the text */
}

.button-container {
    margin: 5px; /* Adds some margin between buttons if necessary */
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 5px;
}

.btn svg {
    margin-right: 8px;
   
}

.text {
    font-size: 16px;
    color: #ffffff;
}

.text-center {
    text-align: center;
}

.text-2xl {
    font-size: 1.5em;
}

.relative {
    position: relative;
}

.before\\:block::before {
    content: "";
    display: block;
}

.before\\:absolute::before {
    position: absolute;
}

.before\\:-inset-1::before {
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
}

.before\\:-skew-y-3::before {
    transform: skewY(-3deg);
}

.before\\:bg-blue-500::before {
    background-color: #4299e1; /* Tailwind blue-500 */
}

.inline-block {
    display: inline-block;
}

.text-white {
    color: #ffffff;
}

</style>
