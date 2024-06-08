<template>
  <div class="container mx-auto p-4">
    <div class="bg-white  rounded-lg p-6">
      <div class="grid mb-8 rounded-lg  dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        <div class="space-y-4">
          <p><strong>Surface de pacerelle:</strong> 100 m²</p>
          <p><strong>Surface de construction:</strong> 80 m²</p>
          <p><strong>Nombre de salles:</strong> 5</p>
          <p><strong>Nombre d'étages:</strong> 1</p>
        </div>
        <div class="space-y-4">
          <p><strong>Surface de pacerelle:</strong> 100 m²</p>
          <p><strong>Surface de construction:</strong> 80 m²</p>
          <p><strong>Nombre de salles:</strong> 5</p>
          <p><strong>Nombre d'étages:</strong> 1</p>
        </div>
      </div>
      <div class="mt-6 space-y-6">
        <div class="w-full p-6 text-center bg-blue-900 text-black rounded-lg shadow sm:p-4 dark:bg-blue-800">
          <h2 class="text-xl text-left font-semibold mb-2">Coût Estimé :</h2>
          <p v-if="costError" class="text-red-500 mt-2">Veuillez entrer un coût valide.</p>
        </div>
        <div class="w-full  p-6 text-center bg-blue-900 text-black rounded-lg shadow sm:p-4 dark:bg-blue-800">
          <h2 class="text-xl text-left font-semibold mb-2">Durée Estimé : </h2>
          <p v-if="durationError" class="text-red-500 mt-2">Veuillez entrer une durée valide.</p>
        </div>
        <br>
            <a href="#" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuildingInfo",
  data() {
    return {
      costEstimate: '',
      durationEstimate: '',
      costError: false,
      durationError: false
    };
  },
  methods: {
    validateCost() {
      const costPattern = /^[0-9]+$/;
      this.costError = !costPattern.test(this.costEstimate);
    },
    validateDuration() {
      const durationPattern = /^[0-9]+$/;
      this.durationError = !durationPattern.test(this.durationEstimate);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.rounded-lg {
  border-radius: 0.5rem;
}

.text-red-500 {
  color: #f56565;
}

.bg-blue-900 {
  background-color: #2a4365;
}

.dark\:bg-blue-800 {
  background-color: #9ed6f7;
}
</style>
