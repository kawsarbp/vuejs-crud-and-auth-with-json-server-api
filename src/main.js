import { createApp } from 'vue'
import App from './App.vue'
import router from "@/routes/routes";
//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

createApp(App).use(router).mount('#app')
