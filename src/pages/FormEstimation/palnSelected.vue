<template>
  <div class="flex flex-col min-h-screen justify-between mt-20">
    <!-- Section title -->
    <div class="row">
      <div class="col-lg-12">
        <div class="section-tittle mb-55">
          <div class="front-text">
            <h2 class="">Plan</h2>
          </div>
          <span class="back-text">Plan</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center">
      <div class="flex justify-center items-center mb-4">
        <img class="w-104 h-88" :src="this.imageUrl" alt="Uploaded Image" style="max-width: 100%; max-height: 100%;" />
      </div>
      <div class="button-row">
        <router-link to="/FormGlobal">
          <button type="button" class="btn">
            <svg height="20" width="20" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>
            <span class="text">Estimation global</span>
          </button>
        </router-link>
        <router-link to="/estimationParEtape">
          <button type="button" class="btn">
            <svg height="20" width="20" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>
            <span class="text">Estimation par étape</span>
          </button>
        </router-link>
      </div>
    </div>
    <!-- Footer Component -->
    <FooterUser />
  </div>
</template>


<script>
import axios from 'axios';
import FooterUser from '@/components/FooterUser.vue'

  
export default {
  components: {
   
    FooterUser
  },
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
        console.log(response.data);
        console.log(response.data.imageUrl);
        this.imageUrl = `http://localhost:5000/${response.data.imageUrl}`;
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

<style scoped>
.flex-grow {
  flex-grow: 1;
}
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
  fill: #ffffff;
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
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* Adds space between the button row and the image */
  gap: 10px; /* Space between the buttons */
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
