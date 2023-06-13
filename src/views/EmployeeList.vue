
<template>

  <div form class = "container">
 
   
    <button class="button-a">＋</button>
    

    <h1 class="h1">研修生一覧</h1>
    <br>
    <br>
    <br>

  
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>削除</th>
          <th>編集</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <!-- <td><button @click="() => deleteFetch(employee.id)">🗑️</button></td> -->
          <router-link :to="`/delete/${employee.id}`">🗑️</router-link>
          <router-link :to="`/update/${employee.id}`">✒️</router-link>

       
        </tr>
      </tbody>
    </table>
  </div>

  
 

</template>

<script setup>

 import { ref, onMounted } from 'vue';
import DeleteCheck from './DeleteCheck.vue';

const employees = ref([]);

onMounted(async () => {
  try {
    const res = await fetch("http://localhost:8080/user");
    if (!res.ok) {
      throw new Error("Network is error. We couldn't call API.");
    }
    const jsonData = await res.json();
    employees.value = jsonData;
  } catch (err) {
    console.error(err);
  }
});
</script>


<style scoped>
h1 {
  font-size: 40px;
  text-align: center;
  
}

table {
  width: 100%;
  max-width: 500%;
}

td {
  height: 20px;
  color: rgb(64, 76, 74);
  background: transparent;
  text-align: center;
  vertical-align: center;
  border: 1px #2b2b2b solid;
}

.button-a {
  display: block;
  margin-left:auto;
}
</style>
