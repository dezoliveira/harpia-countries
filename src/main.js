// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Main CSS
import './assets/main.css'

//Font Awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faSearchLocation)

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
app.component("fa-icon", FontAwesomeIcon)
app.mount('#app')
