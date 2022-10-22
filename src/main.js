import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueFontawesome from "font-awesome/css/font-awesome.min.css";
var app = createApp(App)
app.use(VueFontawesome)
app.mount('#app')
    // createApp(App).mount('#app')