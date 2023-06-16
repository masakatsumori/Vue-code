<template>
  <div class="container">
    <router-link :to="`create`" class="button-a">
      <button type="submit" @click="deleteFetch">ユーザーを追加する</button>
    </router-link>

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
        <tr v-for="employee in paginatedEmployees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
        
          <router-link 
            to="/delete"
            @click="selectEmployee(employee.id, employee.name, employee.email)"
          >🗑️</router-link>

          <router-link 
            to="/update"
            @click="selectEmployee(employee.id, employee.name, employee.email)"
          >✒️</router-link>

        </tr>
      </tbody>
    </table>

    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#" @click="previousPage">◀️ </a></li>
        <!-- href="#"　はページのトップに戻るという意味 -->
        <!-- previousPageはもし、現在のページ数が1以上の時ページをデクリメントするという意味、 
        つまり、０の時は動作しない-->
      
        <li class="page-item" v-for="(page, index) in numberOfPages" :key="index"> 
          <!-- もし、numberOfPagesが３なら、(page, index)に0、1、2が格納される -->
          <!--この時点で index が、0、１、２ --> <!--IDは１、２、３--> 
               
          <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
         
        </li>
        <li class="page-item"><a class="page-link" href="#" @click="nextPage">▶️</a></li>
      </ul>
    </nav>
  </div>
</template>



<script setup>



import { ref, computed, onMounted, watchEffect } from 'vue';
//computedは数学的なことができる
//onMountedはライフサイクルフック
import axios from 'axios';
import { useStore } from '@/stores/counter';

const employees = ref([]);
//中に配列が入ってる　初期値は空の配列
const { selectEmployee } = useStore();
const itemsPerPage = 5;
//1ページあたりのアイテム数
const currentPage = ref(1);
//ページ数を表示する

const numberOfPages = computed(() => Math.ceil(employees.value.length / itemsPerPage));

//employees配列に含まれている要素の数
//valueはrefの値にアクセスできる
//ページが何個必要かを数えるためのもの
//computed(要素が変わるたびに再計算してくれる感じ

const paginatedEmployees = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  //1ページ目のインデックスを０にしたいから
  const end = start + itemsPerPage;
  return employees.value.slice(start, end);
  //１ページあたりに表示させる人を定義している
});

const changePage = (page) => {
  return currentPage.value = page;
};

const nextPage = () => {
  if (currentPage.value < numberOfPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};




onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:8080/user"); // 更新
    employees.value = res.data; // 更新
    console.log("employees.value.lengthの値は" +employees.value.length);
    console.log("currentPage.valueの値は" +currentPage.value)
    console.log("itemsPerpageの値は" +itemsPerPage)
    console.log(`numberOfPages.valueの値は${numberOfPages.value}`)

   
  } catch (err) {
    console.error(err);
  }
});



</script>
