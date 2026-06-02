<template>


  <div class="flex flex-col bg-[var(--white)] text-[var(--primary)] ">
    <Header/>
    <main class="">
      <Hero/>

      <Presentation v-reveal/>
      <Entreprise v-reveal/>
      <Stage v-reveal/>
      <Competences v-reveal/>

      <Contact/>
    </main>
  </div>
  <StageDialog/>

</template>

<script setup>
import Hero from "@/components/layout/Hero.vue";
import Header from "@/components/layout/Header.vue";
import Presentation from "@/components/sections/Presentation.vue";
import Competences from "@/components/sections/Competences.vue";
import Entreprise from "@/components/sections/Entreprise.vue";
import Contact from "@/components/sections/Contact.vue";
import Stage from "@/components/sections/Stage.vue";
import StageDialog from "@/components/StageDialog.vue";
import {useStageStore} from "@/stores/stage.js";

const stageStore = useStageStore()

</script>
