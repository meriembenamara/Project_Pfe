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
                    <form @submit.prevent="estimate(index)">
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
                      <button type="submit" @click="estimate(index)"
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
          
        </div>
      </div></div> 
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      steps: [
        {
          title: "Fondations",
          fields: [
            { label: "Type de fondation", name: "foundationType", type: "select", options: ["Pieds de fondation", "Radier", "Semelles"], value: "" },
            { label: "Dimensions de la fondation (m)", name: "foundationDimensions", type: "text", value: "" },
            { label: "Type de sol", name: "soilType", type: "select", options: ["Argile", "Sable", "Roche"], value: "" },
            { label: "Quantité de béton (m³)", name: "concreteQuantity", type: "number", value: "" },
            { label: "Renforcement en acier (kg)", name: "steelReinforcement", type: "number", value: "" },
            { label: "Systèmes de drainage", name: "drainageSystems", type: "checkbox", value: false }
          ],
          estimatedCost: 0,
          estimatedTime: 0
        },
        {
          title: "Structure et Charpente",
          fields: [
            { label: "Type de structure", name: "structureType", type: "select", options: ["Bois", "Acier", "Béton"], value: "" },
            { label: "Dimensions et nombre d'étages", name: "structureDimensions", type: "text", value: "" },
            { label: "Quantité de matériaux (m³, kg)", name: "materialQuantity", type: "text", value: "" },
            { label: "Méthodes d'assemblage", name: "assemblyMethods", type: "text", value: "" }
          ],
          estimatedCost: 0,
          estimatedTime: 0
        },
        {
          title: "Cloisons et Second Œuvre",
          fields: [
            { label: "Type de cloisons", name: "partitionType", type: "select", options: ["Placo", "Briques"], value: "" },
            { label: "Nombre et dimensions des cloisons", name: "partitionDimensions", type: "text", value: "" },
            { label: "Type et épaisseur de l'isolant", name: "insulationType", type: "text", value: "" },
            { label: "Nombre et dimensions des fenêtres et portes", name: "openings", type: "text", value: "" },
            { label: "Systèmes de plomberie", name: "plumbingSystems", type: "text", value: "" },
            { label: "Systèmes électriques", name: "electricalSystems", type: "text", value: "" },
            { label: "Systèmes CVC", name: "hvacSystems", type: "text", value: "" }
          ],
          estimatedCost: 0,
          estimatedTime: 0
        },
        {
          title: "Finitions et Aménagements Intérieurs",
          fields: [
            { label: "Type de revêtement de sol", name: "flooringType", type: "select", options: ["Carrelage", "Parquet", "Moquette"], value: "" },
            { label: "Surface à couvrir (m²)", name: "flooringSurface", type: "number", value: "" },
            { label: "Type de revêtement mural", name: "wallCoveringType", type: "select", options: ["Peinture", "Papier peint"], value: "" },
            { label: "Surface à couvrir (m²)", name: "wallCoveringSurface", type: "number", value: "" },
            { label: "Nombre et type d'équipements sanitaires", name: "sanitaryEquipments", type: "text", value: "" },
            { label: "Nombre et type d'équipements de cuisine", name: "kitchenEquipments", type: "text", value: "" },
            { label: "Nombre de portes et type de menuiseries", name: "doors", type: "text", value: "" },
            { label: "Type et nombre d'appareils d'éclairage", name: "lighting", type: "text", value: "" }
          ],
          estimatedCost: 0,
          estimatedTime: 0
        }
      ],
      activeFormIndex: null,
      showAllForms: false,
      resultsVisible: false,
      totalCost: 0,
      totalTime: 0
    };
  },
  computed: {
    filteredSteps() {
      return this.steps;
    }
  },
  methods: {
    toggleForm(index) {
      this.activeFormIndex = this.activeFormIndex === index ? null : index;
    },
    estimate(index) {
      const step = this.steps[index];
      let cost = 0;
      let time = 0;

      step.fields.forEach(field => {
        if (field.type === 'number') {
          cost += parseFloat(field.value) || 0;
          time += parseFloat(field.value) / 10 || 0; // Simple calculation example
        }
      });

      this.steps[index].estimatedCost = cost;
      this.steps[index].estimatedTime = time;
      this.resultsVisible = true;
      this.updateTotals();
    },
    updateTotals() {
      this.totalCost = this.steps.reduce((total, step) => total + step.estimatedCost, 0);
      this.totalTime = this.steps.reduce((total, step) => total + step.estimatedTime, 0);
    }
  }
};
</script>
<style>
h2 {
  cursor: pointer;
}
</style>
