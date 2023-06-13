<script setup>
import { ref } from 'vue';

const url = 'http://localhost:8080/user/delete/';
let id = ref(''); 

const deleteFetch = (employeeId) => {
  fetch(url + employeeId, {
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    mode:"cors"
  })
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error:', error);
  });
};

</script>

<template>
<head>
  <title>FetchでDELETE送信</title>
</head>
<body>
  <section>
    <h1>削除するユーザーは？</h1>
    <p>本当に削除してよろしいですか</p>
    <form @submit.prevent="deleteFetch">

      <input type="button" @click="deleteFetch" value="送信">      
    </form>
  </section>
</body>
</template>
