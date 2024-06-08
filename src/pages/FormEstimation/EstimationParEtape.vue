<template>
  <div>
    <div class="bg-white">
      <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
        <div class="text-center">
          <h3 class="text-3xl sm:text-3xl leading-normal font-extrabold tracking-tight text-gray-900">
            Listes des <span class="text-blue-500">Etapes</span>
          </h3>
        </div>
        <div class="mt-20">
          <ul>
            <li v-for="(step, index) in steps" :key="index" class="text-left mb-10">
              <div class="flex flex-row items-start">
                <div class="flex flex-col items-center justify-center mr-5">
                  <div class="flex items-center justify-center h-20 w-20 rounded-full bg-blue-500 text-white border-4 border-white text-xl font-semibold">
                    {{ index + 1 }}
                  </div>
                </div>
                <div class="bg-gray-100 p-5 pb-10 w-full">
                  <h4 @click="toggleForm(index)" class="text-lg leading-6 font-semibold text-gray-900 cursor-pointer">
                    {{ step.title }}
                  </h4>
                  <div v-if="activeFormIndex === index" class="mt-2">
                    <form>
                      <div v-for="(field, fieldIndex) in step.fields" :key="fieldIndex" class="mb-4">
                        <label :for="field.name" class="block text-gray-700 font-medium mb-2">
                          {{ field.label }}
                        </label>
                        <input v-if="field.type === 'text' || field.type === 'number'"
                              :type="field.type"
                              :id="field.name"
                              v-model="field.value"
                              class="w-full p-2 border border-gray-300 rounded" />
                        <select v-else-if="field.type === 'select'"
                                :id="field.name"
                                v-model="field.value"
                                class="w-full p-2 border border-gray-300 rounded">
                          <option v-for="option in field.options" :key="option" :value="option">
                            {{ option }}
                          </option>
                        </select>
                        <div v-else-if="field.type === 'checkbox'" class="flex items-center">
                          <input type="checkbox" :id="field.name" v-model="field.value" class="mr-2 leading-tight" />
                          <span class="text-gray-700">{{ field.label }}</span>
                        </div>
                      </div>
                      <button type="button" @click="estimate(index)"
                              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Estimer
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="resultsVisible">
          <div class="grid grid-cols-4 gap-4">
            <div v-for="(step, index) in steps" :key="index" class="mt-8 p-6 bg-gray-200 rounded-lg">
              <h2 class="text-xl font-bold mb-4">Estimation - Étape {{ index + 1 }}</h2>
              <p><strong>Estimation du coût :</strong> {{ step.estimatedCost }} DT</p>
              <p><strong>Estimation du temps :</strong> {{ step.estimatedTime }} jours</p>
            </div>
          </div>
          <div class="mt-8 p-6 bg-gray-300 rounded-lg">
            <h2 class="text-xl font-bold mb-4">Total Global</h2>
            <p><strong>Estimation totale du coût :</strong> {{ totalCost }} DT</p>
            <p><strong>Estimation totale du temps :</strong> {{ totalTime }} jours</p>
            <p class="mt-4 text-lg text-gray-700">
              Si vous souhaitez une estimation plus précise, veuillez remplir le formulaire suivant. <span class="text-blue-500 underline"><router-link to="/formCreation">formulaire</router-link> </span>
            </p>
          </div>
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
      steps: [
        {
          title: "Fondations",
          fields: [
            { label: "Type de fondation", name: "foundationType", type: "select", options: ["Béton armé", "Blocs de béton", "Pieux en acier", "Pieux en bois"], value: "" },
            { label: "Profondeur des fondations", name: "foundationDimensions", type: "select", options: ["< 1 mètre", "1 à 2 mètres", "2 mètres"], value: ""  },
            { label: "Type de sol", name: "soilType", type: "select", options: ["Argile", "Sable", "Roche"], value: "" },
            { label: "Renforcement des fondations", name: "concreteQuantity", type: "select", options: ["Treillis métallique", "Fibres synthétiques", "Barres d'acier", "Sans renforcement"], value: "" },
          ],
          estimatedCost: 0,
          estimatedTime: 0
        },
        {
          title: "Structure et Charpente",
          fields: [
            { label: "Type de murs", name: "structureType", type: "select", options: ["Briques", "Parpaings", "Bois", "Panneaux de gypse", "Béton armé", "Panneaux sandwich", "Murs en béton cellulaire"], value: "" },
            { label: "Épaisseur des murs", name: "structureDimensions", type: "select", options: ["10 cm", "20 cm", "30 cm"], value: "" },
            { label: "Finition des murs", name: "wallFinish", type: "select", options: ["Plâtre", "Enduit", "Peinture", "Revêtement bois"], value: "" },
            { label: "Type de charpente", name: "frameType", type: "select", options: ["Acier", "Bois", "Aluminium", "Béton précontraint"], value: "" },
            { label: "Traitement de la charpente", name: "frameTreatment", type: "select", options: ["Traitement contre les insectes", "Traitement ignifuge", "Aucun traitement"], value: "" },
            { label: "Type de poutres et colonnes", name: "beamColumnType", type: "select", options: ["Acier", "Béton", "Bois", "Aluminium", "Béton préfabriqué"], value: "" },
            { label: "Disposition des poutres et colonnes", name: "beamColumnLayout", type: "select", options: ["Disposition régulière", "Disposition irrégulière"], value: "" },
          ],
          estimatedCost: 0,
          estimatedTime: 0
        },
        {
          title: "Cloisons et Second Œuvre",
          fields: [
            { label: "Type d'isolation", name: "partitionType", type: "select", options: ["Laine de verre", "Laine de roche", "Polystyrène expansé", "Polystyrène extrudé", "Mousse de polyuréthane", "Fibre de bois", "Chanvre"], value: "" },
            { label: "Épaisseur de l'isolation", name: "partitionDimensions", type: "select", options: ["5 cm", "10 cm", "15 cm"], value: "" },
            { label: "Type de fenêtres", name: "insulationType", type: "select", options: ["Aluminium", "Bois", "PVC", "Fenêtres mixtes (bois-alu)", "Acier"], value: "" },
            { label: "Type de vitrage", name: "glazingType", type: "select", options: ["Simple vitrage", "Double vitrage", "Triple vitrage"], value: "" },
            { label: "Type de portes", name: "doorType", type: "select", options: ["Acier", "Bois", "Aluminium", "PVC", "Portes mixtes (bois-alu)", "Verre"], value: "" },
            { label: "Type d'ouverture", name: "openingType", type: "select", options: ["Battante", "Coulissante", "Pivotante"], value: "" }
          ],
          estimatedCost: 0,
          estimatedTime: 0
        },
        {
          title: "Finitions et Aménagements Intérieurs",
          fields: [
            { label: "Type de revêtement de sol", name: "flooringType", type: "select", options: ["Carrelage", "Parquet", "Moquette", "Vinyle", "Béton ciré"], value: "" },
            { label: "Couleur des revêtements de sol", name: "flooringSurface", type: "select", options: ["Couleur claire", "Couleur moyenne", "Couleur foncée"], value: "" },
            { label: "Traitement de surface", name: "wallCoveringType", type: "select", options: ["Vernis", "Huile", "Cire", "Peinture"], value: "" },
          ],
          estimatedCost: 0,
          estimatedTime: 0
        }
      ],
      activeFormIndex: null,
      resultsVisible: false,
      totalCost: 0,
      totalTime: 0
    };
  },
  methods: {
    toggleForm(index) {
      this.activeFormIndex = this.activeFormIndex === index ? null : index;
    },
    async estimate(index) {
      const step = this.steps[index];

      // Créer un objet de données compatible avec le modèle Mongoose
      const data = {
        type_de_fondation: step.fields.find(f => f.name === 'foundationType')?.value || "",
        profondeur_des_fondations: step.fields.find(f => f.name === 'foundationDimensions')?.value || "",
        type_de_sol: step.fields.find(f => f.name === 'soilType')?.value || "",
        renforcement_des_fondations: step.fields.find(f => f.name === 'concreteQuantity')?.value || "",
        type_de_murs: step.fields.find(f => f.name === 'structureType')?.value || "",
        épaisseur_des_murs: step.fields.find(f => f.name === 'structureDimensions')?.value || "",
        finition_des_murs: step.fields.find(f => f.name === 'wallFinish')?.value || "",
        type_de_charpente: step.fields.find(f => f.name === 'frameType')?.value || "",
        traitement_de_la_charpente: step.fields.find(f => f.name === 'frameTreatment')?.value || "",
        type_de_poutres_et_colonnes: step.fields.find(f => f.name === 'beamColumnType')?.value || "",
        disposition_des_poutres_et_colonnes: step.fields.find(f => f.name === 'beamColumnLayout')?.value || "",
        type_isolation: step.fields.find(f => f.name === 'partitionType')?.value || "",
        épaisseur_de_isolation: step.fields.find(f => f.name === 'partitionDimensions')?.value || "",
        type_de_fenêtres: step.fields.find(f => f.name === 'insulationType')?.value || "",
        type_de_vitrage: step.fields.find(f => f.name === 'glazingType')?.value || "",
        type_de_portes: step.fields.find(f => f.name === 'doorType')?.value || "",
        type_ouverture: step.fields.find(f => f.name === 'openingType')?.value || "",
        type_de_revêtement_de_sol: step.fields.find(f => f.name === 'flooringType')?.value || "",
        couleur_des_revêtements_de_sol: step.fields.find(f => f.name === 'flooringSurface')?.value || "",
        traitement_de_surface: step.fields.find(f => f.name === 'wallCoveringType')?.value || "",
      };

      console.log("Sending data to backend:", data);

      try {
        const response = await axios.post('http://localhost:5000/api/formEtapes/add', data);
        console.log("Response from backend:", response.data);
        this.resultsVisible = true;
      } catch (error) {
        console.error("There was an error!", error);
      }
    },
  
  }
};
</script>

<style scoped>
/* Ajouter les styles nécessaires ici */
</style>
