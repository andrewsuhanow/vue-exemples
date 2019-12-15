<template>
  <div class="about">
    <h1>----------    site1   -----------</h1>
    <button @click="click1"> {{ msg }}</button>
    <input type="text" @input="msg = $event.target.value">
    <div>fffff:  {{ msg }}</div>
    <br>




  </div>
</template>



<script>
  export default {
    name: 'Site1',
    // base(){
    //   return{
    //     msg: 'NULL'
    //   }
    // },
    data: () => ({
        msg: 'NULL'
    }),
    methods: {
      click1(){
        this.msg = 'null'
      }
    }
  }
</script>