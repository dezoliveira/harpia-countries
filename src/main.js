import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// router
import router from '@/router'

// store
import store from '@/store'

const app = createApp(App)

app.use(router, store)

app.mount('#app')
