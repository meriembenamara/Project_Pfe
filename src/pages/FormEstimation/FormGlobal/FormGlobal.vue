<template>
  <div class="ml-40 mr-40">
    <component :is="currentStep" :formData="formGlobal" @next="nextStep" @submit="submitForm" :showButtons="false"/>
  </div>
</template>

<script>
import Step1 from '@/pages/FormCreationPlan/suiteFormCreation2.vue'
import Step2 from '@/pages/FormCreationPlan/suiteFormCreation3.vue'
import Step3 from '@/pages/FormCreationPlan/suiteFormCreation4.vue'

export default {
  components: {
    Step1,
    Step2,
    Step3
  },
  data() {
    return {
      currentStepIndex: 0,
      formGlobal: {
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
        camions_de_livraison: '',
        équipement_de_terrassement: '',
        camions_de_béton: '',
        camions_de_ransport_de_matériel_lourd: '',
        véhicules_utilitaires_légers: '',
        superviseurs_de_chantier: '',
        ingénieurs: '',
        ouvriers_qualifiés: '',
        maître_dœuvre_ou_architecte: '',
        opérateurs_équipement_lourd: '',
        équipes_de_sécurité: '',
        additional_details: '',
      },
      steps: [Step1, Step2, Step3]
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
        this.formGlobal = { ...this.formGlobal, ...data };
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

        const response = await fetch('http://localhost:5000/api/formGlobals/add', {
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
  }
};
</script>
