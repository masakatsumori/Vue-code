<template>
  <div class = "container">

    <head>
  <title>INSERTUSER</title>
</head>
<body>

  <section>
    <h1>研修生を追加する</h1>

    <form @submit.prevent="insertFetch">
      <input type="text" v-model="selectedEmployee.name" size="30" maxlength="30" placeholder="名前">
      <input type="text" v-model="selectedEmployee.email" size="30" maxlength="30" placeholder="Email">
     
    </form>
  </section>
</body>

<router-link 
@click="() => selectEmployee(selectedEmployee.id, selectedEmployee.name, selectedEmployee.email)" 
:to="{ name: 'CreateCheck' }">
  <button>確認</button>
</router-link>

<router-link to='users'>
      <button>キャンセル</button>
    </router-link>

  </div>
</template>

<script setup>
import { useStore } from '@/stores/counter';

const {selectedEmployee, selectEmployee} = useStore();
</script>

<style scoped>

.a{
font-size:100;
}

</style>
