<template>
  <div class="fon">
    <h1>--------GrayLayout--------</h1>
    <GrayLayout3Button></GrayLayout3Button>
    <GrayLayoutList></GrayLayoutList>

  </div>
</template>

GrayLayout3Button
<script>
  import GrayLayout3Button from '@/components/GrayLayout/GrayLayout3Button.vue'
  import GrayLayoutList from '@/components/GrayLayout/GrayLayoutList.vue'

  export default {
    data(){
      return{
        layout: 'GrayLayout'
      }
    },
    components: {
      GrayLayout3Button,
      GrayLayoutList,

    }
  }
</script>
<style scoped>

  .fon{
    /*float: left;*/
    background: #8b8b33;
    /*position: fixed;*/

    display: block;
    width: 50%;
    margin: 10px auto;

    text-align: center;
  }

</style>