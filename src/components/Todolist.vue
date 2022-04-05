<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ active }} / {{ all }}</span>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue"
  import useTodos from '../utils/useTodos'

  let count = ref(1);
  let title = ref("");
  let todos = ref([{ title:'学习Vue',done:false}])
  let { x, y } = useMouse()
  function add() {
    count.value++
  }
  function addTodo() {
    todos.value.push({
      title:title.value,
      done:false,
    });
    title.value = "";
  }
  function clear() {
    todos.value = todos.value.filter((v) => !v.done);
  }
  let active = computed(() =>{
    return todos.value.filter((v) => !v.done).length;
  });
  let all = computed(() => todos.value.length);
  let allDone = computed({
    get: function() {
      return active.value === 0;
    },
    set: function() {
      todos.value.forEach((todo) => {
        todo.done = value;
      });
    },
  });
</script>

<style>
  h1{
    color: red;
  }
</style>

