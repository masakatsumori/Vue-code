import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../src/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//たくさんファイルがあるからインポートして指定する必要がある


import App from './App.vue'


import router from './router'
//router(inex.js)

const app = createApp(App)

app.use(createPinia())
app.use(router)
//app.use(pinia)

app.mount('#app')
//console.log(pinia)



//これは　index.htmlの<div id="app"></div>の部分
//index.htmlの中を埋めてるってこと

