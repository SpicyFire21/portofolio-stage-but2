import './assets/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import scrollReveal from "@/directives/scrollReveal.js";
import '@fortawesome/fontawesome-free/css/all.css';
import router from "@/router/index.js";


const app = createApp(App)

app.use(createPinia())

app.directive("reveal", scrollReveal)

app.use(router)

app.mount('#app')
