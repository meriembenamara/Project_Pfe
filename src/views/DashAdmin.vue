<template>
<div>

    <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        
    <div class="rounded-xl bg-clip-border rounded-xl bg-white text-gray-700 bg-white shadow-lg rounded-xl p-6 space-y-4 ">  
            <div class="flex items-center space-x-4 mt-3 mb-3">
                <div class=" p-4 bg-green-100 rounded-xl h-16 w-16 flex items-center justify-center">
                    <!-- Icon from Heroicons (https://heroicons.com/) -->
                    <div class="h-7 w-7 text-green-600 stroke-2 " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-2 stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </div>
                </div>
                <div class="">
                    <div class="text-gray-700 text-sm ml-2">Total <br>Utilisateurs</div>
                    <div class="text-gray-900 text-2xl font-semibold ml-2">
                      {{ userCount }} 
                    </div>
                </div>
            </div>
          
      
    </div>

    <div class="rounded-xl bg-clip-border rounded-xl bg-white text-gray-700 bg-white shadow-lg rounded-xl p-6 space-y-4">  
       <div class="flex items-center space-x-4 mt-3 mb-3">
           <div class="p-4 bg-blue-100 rounded-xl h-16 w-16 flex items-center justify-center">
               <!-- Icon from Heroicons (https://heroicons.com/) -->
               <div  class="h-7 w-7 text-blue-600 stroke-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" class="w-7 h-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>

</div>
           </div>
           <div class="">
               <div class="text-gray-700 text-sm ml-2 mb-3">Aujourd'hui</div>
               <div class="text-gray-900 text-2xl font-semibold ml-2">
                   +{{newUserToday}}
                   
               </div>
           </div>
       </div>
</div>


<div class="rounded-xl bg-clip-border rounded-xl bg-white text-gray-700 bg-white shadow-lg rounded-xl p-6 space-y-4 ">
       
       <div class="flex items-center space-x-4 mt-3 mb-3">
           <div class="p-4 bg-red-100 rounded-xl h-16 w-16 flex items-center justify-center">
               <!-- Icon from Heroicons (https://heroicons.com/) -->

               <div  class="h-7 w-7 text-red-500 stroke-2 ">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
</div>
           </div>
           <div class="">
               <div class="text-gray-700 text-sm ml-2">Total <br>Plans</div>
               <div class="text-gray-900 text-2xl font-semibold ml-2">
               {{PlanCount}}
               </div>
           </div>
       </div>
</div>


<div class="rounded-xl bg-clip-border rounded-xl bg-white text-gray-700 bg-white shadow-lg rounded-xl p-6 space-y-4 ">
       
       <div class="flex items-center space-x-4 mt-3 mb-3">
        <div class="p-4 bg-blue-100 rounded-xl h-16 w-16 flex items-center justify-center">
    <!-- Icon from Heroicons (https://heroicons.com/) -->
    <div class="h-7 w-7 text-blue-600 stroke-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        </svg>
    </div>
</div>

           <div class="">
               <div class="text-gray-700 text-sm ml-2 mb-3">Aujourd'hui</div>
               <div class="text-gray-900 text-2xl font-semibold ml-2">
                   +{{newPlanToday}}
                   
               </div>
           </div>
       </div>
     
 
</div>

    </div>

</div>

    
<!--Card--> 
        <!-- <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            
        <div class="bg-clip-border rounded-xl bg-white text-gray-700 shadow-md ">
         

            <div class="">
        <div class="">
            <div class="flex items-center space-x-4">
                <div class="p-5 bg-purple-200 rounded-xl h-16 w-16 items-center">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3v4z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15V7a2 2 0 012-2h10a2 2 0 012 2v8" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15v4a2 2 0 002 2h3v-4" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15h16" />
                    </svg>
                </div>
                <div>
                    <div class="text-gray-600 text-sm">Total Subscribers</div>
                    <div class="text-gray-900 text-2xl font-semibold">
                        71,897
                        
                    </div>
                </div>
            </div>
          
        </div>
    </div>
         
        </div>

        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
              <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's Users</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">2,300</h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+3%</strong>&nbsp;than last month
            </p>
          </div>
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
              <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">New Clients</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">3,462</h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-red-500">-2%</strong>&nbsp;than yesterday
            </p>
          </div>
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Sales</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$103,430</h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+5%</strong>&nbsp;than yesterday
            </p>
          </div>
        </div>
      </div>-->
      

    <!--   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <div class="bg-slate-50 p-5 m-2 rounded-md flex justify-between items-center shadow">
                    <div>
                        <h3 class="font-bold">Total Users</h3>
                        <p class="text-gray-500">100</p>
                    </div>
                    <i class="fa-solid fa-users p-4 bg-gray-200 rounded-md"></i>
                </div>

                <div class="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
                    <div>
                        <h3 class="font-bold">Total Active Users</h3>
                        <p class="text-gray-500">65</p>
                    </div>
                    <i class="fa-solid fa-users p-4 bg-green-200 rounded-md"></i>
                </div>

                <div class="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
                    <div>
                        <h3 class="font-bold">Total In Active Users</h3>
                        <p class="text-gray-500">30</p>
                    </div>
                    <i class="fa-solid fa-users p-4 bg-yellow-200 rounded-md"></i>
                </div>

                <div class="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
                    <div>
                        <h3 class="font-bold">Deleted Users</h3>
                        <p class="text-gray-500">5</p>
                    </div>
                    <i class="fa-solid fa-users p-4 bg-red-200 rounded-md"></i>
                </div>
      </div>-->

<!--Charts--> 

  <div class="grid grid-cols-2">
    <div class="mr-3 h-60">
<div class=" w-100 bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
    <div class="flex justify-between">
      <div>
        <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">{{ usersThisWeek }}</h5>

        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Utilisateurs cette semaine</p>
      </div>
      <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
        12%
        <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
      </div>
    </div>
    <div id="area-chart"></div>
    <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
      <div class="flex justify-between items-center pt-5">
        <button
          id="dropdownDefaultButton"
          @click="toggleDropdown"
          class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
          type="button">
          {{ selectedPeriod }}
          <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <div v-if="dropdownOpen" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li v-for="period in periods" :key="period">
              <a href="#" @click="selectPeriod(period)" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{ period }}</a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
          Listes des utilisateurs
          <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
<div class="mr-3 ml-4">
  <div class="shadow-lg h-100 rounded-lg overflow-hidden">
    <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2 px-4">Statistique de Plans</h5>

    <canvas class=" p-5 h-400" ref="chartBar"></canvas>
  </div>
</div>
</div>


</template>

<script>

import axios from 'axios';
import ApexCharts from 'apexcharts';
import { Chart, registerables } from 'chart.js';


export default {
  components: {
   
  },
  data() {
    return {
      userCount: 0,
      newUserToday:0,
      PlanCount: 0,
      newPlanToday: 0,
      usersCount: 0,
      series: [],
      usersThisWeek: '32.4k',
      selectedPeriod: '7 derniers jours',
      dropdownOpen: false,
      periods: ['Hier ', ' Aujourd"hui','7 derniers jours', '30 derniers jours ', '90 derniers jours']
      
    
};
},

  mounted() {
    this.fetchUserCount();
    this.fetchPlanCount();
    this.fetchNewUserCount();
    this.fetchNewPlanCount();
    this.renderChart();
      // Enregistrer les composants nécessaires de Chart.js
      Chart.register(...registerables);

// Données du graphique
const labelsBarChart = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
];
const dataBarChart = {
  labels: labelsBarChart,
  datasets: [
    {
      label: "Plans Importés",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

// Configuration du graphique
const configBarChart = {
  type: "bar",
  data: dataBarChart,
  options: {},
};

// Création du graphique
new Chart(this.$refs.chartBar, configBarChart);
  },

  methods: {
 
    async fetchUserCount() {
      try {
        const response = await axios.get('http://localhost:5000/api/Static/UserCount');
        this.userCount = response.data.count;
      } catch (error) {
        console.error('Erreur lors de la récupération du nombre d\'utilisateurs:', error);
      }
    },
    async fetchNewUserCount() {
      try {
        const response = await axios.get('http://localhost:5000/api/Static/newUsersToday');
        this.newUserToday = response.data.count;
      } catch (error) {
        console.error('Erreur lors de la récupération du nombre de nouveaux utilisateurs aujourd\'hui:', error);
      }
    },
    async fetchPlanCount() {
      try {
        const response = await axios.get('http://localhost:5000/api/Static/PlanCount');
        this.PlanCount = response.data.count;
      } catch (error) {
        console.error('Erreur lors de la récupération du nombre de plans:', error);
      }
    },
    async fetchNewPlanCount() {
      try {
        const response = await axios.get('http://localhost:5000/api/Static/newPlanToday');
        this.newPlanToday = response.data.count;
      } catch (error) {
        console.error('Erreur lors de la récupération du nombre de nouveaux plans importés aujourd\'hui:', error);
      }
    },
    renderChart() {
      const options = {
        chart: {
          height: "100%",
          maxWidth: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: 0
          },
        },
        series: [
          {
            name: "New users",
            data: [6500, 6418, 6456, 6526, 6356, 6456],
            color: "#1A56DB",
          },
        ],
        xaxis: {
          categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
      }

      if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("area-chart"), options);
        chart.render();
      }
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectPeriod(period) {
      this.selectedPeriod = period;
      this.dropdownOpen = false;
      // Additional logic to update the chart based on selected period can be added here
    },
   
  },
};
</script>
