import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts";
import Dinero from "dinero.js"
const app = createApp(App)
app.use(VueApexCharts);
app.use(Dinero);
app.mount('#app')
