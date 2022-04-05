//createRouter用来新建路由实例，createWebHashHistory用来配置内部使用的hash模式的路由，也就是url上会通过 # 区分
import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../pages/index.vue'
import Login from '../pages/login.vue'


//引入两个组件about和home，根据不同的访问地址/和/about去渲染不同的组件，最后返回router

const routes = [
  {
    path: '/', //路径,根据路径匹配组件
    name: 'Index', 
    component: Index //组件
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router


