<template>
  <Header/>
  <main>
    <Hero/>
    <Presentation/>
    <Competences/>
    <Projects/>
    <Contact/>
  </main>
</template>

<script setup>
import Hero from "@/components/layout/Hero.vue";
import Header from "@/components/layout/Header.vue";
import Presentation from "@/components/sections/Presentation.vue";
import Competences from "@/components/sections/Competences.vue";
import Projects from "@/components/sections/Projects.vue";
import Contact from "@/components/sections/Contact.vue";
</script>
