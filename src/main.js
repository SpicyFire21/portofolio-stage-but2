import './assets/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import scrollReveal from "@/directives/scrollReveal.js";


const app = createApp(App)

app.use(createPinia())

app.directive("reveal", scrollReveal)


app.mount('#app')
