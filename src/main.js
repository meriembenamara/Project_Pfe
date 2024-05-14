import { createApp } from 'vue'
import App from './App.vue'
//import css
import './assets/css/app.css'
//import router
import router from './router'
import store from '../store'; // Importer le magasin Vuex

import axios from "axios"
const app = createApp(App)
app.use(router)
app.use(store);
app.use(axios)
app.mount('#app')


