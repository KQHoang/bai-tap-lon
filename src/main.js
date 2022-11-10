import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from "./layout/product-detail.vue"
import CartVue from "./view/Cart.vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import VueFontawesome from "font-awesome/css/font-awesome.min.css";

const routes = [
    { path: '/product-detail', component: ProductDetail },
    { path: '/cart', component: CartVue },
    { path: '/mainproduct', component: MainProduct },
    { path: '/mainuser', component: MainUser }
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
import MainProduct from './view/MainProduct.vue'
import MainUser from './view/MainUser.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

var app = createApp(App)
app.use(VueFontawesome)
app.use(router).mount('#app')
app.use(ElementPlus)
    // createApp(App).mount('#app')