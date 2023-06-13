<template>
  <div class = "container">

    <head>
  <title>UPDATEUSER</title>
</head>
<body>
  <section>
    <h1>誰を追加する</h1>
    <p>本当についかしてよろしいですか</p>
    <form @submit.prevent="updateFetch">
      <input type="text" v-model="id" size="30" maxlength="30" placeholder="Enter ID">
      <input type="button" @click="deleteFetch" value="送信">
 

      <input type="text" v-model="id" size="30" maxlength="30" placeholder="Enter ID">
      <input type="button" @click="deleteFetch" value="送信"> 
    </form>
  </section>
</body>


  </div>

</template>

<script setup>

import { ref } from 'vue';
const url = 'http://localhost:8080/user/update';
let newName = '飯田英寛';
let oldName = '飯田 英寛';

const updateFetch = async () => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "newName": newName,
        "oldName": oldName
      })
    });

    if(!response.ok) {
      console.log('エラー!');
    } else {
      console.log('成功!');
      const data = await response.json();
      console.log(data);
    }

  } catch (error) {
    console.log(error);
  }
};

updateFetch();

  

  
</script>

<style scoped>

.a{
font-size:100;
}

</style>