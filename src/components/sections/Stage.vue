<template>
  <section id="stage">
    <h2>Stage</h2>
    <p>Lors de mon stage chez IntiReality Solutions, j’ai participé au développement de l’application web DETEK, dédiée à la gestion de production de pièces frabriquées et/ou assemblées par l'usine. Cette expérience m’a permis de développer de nouvelles compétences en programmation, en deployement d'applications mais aussi dans le domaine de l'Intelligence Artificielle.</p>

    <div class="flex">
      <Card :title="item.title" :content="item.content" v-for="item in cards"/>

    </div>

  </section>
</template>

<script setup>
import Card from "@/components/Card.vue";

const cards = [
  { title:"Deployement en cluster", content:["utilisation et apprentisage de kubernetes","deployement sur plusieurs NUC"]},
  { title:"Developement frontend", content:["utilisation et apprentisage du framework React avec TypeScript","Refactoring"]},
  { title:"Developement backend", content:["utilisation et apprentisage de librairie Python pour l'implémentation d'une API REST", " tentative d'implémentation de Websockets"]},
  { title:"Base de données", content:["Conception de Modèle Conceptuel de Données"]},
]


</script>

<style scoped>



section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>