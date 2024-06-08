<template>
  <div>
    <!-- Header Component -->
    <HeaderPage />
    <!-- Page content goes here -->
    <!-- Footer Component -->
    <FooterPage />
  </div>
</template>
<script>
 import HeaderPage from './HeaderPage.vue'
 import FooterPage from './FooterPage.vue' 

export default {
    name: 'AboutPage',
    components: {
    HeaderPage,
    FooterPage
  }
}
</script>