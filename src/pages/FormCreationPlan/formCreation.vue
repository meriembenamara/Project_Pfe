<template>
  <div>
    <div class="stepper">
      <div v-for="(step, index) in steps" :key="index" :class="{ 'step': true, 'active': index === currentStepIndex, 'completed': index < currentStepIndex }">
        <div class="step-number">{{ index + 1 }}</div>
        <div class="step-title">{{ step }}</div>
      </div>
      <div class="step-line"></div>
    </div>

    <component :is="currentStep" :formData="formPlans" @save="saveFormData">
      <FormCreationPlan v-model="formPlans"/>
      <SuiteFormCreation v-model="formPlans"/>
      <SuiteFormCreation2 v-model="formPlans"/>
      <SuiteFormCreation3 v-model="formPlans"/>*
      <SuiteFormCreation4 v-model="formPlans"/>
      <SuiteFormCreation5 v-model="formPlans"/>
    </component>

    <div>
      <button class="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-white-700 dark:focus:ring-gray-500" @click="prevStep" :disabled="currentStepIndex === 0">Précédent</button>
      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="onSaveData" :disabled="currentStepIndex === steps.length - 1">{{ currentStepIndex === steps.length - 1 ? 'Estimer' : 'Suivant' }}</button>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import FormCreationPlan from '../FormCreationPlan/formCreationPlan.vue';
import SuiteFormCreation from '../FormCreationPlan/suiteFormCreation.vue';
import SuiteFormCreation2 from '../FormCreationPlan/suiteFormCreation2.vue';
import SuiteFormCreation3 from '../FormCreationPlan/suiteFormCreation3.vue';
import SuiteFormCreation4 from '../FormCreationPlan/suiteFormCreation4.vue';
import SuiteFormCreation5 from '../FormCreationPlan/suiteFormCreation5.vue';

export default {
  components: {
    FormCreationPlan,
    SuiteFormCreation,
    SuiteFormCreation2,
    SuiteFormCreation3,
    SuiteFormCreation4,
    SuiteFormCreation5
  },
  data() {
    return {
      // Déclarez les étapes et l'index de l'étape courante
      steps: ['FormCreationPlan', 'SuiteFormCreation', 'SuiteFormCreation2', 'SuiteFormCreation3', 'SuiteFormCreation4', 'SuiteFormCreation5'],
      currentStepIndex: 0,
      // Initialisez les données du formulaire
      formPlans: JSON.parse(localStorage.getItem('formPlans')) || {}
    };
  },

  computed: {
    currentStep() {
      return this.steps[this.currentStepIndex];
    }
  },
  methods: {
    nextStep() {
      if (this.currentStepIndex < this.steps.length - 1) {
        console.log("nexxt")
        this.currentStepIndex++;
      }
    },
    prevStep() {
      if (this.currentStepIndex > 0) {
        this.currentStepIndex--;
      }
    },

    

    async onSaveData(formData) {
      localStorage.setItem('formPlans', JSON.stringify(formData));
      // Logique pour envoyer les données au serveur
      try {
        const response = await axios.post("http://localhost:5000/api/formPlans/add", formData);
        console.log('Réponse du serveur :', response.data);
      } catch (error) {
        console.error('Erreur lors de l\'envoi des données au serveur :', error);
      }
      console.log('Données enregistrées :', formData);
    },

    
    async onEstimate() {
      // try {
      //   // Envoyer les données au serveur
      //   const response = await axios.post("http://localhost:5000/api/formPlans/add", this.formPlans);
      //   console.log('Réponse du serveur :', response.data);
      //   // Réinitialiser le formulaire ou faire d'autres actions en fonction de la réponse
      // } catch (error) {
      //   console.error('Erreur lors de l\'envoi des données au serveur :', error);
      //   // Gérer les erreurs d'envoi des données
      // }
    },
    onNextOrEstimateClick() {
      if (this.currentStepIndex === this.steps.length - 1) {
        this.onEstimate();
        console.log("estimation")
      } 
      else {
        console.log("saveeee")
        this.onSaveData();
        console.log( this.onSaveData())
        this.nextStep();
      }
    }
  }
};
</script>

<style scoped>
.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.step.active .step-number,
.step.completed .step-number {
  background-color: #007bff;
  color: #fff;
}

.step.active .step-title,
.step.completed .step-title {
  font-weight: bold;
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}

.step-title {
  font-size: 14px;
  text-align: center;
}

.step-line {
  flex: 1;
  height: 2px;
  background-color: #f0f0f0;
  margin: 0 10px;
}

/* Nouveau style pour la ligne reliant les cercles */
.step::before {
  content: '';
  position: absolute;
  top: 15px; /* Ajustez la position verticale de la ligne */
  left: calc(50% + 15px); /* Positionnez la ligne horizontalement */
  height: 2px;
  width: calc(100% - 30px); /* Calculez la largeur de la ligne */
  background-color: #f0f0f0; /* Couleur de la ligne */
  z-index: -1;
}

/* Style spécial pour la première étape pour ne pas afficher la ligne à gauche */
/* .step:first-child::before {
  display: none;
} */
</style>
