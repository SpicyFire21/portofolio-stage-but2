<template>
  <header class=" w-full bg-[var(--white)]  border-b border-[var(--primary)] text-[var(--white)] flex flex-col items-center justify-center">
    <div class="text-black py-2 flex gap-5">
      <p>KHNAGUI Adam</p>
      <p>adam.khnagui@edu.univ-fcomte.fr</p>
    </div>
    <nav class="flex gap-16 pb-2">
      <p
          v-for="(item,index) in buttons"
          :key="index"

          @click="goTo(item.href)"
          class="relative text-[20px] no-underline transition-all duration-500 text-[var(--primary)] hover:text-[var(--accent )] hover:opacity-85 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[var(--primary)] after:transition-all after:duration-500 hover:after:w-full"
      >
        <p class="transition-all duration-300 hover:text-[var(--pink)]">{{ item.name }}</p>
      </p>
    </nav>
  </header>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter()

const buttons = [
  {href:"/",name:"Accueil"},
  {href:"/tech",name:"Technique"},
  {href:"/proj",name:"Projet"},
  {href:"/integration",name:"Integration"},

]

async function goTo(path){
  await router.push({path: path})
}
</script>