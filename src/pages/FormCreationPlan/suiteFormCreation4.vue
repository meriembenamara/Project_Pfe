
        
<template>
      <div class="bg-white rounded-lg  mx-auto my-8 max-w-2xl ">
    <div class="flex items-start justify-between p-5 border-b rounded-t">
    <h2 class="font-bold text-blue-600 text-lg">Equipements </h2>
</div>
<br><br>
<form @submit.prevent="saveData">
<div class="mb-4">
           
<h1 class="text-left font-bold text-blue-500" >Véhicules</h1>
<br>
<div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/3">
                    <label for="color-red" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans5.Camions_de_livraison" id="color-red" name="color" value="red" class="mr-2">Camions de livraison
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="color-blue" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans5.Équipement_de_terrassement" id="color-blue" name="color" value="blue" class="mr-2">Équipement de terrassement
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="color-green" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans5.Camions_de_béton" id="color-green" name="color" value="green" class="mr-2">Camions de béton
                    </label>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/3">
                    <label for="animal-cat" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans5.Camions_de_ransport_de_matériel_lourd" id="animal-cat" name="animal[]" value="cat" class="mr-2">Camions de transport de matériel lourd
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="animal-dog" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans5.Véhicules_utilitaires_légers" id="animal-dog" name="animal[]" value="dog" class="mr-2">Véhicules utilitaires légers (VUL)
                    </label>
                </div>
                <!-- <div class="px-2 w-1/3">
                    <label for="animal-bird" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" id="animal-bird" name="animal[]" value="bird" class="mr-2">Réligieuse
                    </label>
                </div> -->
                </div>
                </div>
                <br><br>
                <form class="mx-auto ml-4 text-left">
                    <div class="grid gap-4 grid-cols-2">
  <div><h1 class=" font-bold text-blue-500">Main-d'œuvre</h1></div>
  <div><h1 class=" font-bold text-blue-500">Style de paiement</h1></div>
  <div><h1>Superviseurs de chantier</h1></div>
  <div><select v-model="formPlans5.Superviseurs_de_chantier" id="country" name="country" autocomplete="country"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Aucun</option>
                        <option>Par jour</option>
                        <option>Par mois</option>
                        <option>Par semaine</option>
                        
                    </select></div>
    <div><h1 class="my-4">Ingénieurs</h1></div>   
    <div>
                    <select v-model="formPlans5.Ingénieurs" id="country" name="country" autocomplete="country"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Aucun</option>
                        <option>Par jour</option>
                        <option>Par mois</option>
                        <option>Par semaine</option>
                    </select>
                </div>
         <div><h1 class="my-4">Ouvriers qualifiés</h1></div>    
         <div>
                    <select v-model="formPlans5.Ouvriers_qualifiés" id="country" name="country" autocomplete="country"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Aucun</option>
                        <option>Par jour</option>
                        <option>Par mois</option>
                        <option>Par semaine</option>
                    </select>
                </div>
             <div><h1 class="my-4">Maître d'œuvre ou architecte</h1></div>  
             <div>
                    <select v-model="formPlans5.Maître_dœuvre_ou_architecte" id="country" name="country" autocomplete="country"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Aucun</option>
                        <option>Par jour</option>
                        <option>Par mois</option>
                        <option>Par semaine</option>
                    </select>
                </div>
                <div><h1 class="my-4">Opérateurs d'équipement lourd</h1></div>  
             <div>
                    <select v-model="formPlans5.Opérateurs_équipement_lourd" id="country" name="country" autocomplete="country"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Aucun</option>
                        <option>Par jour</option>
                        <option>Par mois</option>
                        <option>Par semaine</option>
                    </select>
                </div>
                <div><h1 class="my-4">Équipes de sécurité</h1></div>  
             <div>
                    <select v-model="formPlans5.Équipes_de_sécurité" id="country" name="country" autocomplete="country"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Aucun</option>
                        <option>Par jour</option>
                        <option>Par mois</option>
                        <option>Par semaine</option>
                    </select>
                </div>              
</div>

</form>
<br>
        <!-- <div class="flex justify-between">
            <Router-Link to="/SuiteFormCreation3">
        <button  class="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-white-700 dark:focus:ring-gray-500">Retour</button>
    </Router-Link>
        <Router-Link to="/SuiteFormCreation5">
        <button type="submit" @click="saveData" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Suivant</button>
    </Router-Link>
    </div> -->

</form>

    </div>

    </template>
    

    <script>
import axios from 'axios';


export default {
   
    data(){
    return {
        formPlans5 : {
            Camions_de_livraison:'',
            Équipement_de_terrassement:'',
            Camions_de_béton:'',
            Camions_de_ransport_de_matériel_lourd:'',
            Véhicules_utilitaires_légers:'',
            Superviseurs_de_chantier:'',
            Ingénieurs:'',
            Ouvriers_qualifiés:'',
            Maître_dœuvre_ou_architecte:'',
            Opérateurs_équipement_lourd:'',
            Équipes_de_sécurité:'',

        },
    }
    },
    methods:{
        saveData() {
      console.log(this.formPlans5);
      axios.post("http://localhost:5000/api/formPlans5/add", this.formPlans5)
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