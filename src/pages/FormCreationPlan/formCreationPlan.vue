<template>

<div class="bg-white rounded-lg  mx-auto my-8 max-w-2xl ">
    <div class="flex items-start justify-between p-5 border-b rounded-t">
    <h2 class="font-bold text-blue-600 text-lg">Localisation du projet </h2>
</div>
<br>
    <form @submit.prevent="onSubmit"> 
        <div class="mb-4">
            <label for="name" class="block text-gray-700 font-medium mb-2 text-left">Commune</label>
            <input type="text" v-model="formPlans.Commune" id="name" name="name"
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
        </div>
        <div class="mb-4">
            <label for="age" class="block text-gray-700 font-medium mb-2 text-left">Lieu-dit</label>
            <input type="text" v-model="formPlans.Lieu_dit" id="age" name="age"
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
        </div>
        <div class="mb-4">
            <label for="age" class="block text-gray-700 font-medium mb-2 text-left">N° de parcelle</label>
            <input type="number" v-model="formPlans.N_de_parcelle" id="age" name="age"
                class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
        </div>
        <br/>
        <br/>
        <div class="mb-4">
            <div class="flex items-start justify-between p-5 border-b rounded-t">
    <h2 class="font-bold text-blue-600 text-lg">Objectif du projet </h2>
</div>
            <br>
            <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/3">
                    <label for="color-red" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans.Résidentielle" id="color-red" name="color" value="red" class="mr-2">Résidentielle
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="color-blue" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans.Institutionnelle" id="color-blue" name="color" value="blue" class="mr-2">Institutionnelle
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="color-green" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans.Commerciales" id="color-green" name="color" value="green" class="mr-2">Commerciales
                    </label>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <div class="flex flex-wrap -mx-2">
                <div class="px-2 w-1/3">
                    <label for="animal-cat" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans.Culturelle" id="animal-cat" name="animal[]" value="cat" class="mr-2">Culturelle
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="animal-dog" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans.Industrielle" id="animal-dog" name="animal[]" value="dog" class="mr-2">Industrielle
                    </label>
                </div>
                <div class="px-2 w-1/3">
                    <label for="animal-bird" class="block text-gray-700 font-medium mb-2">
                        <input type="checkbox" v-model="formPlans.Réligieuse" id="animal-bird" name="animal[]" value="bird" class="mr-2">Réligieuse
                    </label>
                </div>
            </div>
        </div>
    <br>
    <br>
        <div class="flex justify-between">
        <Router-Link to="/">
            <button  class="text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-white-700 dark:focus:ring-gray-500">Retour</button>
        </Router-Link>
        <Router-Link to="/SuiteFormCreation">
            <button type="submit" @click="saveData" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Suivant</button>
        </Router-Link>
    </div>

    </form>
</div>
</template>
<script>  
// import axios from 'axios';

export default {
    props: {
    formData: Object // Prop reçue du composant parent, évitez de la muter directement
  },
    data(){
    return {
      // Utilisez une copie locale des données pour éviter les mutations directes de la prop


      formPlans : {
            Commune:'',
            Lieu_dit:'',
            N_de_parcelle:'',
            Résidentielle:'',
            Institutionnelle:'',
            Commerciales:'',
            Culturelle:'',
            Industrielle:'',
            Réligieuse:'',

        },
    
    }
    
    },

    methods: {
    saveData() {
      this.$emit('save', { ...this.formPlans }); // Émission de l'événement 'save' avec les données locales
    },
    back() {
      // Méthode pour revenir à l'étape précédente si nécessaire
    }
  }
    
    // methods:{
    // saveData() {
    //   console.log(this.formPlans);
    //   axios.post("http://localhost:5000/api/formPlans/add", this.formPlans)
    //     .then(response => {
    //       const { data } = response;
    //       console.log(data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       alert("Erreur, veuillez réessayer.");
    //     });
    // },},

}

</script>


