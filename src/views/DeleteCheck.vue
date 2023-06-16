<template>
  <div>
    <h1>削除チェック</h1>

      <li>ID: {{ selectedEmployee.id }}</li>
      <li>NAME: {{ selectedEmployee.name }}</li>
      <li>EMAIL: {{ selectedEmployee.email }}</li>
      <router-link to='users' role="button">
    <button type="submit" @click="deleteFetch">送信</button>
    </router-link>

    <router-link to='users'>
      <button>キャンセル</button>
    </router-link>



  </div>

</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useStore } from '@/stores/counter';

const url = 'http://localhost:8080/user/delete/';
const router = useRouter();
const {selectedEmployee} = useStore();


const props = defineProps({
  id: String
});

// DELETEメソッド
const deleteFetch = () => {
  if (!selectedEmployee.id) {
    console.error('IDが必要です'); 
    return;
  }

  const deleteUrl = url + selectedEmployee.id

  axios.delete(deleteUrl, {
    data: { id:selectedEmployee.id },
    headers: { "Content-Type": 'application/json' }

  })
    .then(response => {
      console.log(response.data); // 削除後の処理
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
</script>

