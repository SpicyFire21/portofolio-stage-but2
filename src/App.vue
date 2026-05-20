<template>


  <div class="flex flex-col bg-[var(--dark-gray)] text-[var(--white)] px-40">
    <Header/>
    <main class="">
      <Hero/>
      <Presentation/>
      <Entreprise/>
      <Stage/>

      <Competences/>
      <Contact/>
    </main>
  </div>


</template>

<script setup>
import Hero from "@/components/layout/Hero.vue";
import Header from "@/components/layout/Header.vue";
import Presentation from "@/components/sections/Presentation.vue";
import Competences from "@/components/sections/Competences.vue";
import Entreprise from "@/components/sections/Entreprise.vue";
import Contact from "@/components/sections/Contact.vue";
import Stage from "@/components/sections/Stage.vue";
</script>
