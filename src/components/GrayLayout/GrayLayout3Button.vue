<template>
  <div class="fon">

    <button @click="$emit('FOOclick')"> передать выше</button>


  </div>
</template>


<style scoped>

  .fon {
    float: left;
  }

  ul li{
    display: inline;
  }

  ul li a{
    margin: 10px;
  }
</style>