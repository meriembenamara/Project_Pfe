<template>
  <div id="app">
    <router-view/>
  </div>

</template>
<script>
 // Import Bootstrap CSS
 import 'bootstrap/dist/css/bootstrap.min.css';

// Import Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

export default {
  name: 'App'
}
     
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
