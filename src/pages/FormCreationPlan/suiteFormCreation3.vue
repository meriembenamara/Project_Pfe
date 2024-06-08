
        
<template>
    <div>
    <form class="max-w mx-auto">
      <div class="flex items-start justify-between p-5 border-b rounded-t">
    <h2 class="font-bold text-blue-600 text-lg">Professionnels impliqués </h2>
    </div>
      <div class="max-w-lg mx-auto p-4">
      <div class="mb-4">
        <div>
          <label class="inline-flex items-center">
            <input type="checkbox" value="Architecte" v-model="selectedProfessionals" class="form-checkbox text-indigo-600">
            <span class="ml-2">Architecte</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input type="checkbox" value="Ingénieur" v-model="selectedProfessionals" class="form-checkbox text-indigo-600">
            <span class="ml-2">Ingénieur</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input type="checkbox" value="Entrepreneur général" v-model="selectedProfessionals" class="form-checkbox text-indigo-600">
            <span class="ml-2">Entrepreneur général</span>
          </label>
          <br><br><br>
          <label class="inline-flex items-center ml-6">
            <input type="checkbox" value="Autre" v-model="selectedProfessionals" class="form-checkbox text-indigo-600">
            <span class="ml-2">Autre : <input type="text" v-model="otherProfessional" class="ml-2 border rounded py-1 px-2"></span>
          </label>
        </div>
      </div>
  </div>  
      
        <div class="flex items-start justify-between p-5 border-b rounded-t">
    <h2 class="font-bold text-blue-600 text-lg">Niveau de finition </h2>
</div>
<br>
<div class="mb-4">
            <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/3">
                    <label for="animal-cat" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" id="animal-cat" name="animal[]" value="cat" class="mr-2">Standard
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="animal-dog" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" id="animal-dog" name="animal[]" value="dog" class="mr-2">Moyen
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="animal-bird" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" id="animal-bird" name="animal[]" value="bird" class="mr-2">Haut de gamme
                    </label>
                </div> 
            </div>
            </div>
            <br>
            <div class="flex justify-between">
            <button type="button" class="text-white bg-gray-400 hover:bg-gray-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="prevStep()">Retour</button>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="nextStep()">Next</button>
            </div>


           
            <br><br> 
        <div class="flex justify-between"  v-if="showButtons">
            <Router-Link to="/SuiteFormCreation2">
        <button type="submit" class="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-white-700 dark:focus:ring-gray-500">Retour</button>
    </Router-Link>
        <Router-Link to="/SuiteFormCreation4">
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Suivant</button>
    </Router-Link>
    </div>
    
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
},    data() {
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