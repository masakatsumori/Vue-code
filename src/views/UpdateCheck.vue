<template>
  <div>
    <h1 class= a>本当に編集して本当によろしいですか？</h1>
    <p>名前: {{ selectedEmployee.name }}</p>
    <p>メールアドレス: {{ selectedEmployee.email }}</p>


    <button type="submit" @click="updateFetch">更新</button>
    <button @click="cancel">キャンセル</button>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
import axios from 'axios';
import { useStore } from '@/stores/counter';

const store = useStore();
const { selectedEmployee } = store;
const url= 'http://localhost:8080/user/update/';
const router = useRouter();


const updateFetch = () => {
  const updateUrl = url + selectedEmployee.id;

  if (!selectedEmployee.name) {
    console.error('名前が入力されてません'); 
    return;
  } else if (!selectedEmployee.email) {
    console.error('メールアドレスが入力されてません'); 
    return;
  }

  axios.post(updateUrl, {
      id :selectedEmployee.id,
      name :selectedEmployee.name,
      email :selectedEmployee.email
    },{
    headers: {"Content-Type": 'application/json'}
  })
  .then(response => {
    console.log(response.data); 
    router.push('/users');  
  })
  .catch(error => {
    console.error('Error:', error);
  });
};

const cancel = () => {
  router.push('/users');  
};

</script>

<style scoped>
.a{
  margin-left : 100px;
}

</style>
