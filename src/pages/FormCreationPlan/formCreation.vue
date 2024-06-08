<template>
  <div @submit.prevent="onNextOrEstimateClick">
    <div class="stepper">
      <div v-for="(step, index) in steps" :key="index" :class="{ 'step': true, 'active': index === currentStepIndex, 'completed': index < currentStepIndex }">
        <div class="step-number">{{ index + 1 }}</div>
        <div class="step-title">{{ step }}</div>
      </div>
      <div class="step-line"></div>
    </div>

    <component :is="currentStep" :formData="formPlans" @next="nextStep" @submit="submitForm" :showButtons="false"/>
    <!-- <div>
      <button @click="prevStep" :disabled="currentStepIndex === 0">Précédent</button>
      <button type="submit" @click="onNextOrEstimateClick">{{ currentStepIndex === steps.length - 1 ? 'Estimer' : 'Suivant' }}</button>
    </div> -->
  </div>
</template>

<script>
import Step1 from '../FormCreationPlan/formCreationPlan.vue';
import Step2 from '../FormCreationPlan/suiteFormCreation.vue';
import Step3 from '../FormCreationPlan/suiteFormCreation2.vue';
import Step4 from '../FormCreationPlan/suiteFormCreation3.vue';
import Step5 from '../FormCreationPlan/suiteFormCreation4.vue';

export default {
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5
  },
  data() {
    return {
      currentStepIndex: 0, 
      formPlans: {
        commune: '',
        lieu_dit: '',
        n_de_parcelle: '',
        résidentielle: '',
        institutionnelle: '',
        commerciales: '',
        culturelle: '',
        industrielle: '',
        réligieuse: '',
        surface_de_la_parcelle: '',
        surface_de_construction: '',
        largeur: '',
        longueur: '',
        nombres_de_portes: '',
        nombres_de_Fenêtres: '',
        nombres_étages: '',
        nombres_de_salles: '',
        décompositions: '',
        moderne: false,
        traditionnel: false,
        roman: false,
        fondations: '',
        murs: '',
        isolation: '',
        fenêtres: '',
        portes: '',
        revêtements_de_sol: '',
        selectedCharpente: '',
        poutres_et_colonnes: '',
        béton: '',
        options: [
          { label: 'En bois' },
          { label: 'En metale' },
        ],
        options1: [
          { label: 'En bois' },
          { label: 'En acier' },
        ],
        options2: [
          { label: 'En bois' },
          { label: 'En metale' },
        ],
        camions_de_livraison:'',
        équipement_de_terrassement:'',
        camions_de_béton:'',
        camions_de_ransport_de_matériel_lourd:'',
        véhicules_utilitaires_légers:'',
        superviseurs_de_chantier:'',
        ingénieurs:'',
        ouvriers_qualifiés:'',
        maître_dœuvre_ou_architecte:'',
        opérateurs_équipement_lourd:'',
        équipes_de_sécurité:'',
        additional_details: '',
      },
      steps: ['Step1', 'Step2', 'Step3', 'Step4', 'Step5'],
    };
  },
  computed: {
    currentStep() {
      return this.steps[this.currentStepIndex];
    }
  },
 
  methods: {
    nextStep(data) {
      if (this.currentStepIndex < this.steps.length - 1) {
        this.formPlans = { ...this.formPlans, ...data };
        this.currentStepIndex++;
      }
    },
    prevStep() {
      if (this.currentStepIndex > 0) {
        this.currentStepIndex--;
      }
    },
    async submitForm() {
  try {
    let mydata = JSON.parse(localStorage.getItem('myformdata'));
    console.log('Data to be sent:', mydata); // Vérifiez le contenu des données envoyées

    const response = await fetch('http://localhost:5000/api/formPlans/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mydata)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Response from server:', result); // Vérifiez la réponse du serveur
  } catch (error) {
    console.error('Error:', error);
  }
},

    // onNextOrEstimateClick() {
    //   if (this.currentStepIndex === this.steps.length - 1) {
    //     this.submitForm();
    //   } else {
    //     this.nextStep();
    //   }
    // }
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
  height: 2px;
  background-color: #f0f0f0;
  margin: 0 10px;
}
.step::before {
  content: '';
  position: absolute;
  top: 15px;
  left: calc(50% + 15px);
  height: 2px;
  width: calc(100% - 30px);
  background-color: #f0f0f0;
}
.step:nth-child(n+5)::before {
  /* Rend la ligne invisible à partir du 7ème élément .step */
  display: none;
}
</style>
