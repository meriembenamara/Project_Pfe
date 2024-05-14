<template>
<div>
    
    <div class="bg-white rounded-lg relative m-10">

<div class="flex items-start justify-between p-5 border-b rounded-t">
    <h2 class="font-bold text-blue-600 text-lg">Tailles et dimensions </h2>
</div>

<div class="p-6 space-y-6">
    <form action="#" @submit.prevent="saveData">
        <div class="grid grid-cols-3 gap-6">
            <div class="">
                <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2 text-left">Surface de la parcelle</label>
                <input type="number" v-model="formPlans2.Surface_de_la_parcelle" name="product-name" id="product-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required="">
            </div>
            <div class="">
                <label for="category" class="text-sm font-medium text-gray-900 block mb-2 text-left">Surface de construction</label>
                <input type="number" v-model="formPlans2.Surface_de_construction" name="category" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required="">
            </div>
            <div class="">
                <label for="brand" class="text-sm font-medium text-gray-900 block mb-2 text-left">Largeur</label>
                <input type="text" v-model="formPlans2.Largeur" name="brand" id="brand" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required="">
            </div>
            </div>
            <div class="grid grid-cols-3 gap-6 mt-4">
            <div class="">
                <label for="price" class="text-sm font-medium text-gray-900 block mb-2 text-left">Longueur</label>
                <input type="number" v-model="formPlans2.Longueur" name="price" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required="">
            </div>
            <div class="">
                <label for="product-name" class="text-sm font-medium text-gray-900 block mb-2 text-left">Nombres de portes</label>
                <input type="number" v-model="formPlans2.Nombres_de_portes" name="product-name" id="product-name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required="">
            </div>
            <div class="">
                <label for="category" class="text-sm font-medium text-gray-900 block mb-2 text-left">Nombres de Fenêtres</label>
                <input type="number" v-model="formPlans2.Nombres_de_Fenêtres" name="category" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required="">
            </div>
        </div>
        <div class="grid grid-cols-3 gap-6 mt-4">
            <div class="">
                <label for="brand" class="text-sm font-medium text-gray-900 block mb-2 text-left">Nombres d’étages</label>
                <input type="number" v-model="formPlans2.Nombres_étages" name="brand" id="brand" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required="">
            </div>
            <div class="">
                <label for="price" class="text-sm font-medium text-gray-900 block mb-2 text-left">Nombres de salles</label>
                <input type="number" v-model="formPlans2.Nombres_de_salles" name="price" id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="" required="">
            </div>
            <div class="">
                <label for="price" class="text-sm font-medium text-gray-900 block mb-2 text-left">Décompositions</label>
                                <select v-model="formPlans2.Décompositions" id="country" name="country" autocomplete="country"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                                    <option>S+0</option>
                                    <option>S+1</option>
                                    <option>S+2</option>
                                    <option>S+3</option>
                                </select>
                            </div>
        </div>

<div class="flex items-start justify-between p-5 border-b rounded-t">
    <h2 class="font-bold text-blue-600 text-lg">Style architectural </h2>
</div>
<br>
<div class="mb-4">
            <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/3">
                    <label for="animal-cat" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans2.Moderne" id="animal-cat" name="animal[]" value="cat" class="mr-2">Moderne
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="animal-dog" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans2.Traditionnel" id="animal-dog" name="animal[]" value="dog" class="mr-2">Traditionnel
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="animal-bird" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans2.Roman" id="animal-bird" name="animal[]" value="bird" class="mr-2">Roman
                    </label>
                </div>
            </div>
        </div>
        <br><br>
        <!-- <div class="flex justify-between">
        <Router-Link to="/formCreation">
            <button  class="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-white-700 dark:focus:ring-gray-500">Retour</button>
        </Router-Link>
        <Router-Link to="/SuiteFormCreation2">
            <button type="submit" @click="saveData" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Suivant</button>
        </Router-Link>
    </div> -->
    </form>
</div>
</div>

</div>
 
</template>
<script>
import axios from 'axios';


export default {
   
    data(){
    return {
        formPlans2 : {
            Surface_de_la_parcelle:'',
            Surface_de_construction:'',
            Largeur:'',
            Longueur:'',
            Nombres_de_portes:'',
            Nombres_de_Fenêtres:'',
            Nombres_étages:'',
            Nombres_de_salles:'',
            Décompositions:'',
            Moderne:'',
            Traditionnel:'',
            Roman:'',

        },
    }
    },
    methods:{
        saveData() {
      console.log(this.formPlans2);
      axios.post("http://localhost:5000/api/formPlans2/add", this.formPlans2)
        .then(response => {
          const { data } = response;
          console.log(data);
        })
        .catch(err => {
          console.log(err);
          alert("Erreur, veuillez réessayer.");
        });
    }
   }
}
</script>