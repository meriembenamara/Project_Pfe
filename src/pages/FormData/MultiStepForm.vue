<template>
    <div>
      <component :is="steps[currentStep]" :formData="formData" @next="nextStep" @submit="submitForm" />
    </div>
  </template>
  
  <script>
  import Step1 from './stepOne.vue';
  import Step2 from './stepTwo.vue';
  import Step3 from './stepThree.vue';
  
  export default {
    data() {
      return {
        currentStep: 0,
        formData: {
          name: '',
          email: '',
          password: ''
        },
        steps: [Step1, Step2, Step3]
      };
    },
    methods: {
      nextStep(data) {
        this.formData = { ...this.formData, ...data };
        this.currentStep++;
      },
      async submitForm(data) {
        this.formData = { ...this.formData, ...data };
        try {
          const response = await fetch('http://localhost:5000/api/submit', { // Ensure the correct URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.formData)
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
  };
  </script>
  