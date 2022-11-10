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
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

var app = createApp(App)
app.use(VueFontawesome)
    // app.mount('#app')
app.use(router).mount('#app')