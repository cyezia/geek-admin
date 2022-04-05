<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="你好，极客时间" /> -->
  <div>
    <!-- 
      router-link router-view 是由vue-router注册的全局组件 
      router-link 负责跳转不同页面，相当于Vue世界中的超链接 a 标签
      router-view 负责渲染路由匹配的组件，可通过把router-view放在不同的地方，实现复杂项目的页面布局
    -->
    <!-- <router-link to="/">首页</router-link> |
    <router-link to="/about">关于</router-link> -->
  </div>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
