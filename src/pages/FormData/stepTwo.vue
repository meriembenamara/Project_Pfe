<template>
    <div>
      <h2>Step 2</h2>
      <input v-model="localFormData.email" placeholder="Email" />
      <button @click="nextStep">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['formData'],
    data() {
      return {
        localFormData: { ...this.formData }
      };
    },
    methods: {
      nextStep() {
        this.$emit('next', this.localFormData);
      }
    }
  };
  </script>
  