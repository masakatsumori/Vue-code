<template>
  <div class = "container">

    <head>
  <title>UPDATEUSER</title>
</head>
<form id="updateForm">
        <label for="newName">新しい名前:</label><br>
        <input type="text" id="newName" name="newName"><br>
        <label for="oldName">ふるい名前:</label><br>
        <input type="text" id="oldName" name="oldName"><br>
        <input type="submit" value="送信">
    </form>



  </div>

</template>

<script setup>

// import { ref } from 'vue';
// const url = 'http://localhost:8080/user/update';
// let newName = '';
// let oldName = '';

// const updateFetch = async () => {
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         "newName": newName,
//         "oldName": oldName
//       })
//     });

//     if(!response.ok) {
//       console.log('エラー!');
//     } else {
//       console.log('成功!');
//       const data = await response.json();
//       console.log(data);
//     }

//   } catch (error) {
//     console.log(error);
//   }
// };

// updateFetch();

  

  
</script>

<style scoped>

.a{
font-size:100;
}

</style>