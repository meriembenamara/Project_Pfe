<template>
    <div>
      <h2>Step 1</h2>
      <input v-model="localFormData.name" placeholder="Name" />
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
  