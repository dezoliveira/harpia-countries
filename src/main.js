// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Main CSS
import './assets/main.css'

// vue App and Create App
import { createApp } from 'vue'
import App from './App.vue'

// router
import router from '@/router'

// store
import store from '@/store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
