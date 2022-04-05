<template>
  <!-- <h1>这是登陆</h1> -->
  
  <!-- <router-link to="/">首页</router-link> -->
  <div class="login">
    <div>
      <label class="login-label">用户名：</label>
      <input v-model="userName">
    </div>
    <br />
    <div>
      <label class="login-label">密码：</label>
      <input v-model="password" @keyup.enter="handleLogin">
    </div>
    <button @click="handleLogin" class="login-button">登陆</button>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  // 声明变量
  const userName = ref('1')
  const password = ref('2')
  const router = useRouter();

  // 登陆
  function handleLogin() {
    if(userName.value && password.value) {
      login(userName.value, password.value)
      // return router.push({path: '/'})
    }
    // alert('请输入用户名和密码！')
  }
  // const login = (userName, password) => {
  //   const data = new FormData();
  //   data.append("userName", 1);
  //   data.append("password", 2);
  //   console.log(userName,'userName');
  //   console.log(password,'password');
  //   // data.append("captcha",fdf3);

  //   const xhr = new XMLHttpRequest();
  //   // 通过设置withCredentials 为true获得的第三方cookies,将会依旧享受同源策略
  //   // 因此不能被通过document.cookie或者从头部相应请求的脚本等访问
  //   xhr.withCredentials = true;

  //   // xhr.addEventListener("readystatechange", function(){
  //   //   console.log('this :>>', this);
  //   //   if(this.readyState === 4) {
  //   //     console.log(this.responseText);
  //   //   }
  //   // });

  //   xhr.open("PUT", "/api/user/login");  //http://loalihost:8002/user/login
  //   // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  //   xhr.send(data);
  //   console.log(data,'data')
  // }
  const login = (userName, password) => {
    const data = new FormData();
    data.append("userName", userName);
    data.append("password", password);
    data.append("captcha", "fdf3");

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;


    xhr.addEventListener("readystatechange", function() {
      console.log('this :>> ', this);
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("PUT", "/api/user/login");  // http://localhost:8002/user/login
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr.setRequestHeader("Cookie", "test=s%3AsT15asX2ew4OZxy1tShAzQXewy-EkqZR.Md7I7i36xH7k%2F0vaK%2B36F2jJsX1Jyh5p78umRKKnkgc");
    xhr.send(data);
  }

  
</script>
<style scoped>
  .login-label{
    width: 70px;
    display: inline-block;
  }
  .login-button{
    margin-top: 30px;
    cursor: pointer;
  }

</style>