import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueFontawesome from "font-awesome/css/font-awesome.min.css";
import MainProduct from './view/MainProduct.vue'
import MainUser from './view/MainUser.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const routes = [
    {path: '/mainproduct', component: MainProduct},
    {path: '/mainuser', component: MainUser}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

var app = createApp(App)
app.use(VueFontawesome)
app.use(router).mount('#app')
app.use(ElementPlus)
    // createApp(App).mount('#app')