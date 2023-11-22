import './assets/main.css'
import './json/default.json'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.mount('#app')
