<template>
  <div>
    <h2>Step 3</h2>
    <input v-model="localFormData.password" placeholder="Password" />
    <button @click="submitForm">Submit</button>
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
    submitForm() {
      this.$emit('submit', this.localFormData);
    }
  }
};
</script>
