<template>
  <div id="app">




    <component :class="layout" :is="layout">    </component>
    <router-view/>

    <div id="nav" class="myBody">



      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <button class="btn btn-primary">111</button>

    </div>

  </div>
</template>


<script>
import GrayLayout from '@/layout/GrayLayout.vue'
import DarcLayout from '@/layout/DarcLayout.vue'
import WhiteLayout from '@/layout/WhiteLayout.vue'

export default {
  data(){
    return{
      layout: 'GrayLayout',
    }
  },
  components: {
    GrayLayout,
    WhiteLayout,
    DarcLayout
  }
}
</script>

<style scoped>

  @import '~bootstrap/dist/css/bootstrap.css';

  .myBody{
    padding-top: 100px;
  }

</style>
