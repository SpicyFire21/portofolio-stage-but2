<template>
  <Header/>
  <main>
    <Hero/>
    <Presentation/>
    <Competences/>
    <Entreprise/>
    <Contact/>
  </main>
</template>

<script setup>
import Hero from "@/components/layout/Hero.vue";
import Header from "@/components/layout/Header.vue";
import Presentation from "@/components/sections/Presentation.vue";
import Competences from "@/components/sections/Competences.vue";
import Entreprise from "@/components/sections/Entreprise.vue";
import Contact from "@/components/sections/Contact.vue";
</script>
