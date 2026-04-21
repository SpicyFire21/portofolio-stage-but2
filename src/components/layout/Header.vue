<template>
  <header class="flex justify-center">
    <nav class="flex gap-8">
      <a
          v-for="(item,index) in buttons"
          :key="index"
          :href="item.href"
          class="relative text-[20px] no-underline transition-all duration-500 hover:text-[var(--pink)] hover:opacity-85 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[var(--pink)] after:transition-all after:duration-500 hover:after:w-full"
      >
        <p class="transition-all duration-1200 hover:text-[var(--pink)]">{{ item.name }}</p>
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