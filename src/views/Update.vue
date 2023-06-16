<template>
  <div class = "container">

    <head>
  <title>UPDATEUSER</title>
</head>
<body>
  
  <section>
    <h1>研修生を変更する</h1>
    <p>ID: {{selectedEmployee.id}}</p>
      <form>
      <input type="text" v-model="selectedEmployee.name" size="30" maxlength="30" placeholder="名前">
      <input type="text" v-model="selectedEmployee.email" size="30" maxlength="30" placeholder="Email">
    </form>
  </section>

      <router-link 
      @click="() => selectEmployee(selectedEmployee.id, selectedEmployee.name, selectedEmployee.email)" :to="{ name: 'UpdateCheck' }">
  <button>確認</button>
</router-link>


  <router-link to='users'>
      <button>キャンセル</button>
    </router-link>
</body>

  </div>
</template>

<script setup>

import { useStore } from '@/stores/counter';
const { selectedEmployee , selectEmployee} = useStore();
const props = defineProps({
  id: String
});


</script>

<style scoped>

.a{
font-size:100;
}

</style>