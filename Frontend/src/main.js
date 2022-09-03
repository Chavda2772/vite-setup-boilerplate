import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Extra Packages
import commonPlugin from '@/plugins/CommonPlugins'
import './index.css'

createApp(App).use(router).use(store).use(commonPlugin).mount('#app')
