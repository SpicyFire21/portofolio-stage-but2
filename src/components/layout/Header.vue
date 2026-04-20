<template>
  <header>
    <nav>
      <a
          v-for="(item,index) in buttons"
          :key="index"
          :href="item.href"
      >
        {{ item.name }}
      </a>
    </nav>
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
nav {
  display: flex;
  gap: 30px;
}

a {
  position: relative;
  font-size: 20px;

  text-decoration: none;
  transition: color 0.5s ease, opacity 0.5s ease;
}

/* ligne animée */
a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: var(--pink);
  transition: width 0.5s ease;
}

a:hover {
  color: var(--pink);
  opacity: 0.85;
}

a:hover::after {
  width: 100%;
}
</style>