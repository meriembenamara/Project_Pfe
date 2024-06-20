<template>
  <div @submit.prevent="onNextOrEstimateClick" class="form-container">
    <div class="stepper">
      <div v-for="(step, index) in steps" :key="index" :class="{ 'step': true, 'active': index === currentStepIndex, 'completed': index < currentStepIndex }">
        <div class="step-number">{{ index + 1 }}</div>
        <div class="step-title">{{ step }}</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="step-title">{{ steps[currentStepIndex] }}</div>
      </div>
      <div class="card-body">
        <component 
        :is="currentStep" 
          :formData="formPlans" 
          @next="nextStep" 
          @submit="submitForm" 
          :showButtons="false" 
        />
      </div>
      <!-- <div class="card-footer">
        <button class="btn prev" @click="prevStep" :disabled="currentStepIndex === 0">Précédent</button>
        <button type="submit" class="btn next" @click="onNextOrEstimateClick">{{ currentStepIndex === steps.length - 1 ? 'Estimer' : 'Suivant' }}</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
        nombres_de_fenêtres: '',
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
        selectedcharpente: '',
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
console.log("laa reponseee",response)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Response from server:', result); // Vérifiez la réponse du serveur
  } catch (error) {
    console.error('Error:', error);
  }
},

async estimatePrice() {
  try {
    this.uploading = true;
    this.uploadSuccess = false;
    this.uploadError = false;

    const formData = new FormData();
    formData.append('Commune', this.commune);
formData.append('Lieu_dit', this.lieu_dit);
formData.append('N_de_parcelle', this.n_de_parcelle);
formData.append('Résidentiellee', this.résidentielle);
formData.append('Institutionnelle', this.institutionnelle);
formData.append('Commerciales', this.commerciales);
formData.append('Culturelle', this.culturelle);
formData.append('Industrielle', this.industrielle);
formData.append('Réligieuse', this.réligieuse);
formData.append('Surface_de_la_parcelle', this.surface_de_la_parcelle);
formData.append('Surface_de_construction', this.surface_de_construction);
formData.append('Largeur', this.largeur);
formData.append('Longueur', this.longueur);
formData.append('Nombres_de_portes', this.nombres_de_portes);
formData.append('Nombres_de_Fenêtres', this.nombres_de_Fenêtres);
formData.append('Nombres_étages', this.nombres_étages);
formData.append('Nombres_de_salles', this.nombres_de_salles);
formData.append('Décompositions', this.décompositions);
formData.append('Moderne', this.moderne);
formData.append('Traditionnel', this.traditionnel);
formData.append('Roman', this.roman);
formData.append('Fondations', this.fondations);
formData.append('Murs', this.murs);
formData.append('Isolation', this.isolation);
formData.append('Fenêtres', this.fenêtres);
formData.append('Portes', this.portes);
formData.append('Revêtements_de_sol', this.revêtements_de_sol);
formData.append('selectedCharpente', this.selectedCharpente);
formData.append('Poutres_et_colonnes', this.poutres_et_colonnes);
formData.append('Béton', this.béton);
formData.append('Camions_de_livraison', this.Camions_de_livraison);
formData.append('Équipement_de_terrassement', this.Équipement_de_terrassement);
formData.append('Camions_de_béton', this.camions_de_béton);
formData.append('Camions_de_ransport_de_matériel_lourd', this.camions_de_ransport_de_matériel_lourd);
formData.append('Véhicules_utilitaires_légers', this.véhicules_utilitaires_légers);
formData.append('Superviseurs_de_chantier', this.Superviseurs_de_chantier);
formData.append('Ingénieurs', this.Ingénieurs);
formData.append('Ouvriers_qualifiés', this.Ouvriers_qualifiés);
formData.append('Maître_dœuvre_ou_architecte', this.Maître_dœuvre_ou_architecte);
formData.append('Opérateurs_équipement_lourd', this.Opérateurs_équipement_lourd);
formData.append('Équipes_de_sécurité', this.Équipes_de_sécurité);
formData.append('Additional_details', this.additional_details);

    const response = await axios.post('http://localhost:5000/estimate-price', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    const priceUSD = parseFloat(response.data.estimatedPrice); // Parse string to float
    if (!isNaN(priceUSD)) {
      this.estimatedPrice = this.convertCurrency(priceUSD, this.currencyRate);
      this.uploadSuccess = true;
    } else {
      throw new Error('Invalid price received from the server');
    }
  } catch (error) {
    console.error('Error estimating house price:', error);
    this.uploadError = true;
    this.estimatedPrice = null; // Reset estimated price in case of error
  } finally {
    this.uploading = false; // Always reset uploading flag after request completes
  }
},


    onNextOrEstimateClick() {
      if (this.currentStepIndex === this.steps.length - 1) {
        this.submitForm();
      } else {
        this.nextStep();
      }
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.stepper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}

.step.active .step-number,
.step.completed .step-number {
  background-color: #007bff;
  color: #fff;
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
  font-weight: bold;
}

.step::after {
  content: '';
  position: absolute;
  top: 50%;
  left: calc(50% + 15px);
  height: 2px;
  width: calc(100% - 30px);
  background-color: #f0f0f0;
}

.step:last-child::after {
  content: none;
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.card-header {
  margin-bottom: 20px;
}

.card-body {
  flex-grow: 1;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn.prev {
  background-color: #6c757d;
}

.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.btn:hover:not(:disabled) {
  background-color: #0056b3;
}
</style>
