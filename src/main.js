import { createApp } from 'vue'
import App from './App.vue'

//加载router的配置
import router from './router/index'

createApp(App).use(router).mount('#app')

