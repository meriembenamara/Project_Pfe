import { createApp } from 'vue'
import App from './App.vue'
//import css
import './assets/css/app.css'
//import router
import router from './router'
import store from '../store'; // Importer le magasin Vuex

import axios from "axios"
// Import Bootstrap and jQuery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';

const app = createApp(App)
app.use(router)
app.use(store);
app.use(axios)
app.mount('#app')

// Ensure jQuery is available globally if needed
window.$ = window.jQuery = $;
