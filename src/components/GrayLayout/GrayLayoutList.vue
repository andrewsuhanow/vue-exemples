<template>
  <div class="fon">

    <ul class="ulEl">
      <router-link
              v-for="el in links"
              :key="el.url"
              tag="li"
              :to='el.url'
      >
        <a href="#" >{{el.title}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {url: '/Site1', title:'11111'},
      {url: '/Site2', title:'22222'},
      {url: '/Site3', title:'33333'},
      {url: '/Site4', title:'44444'},
      {url: '/Site5', title:'55555'},
      {url: '/Site6', title:'66666'},
    ],
  })
}
</script>


<style scoped>
  ul li{
    display: inline;
  }

  ul li a{
    margin: 10px;
  }
</style>