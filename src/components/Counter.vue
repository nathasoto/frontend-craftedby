
<template>
  <h1>hello</h1>
  <p>{{counter}}</p>
  <button @click="incrementar" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"> incrementy</button>
</template>

<script setup>
import {ref} from 'vue'
const counter = ref(0);
const incrementar = () =>{
  counter.value++

}
</script>

<style scoped>

</style>
