<template>
   <!-- component -->

   
<section class="container px-4 mx-auto">
  <h1 class="font-bold text-left mb-5 text-3xl font-sans">Liste des Utilisateurs</h1>
  
  <!--Search-->

    <div class="md:flex md:items-center md:justify-between">
      
        <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
        </div>

        <div class="relative flex float-right items-center mt-2 mb-4 md:mt-0 w-30">
            <span class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>
            <input type="text" placeholder="Search" class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
        </div>
    </div>


    <div class="flex flex-col">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800 font-bold">
                            <tr class="bg-gray-50 dark:bg-gray-800 font-bold">                             
                              <th scope="col" class="px-4 py-3.5 text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 font-bold">
                                Utilisateurs
                              </th>

                                <th scope="col" class="px-4 py-3.5 text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 font-bold">
                                    Email
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 font-bold">
                                      Adresse
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 font-bold">
                                      Telephone
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm text-left rtl:text-righttext-gray-700 dark:text-gray-400 font-bold">
                                    Role
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 font-bold">
                                    Status
                                </th>

                                <th scope="col" class="px-4 py-3.5 text-sm text-left rtl:text-right text-gray-700 dark:text-gray-400 font-bold">
                                   Actions
                                </th>
                            </tr>
                          
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            <tr v-for="user in users" :key="user.id"  > <!--@click="showUserHistory(user._id)-->    
                                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    <div class="flex items-center gap-x-2">
                                        <img class="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">
                                        <div>
                                            <h2 class="text-sm font-medium text-gray-800 dark:text-white"  @click="showUserHistory(user._id)">  {{ user.First_name }} {{ user.name }}</h2>
                                        </div>
                                    </div>
                                </td>

                                <td class="px-4 py-4 text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ user.email }}</td>
                                <td class="px-4 py-4 text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ user.address }}</td>
                                <td class="px-4 py-4 text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ user.num_tel }}</td>
                                <td class="px-4 py-4 text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ user.selectedRole }}</td>

                                <td class="px-4 py-4 text-sm text-left  font-medium text-gray-700 whitespace-nowrap">
                                  <!--Badge-->
                                   <div v-if="user.isEnabled" class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">  
                                        <h2 class="text-sm font-normal">Active</h2>
                                    </div>

                                    <div v-if="!user.isEnabled" class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-red-100/60 dark:bg-gray-800">  
                                        <h2 class="text-sm font-normal">Desactive</h2>
                                    </div>
                                </td>    
                                <td class="px-4 py-4 text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap flex items-center" >
                                  <!--Delete-->
                                  <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"  class="w-8 h-8 float-left  text-blue-500"  @click="confirmDelete(user._id)">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer ml-2">
                                  <input type="checkbox" v-model="user.isEnabled" class="sr-only">
                                  <div v-if="user.isEnabled" @click="deactivateUser(user._id)" class="peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-500 w-8 h-8 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-hover:after:scale-75 peer-checked:after:content-['✖️'] after:-rotate-180 peer-checked:after:rotate-0"></div>
                                  <div v-else @click="activateUser(user._id)" class="peer ring-0 bg-emerald-500 rounded-full outline-none duration-300 after:duration-500 w-8 h-8 shadow-md peer-checked:bg-rose-400 peer-focus:outline-none after:content-['✔️'] after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0  transform rotate-180"></div>
                                </label>
                                </td>               
                            </tr>  
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
  
<script>
import axios from 'axios';
export default {
  
  data() {
    return {
      users: [],
    };
  },

  methods: {
    async loadUsers() {
  try {
    const response = await axios.get("http://localhost:5000/api/users/AllUsers", {
    });
    this.users = response.data.users;
  } catch (error) {
    console.error("Erreur lors du chargement des utilisateurs:", error);
    // Gérer les erreurs de chargement des utilisateurs ici
  }
},

    async deleteUser(userId) {
      const response = await axios.delete(`http://localhost:5000/api/users/delete/${userId}`);
      if (response.status === 200) {
        this.users = this.users.filter(user => user.id !== userId);
        console.log(`Utilisateur supprimé avec succès.`);
        alert("Utilisateur supprimé avec succès.")
        
      } else {
        console.error(`Échec de la suppression de l'utilisateur avec l'ID ${userId} :`, response.data);
      }
    },

     async  confirmDelete(userId) {
  if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
    this.deleteUser(userId);
    window.location.reload();
  }
},

    async activateUser(userId) {
      try {
        const response = await axios.put(`http://localhost:5000/api/users/Enable/${userId}`);
        console.log('Utilisateur activé:', response.data);
        alert("Utilisateur activé");
        this.updateUserStatus(userId, true);
      } catch (error) {
        console.error("Erreur lors de l'activation de l'utilisateur:", error);
      }
    },

    async deactivateUser(userId) {
      try {
        const response = await axios.put(`http://localhost:5000/api/users/Disable/${userId}`);
        console.log('Utilisateur désactivé:', response.data);
        alert("Utilisateur désactivé");
        this.updateUserStatus(userId, false);
      } catch (error) {
        console.error("Erreur lors de la désactivation de l'utilisateur:", error);
      }
    },

    // showUserHistory(userId) {
        // Naviguer vers la page d'historique de l'utilisateur en utilisant Vue Router
        //this.$router.push({ '/history', params: { userId: user.id } });
   // }
   showUserHistory(userId) {
        // Naviguer vers la page d'historique de l'utilisateur en utilisant Vue Router
        this.$router.push(`/history/${userId}`);
   }

  },
  mounted() {
   this.loadUsers();
  }

};
</script>
  
<style>
  
</style>