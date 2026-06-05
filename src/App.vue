<template>


  <div class="flex flex-col bg-[var(--white)] text-[var(--primary)] ">
    <Header/>
    <main class="h-full mx-10 border-l border-r border-[var(--primary)]">

      <RouterView/>

      <Footer/>
    </main>

  </div>


</template>

<script setup>
import Header from "@/components/layout/Header.vue";


import Section from "@/components/Section.vue";
import Footer from "@/components/layout/Footer.vue";




</script>
