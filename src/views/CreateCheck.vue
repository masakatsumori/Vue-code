<template>
  <div>

    <h1>本当に追加してよろしいですか</h1>
    <p>名前: {{ selectedEmployee.name }}</p>
    <p>メールアドレス: {{ selectedEmployee.email }}</p>

    <router-link to='users' role="button">
    <button type="submit" @click="insertFetch()">登録</button>
    </router-link>


    <router-link to='users'>
      <button>キャンセル</button>
    </router-link>


  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useStore } from '@/stores/counter';

const store = useStore();

const insertUrl= 'http://localhost:8080/user/insert';
const router = useRouter();
const {selectedEmployee} = useStore();

const insertFetch = () => {
  if (!selectedEmployee.name) {
    console.error('名前が入力されてません'); 
    return;
  } else if (!selectedEmployee.email) {
    console.error('メールアドレスが入力されてません'); 
    return;
  }

  axios.post(insertUrl, {
          id : 0,
        name :selectedEmployee.name,
       email :selectedEmployee.email
    },{
    headers: {"Content-Type": 'application/json'}
  })

    .then(response => {
      console.log(response.data); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

</script>

<style scoped>
</style>
