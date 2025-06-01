import './bootstrap';

import { createApp } from 'vue'

import app from './components/app.vue'
import router from './router/index.js'
import axios from 'axios';

//configure based url for Axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

createApp(app).use(router).mount("#app")
