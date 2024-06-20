<template>
    <div>
      <div class="bg-white rounded-lg relative m-10">
        <div class="flex items-start justify-between p-5 border-b rounded-t">
          <h2 class="font-bold text-blue-600 text-lg">Tailles et dimensions</h2>
        </div>
  
        <div class="p-6 space-y-6">
          <form>
            <div class="grid grid-cols-3 gap-6">
              <div>
                <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2 text-left">Surface de la parcelle</label>
                <input type="number" v-model="localFormData.Surface_de_la_parcelle" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required>
              </div>
              <div>
                <label for="category" class="text-sm font-medium text-gray-900 block mb-2 text-left">Surface de construction</label>
                <input type="number" v-model="localFormData.Surface_de_construction" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required>
              </div>
              <div>
                <label for="brand" class="text-sm font-medium text-gray-900 block mb-2 text-left">Largeur</label>
                <input type="text" v-model="localFormData.Largeur" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-6 mt-4">
              <div>
                <label for="price" class="text-sm font-medium text-gray-900 block mb-2 text-left">Longueur</label>
                <input type="number" v-model="localFormData.Longueur" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required>
              </div>
              <div>
                <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2 text-left">Nombres de portes</label>
                <input type="number" v-model="localFormData.Nombres_de_portes" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required>
              </div>
              <div>
                <label for="category" class="text-sm font-medium text-gray-900 block mb-2 text-left">Nombres de Fenêtres</label>
                <input type="number" v-model="localFormData.Nombres_de_Fenêtres" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-6 mt-4">
              <div>
                <label for="brand" class="text-sm font-medium text-gray-900 block mb-2 text-left">Nombres d’étages</label>
                <input type="number" v-model="localFormData.Nombres_étages" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required>
              </div>
              <div>
                <label for="price" class="text-sm font-medium text-gray-900 block mb-2 text-left">Nombres de salles</label>
                <input type="number" v-model="localFormData.Nombres_de_salles" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required>
              </div>
              <div>
                <label for="price" class="text-sm font-medium text-gray-900 block mb-2 text-left">Décompositions</label>
                <select v-model="localFormData.Décompositions" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option>S+0</option>
                  <option>S+1</option>
                  <option>S+2</option>
                  <option>S+3</option>
                </select>
              </div>
            </div>
  
            <div class="flex items-start justify-between p-5 border-b rounded-t">
              <h2 class="font-bold text-blue-600 text-lg">Style architectural</h2>
            </div>
            <br>
            <div class="mb-4">
              <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/3">
                  <label for="moderne" class="block text-gray-700 font-medium mb-2">
                    <input type="checkbox" v-model="localFormData.Moderne" id="moderne" class="mr-2">Moderne
                  </label>
                </div>
                <div class="px-2 w-1/3">
                  <label for="traditionnel" class="block text-gray-700 font-medium mb-2">
                    <input type="checkbox" v-model="localFormData.Traditionnel" id="traditionnel" class="mr-2">Traditionnel
                  </label>
                </div>
                <div class="px-2 w-1/3">
                  <label for="roman" class="block text-gray-700 font-medium mb-2">
                    <input type="checkbox" v-model="localFormData.Roman" id="roman" class="mr-2">Roman
                  </label>
                </div>
              </div>
            </div>
            <br><br>
            <div class="card-footer">
          <button class="btn prev" @click="prevStep" :disabled="currentStepIndex === 0">Précédent</button>

        <button type="button" class="btn next" @click="nextStep()">Suivant</button>
        </div>


            <div class="flex justify-between" v-if="showButtons">
              <Router-Link to="/formCreation">
                <button class="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-white-700 dark:focus:ring-gray-500">Retour</button>
              </Router-Link>
              <button type="button" @click="nextStep" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Estimer</button>
            </div>
          </form>
        </div>
      </div>
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
  
    methods: {
      nextStep() {
        let oldData = JSON.parse(localStorage.getItem('myformdata'));
        oldData = {...this.localFormData};
        localStorage.setItem('myformdata', JSON.stringify(oldData));
        this.$emit('next', this.localFormData);
      }
    }
  };
</script>
