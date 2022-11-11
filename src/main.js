import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import VueFontawesome from "font-awesome/css/font-awesome.min.css";
import MainProduct from './view/MainProduct.vue'
import MainUser from './view/MainUser.vue'
import HomeLayout from './layout/home.vue'
import LoginLayout from './layout/main.vue'
import ProDetail from './layout/product-detail.vue'
import Cart from './layout/cart.vue'

const routes = [
    { path: '/mainproduct', component: MainProduct },
    { path: '/mainuser', component: MainUser },
    { path: '/home', component: HomeLayout },
    { path: '/login', component: LoginLayout },
    { path: '/detail/:id/:orderid', component: ProDetail },
    { path: '/shopcart', component: Cart },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

var app = createApp(App)
app.use(VueFontawesome)
app.use(router).mount('#app')
app.use(ElementPlus)
    // createApp(App).mount('#app')