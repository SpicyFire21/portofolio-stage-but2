<template>
  <header>
  <div></div>
    <nav>
      <a v-for="(item,index) in buttons" :key="index" :href="item.href">{{item.name}}</a>
    </nav>
    <div></div>
  </header>
</template>

<script setup>

const buttons = [
  {href:"#presentation",name:"presentation"},
  {href:"#projets",name:"projets"},
  {href:"#competences",name:"competences"},
  {href:"#contact",name:"contact"},
]

</script>

<style scoped>

</style>