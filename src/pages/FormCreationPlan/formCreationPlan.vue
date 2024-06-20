<template>
    <div class="bg-white rounded-lg mx-auto my-8 max-w-2xl">
      <div class="flex items-start justify-between p-5 border-b rounded-t">
        <h2 class="font-bold text-blue-600 text-lg">Localisation du projet</h2>
      </div>
      <br>
      <form>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2 text-left">Commune</label>
          <input type="text" v-model="localFormData.Commune" id="name" name="name"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
        </div>
        <div class="mb-4">
          <label for="age" class="block text-gray-700 font-medium mb-2 text-left">Lieu-dit</label>
          <input type="text" v-model="localFormData.Lieu_dit" id="age" name="age"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
        </div>
        <div class="mb-4">
          <label for="age" class="block text-gray-700 font-medium mb-2 text-left">N° de parcelle</label>
          <input type="number" v-model="localFormData.N_de_parcelle" id="age" name="age"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
        </div>
        <br />
        <br />
        <div class="mb-4">
          <div class="flex items-start justify-between p-5 border-b rounded-t">
            <h2 class="font-bold text-blue-600 text-lg">Objectif du projet</h2>
          </div>
          <br>
          <div class="flex flex-wrap -mx-2">
            <div class="px-2 w-1/3">
              <label for="color-red" class="block text-gray-700 font-medium mb-2">
                <input type="checkbox" v-model="localFormData.Résidentielle" id="color-red" name="color" value="red"
                  class="mr-2">Résidentielle
              </label>
            </div>
            <div class="px-2 w-1/3">
              <label for="color-blue" class="block text-gray-700 font-medium mb-2">
                <input type="checkbox" v-model="localFormData.Institutionnelle" id="color-blue" name="color" value="blue"
                  class="mr-2">Institutionnelle
              </label>
            </div>
            <div class="px-2 w-1/3">
              <label for="color-green" class="block text-gray-700 font-medium mb-2">
                <input type="checkbox" v-model="localFormData.Commerciales" id="color-green" name="color" value="green"
                  class="mr-2">Commerciales
              </label>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div class="flex flex-wrap -mx-2">
            <div class="px-2 w-1/3">
              <label for="animal-cat" class="block text-gray-700 font-medium mb-2">
                <input type="checkbox" v-model="localFormData.Culturelle" id="animal-cat" name="animal[]" value="cat"
                  class="mr-2">Culturelle
              </label>
            </div>
            <div class="px-2 w-1/3">
              <label for="animal-dog" class="block text-gray-700 font-medium mb-2">
                <input type="checkbox" v-model="localFormData.Industrielle" id="animal-dog" name="animal[]" value="dog"
                  class="mr-2">Industrielle
              </label>
            </div>
            <div class="px-2 w-1/3">
              <label for="animal-bird" class="block text-gray-700 font-medium mb-2">
                <input type="checkbox" v-model="localFormData.Réligieuse" id="animal-bird" name="animal[]" value="bird"
                  class="mr-2">Réligieuse
              </label>
            </div>
          </div>
        </div>
        <br>
        <br>
        <div class="card-footer">
          <button class="btn prev" @click="prevStep" :disabled="currentStepIndex === 0">Précédent</button>

        <button type="button" class="btn next" @click="nextStep()">Suivant</button>
        </div>
        <!-- <div class="flex justify-between"  v-if="showButtons">
          <Router-Link to="/">
            <button class="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-white-700 dark:focus:ring-gray-500">Retour</button>
          </Router-Link>
          <Router-Link to="/SuiteFormCreation">
            <button type="submit" @click="saveData" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Suivant</button>
          </Router-Link>
        </div> -->
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      formData: {
        type: Object, // Vous devez spécifier le type de formData
    },
    showButtons: {
        type: Boolean,
        default: true
    }
},
    data() {
      return {
        localFormData: { ...this.formData }
      };
    },
    showButtons: {
        type: Boolean,
        default: true
    },
    methods: {
      nextStep() {
  let oldData = JSON.parse(localStorage.getItem('myformdata')) || {}; // Ajout de la gestion des données initiales
  oldData = {...oldData, ...this.localFormData}; // Fusionner les anciennes données avec les nouvelles
  localStorage.setItem('myformdata', JSON.stringify(oldData));
  this.$emit('next', this.localFormData);
}

    }
  };
</script>
<style>
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

