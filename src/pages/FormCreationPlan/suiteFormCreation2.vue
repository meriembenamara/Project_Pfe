<template>
  <!-- This is an example component -->
  
      <section class="text-gray-600 body-font relative">
        <div class="flex items-start justify-between p-5 border-b rounded-t">
      <h2 class="font-bold text-blue-600 text-lg">Matériaux de construction </h2>
  </div>
  
      <div class=" mx-auto">
  
          <div class="mt-10 md:mt-0 md:col-span-2">
              <form action="#">
                      <div class="px-2 py-8 bg-white sm:p-6">
                          <div class="grid grid-cols-3 gap-6">
                            <div class="">
                                  <label for="country" class="block text-sm font-medium text-gray-700 text-left">
                                    Fondations</label>
                                  <select v-model="localFormData.Fondations" id="country" name="country" autocomplete="country"
                                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <option>Béton armé</option>
                                      <option>Blocs de béton</option>
                                      <option>Pieux en acier</option>
                                      <option>Pieux en bois</option>
                                  </select>
                              </div>
  
                              <div class="">
                                  <label for="country" class="block text-sm font-medium text-gray-700 text-left">
                                    Murs</label>
                                  <select v-model="localFormData.Murs" id="country" name="country" autocomplete="country"
                                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <option>Briques</option>
                                      <option>Parpaings</option>
                                      <option>Bois</option>
                                      <option>Panneaux de gypse</option>
                                  </select>
                              </div>
  
                                <div class="">
                                  <label for="country" class="block text-sm font-medium text-gray-700 text-left">
                                    Isolation </label>
                                  <select v-model="localFormData.Isolation" id="country" name="country" autocomplete="country"
                                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <option>Laine de verre</option>
                                      <option>Laine de roche</option>
                                      <option>Polystyrène expansé</option>
                                      <option>Polystyrène extrudé</option>
                                  </select>
                              </div>
                            </div>
  
                            <div class="grid grid-cols-3 gap-6 mt-4">
                              <div class="">
                                  <label for="country" class="block text-sm font-medium text-gray-700 text-left">
                                    Fenêtres</label>
                                  <select v-model="localFormData.Fenêtres" id="country" name="country" autocomplete="country"
                                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <option>en aluminium</option>
                                      <option>en bois</option>
                                  </select>
                              </div>
                              
                              <div class="">
                                  <label for="country" class="block text-sm font-medium text-gray-700 text-left">
                                    Portes</label>
                                  <select v-model="localFormData.Portes" id="country" name="country" autocomplete="country"
                                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <option>en acier</option>
                                      <option>en bois</option>
                                  </select>
                              </div>
                              <div class="">
                                  <label for="country" class="block text-sm font-medium text-gray-700 text-left">
                                    Revêtements de sol</label>
                                  <select v-model="localFormData.Revêtements_de_sol" id="country" name="country" autocomplete="country"
                                      class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <option>Carrelage</option>
                                      <option>Béton poli</option>
                                      <option>Bois</option>
                                      <option>Revêtements de sol stratifiés</option>
                                  </select>
                              </div>
                            </div>
                          <br><br>
                          
  
  
                          <div class="grid gap-2 grid-cols-3 text-left">
    <div>    <h1>Charpente:</h1></div>
    <div v-for="(option, index) in options" :key="index" @click="selectOption(option)">
              <label for="color-red" class="block text-gray-700 font-medium mb-4">
                  <input type="checkbox" id="color-red" name="color" value="red" class="mr-2">{{ option.label}}
              </label>
          </div>
    <div><h1 >Poutres et colonnes:</h1></div>
    <div v-for="(option1, index) in options1" :key="index" @click="selectOption1(option1)">
              <label for="color-red" class="space-x-2 block text-gray-700 font-medium mb-2">
                  <input type="checkbox" id="color-red" name="color" value="red" class="mr-2">{{ option1.label}}
              </label>
          </div>
    <div><h1>Béton:</h1>
  </div>
  <div v-for="(option2, index) in options2" :key="index" @click="selectOption2(option2)">
              <label for="color-red" class="block text-gray-700 font-medium mb-2">
                  <input type="checkbox" id="color-red" name="color" value="red" class="mr-2">{{ option2.label}}
              </label>
          </div>
  </div>
                      </div>
                      <div class="flex justify-between">
            <button type="button" class="text-white bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="prevStep()">Retour</button>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="nextStep()">Next</button>
            </div>

                      <div class="flex justify-between"  v-if="showButtons">
          <Router-Link to="/plan/:id">
              <button class="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-white-700 dark:focus:ring-gray-500">Retour</button>
          </Router-Link>
          <Router-Link to="/SuiteFormCreation3">
              <button type="submit" @click="saveData" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Suivant</button>
          </Router-Link>
      </div>
         </form> 
        </div>
      </div>
      </section>
  
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
},      data() {
        return {
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
          localFormData: { ...this.formData }
        };
      },
    
      methods: {
        selectOption(option) {
        this.selectedCharpente = option.label;
      },
      selectOption1(option1) {
        this.Poutres_et_colonnes = option1.label;
      },
      selectOption2(option2) {
        this.Béton = option2.label;
      },
  
      nextStep() {
        let oldData = JSON.parse(localStorage.getItem('myformdata'));
        oldData = {...this.localFormData};
        localStorage.setItem('myformdata', JSON.stringify(oldData));
        this.$emit('next', this.localFormData);
      }
      }
    };
  </script>
  