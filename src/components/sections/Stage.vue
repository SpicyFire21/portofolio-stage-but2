<!-- Stage.vue -->
<template>
  <section
      id="stage"

      class="border border-[var(--primary)] w-full mx-auto px-25 py-24 flex flex-col gap-12"
  >
    <div class="flex flex-col gap-5">
      <h1 class="text-5xl font-bold text-[var(--black)]">
        Stage
      </h1>

      <p class="text-zinc-400 leading-8 max-w-5xl">
        Lors de mon stage chez IntyReality Solutions, j’ai participé au
        développement de l’application web DETEK, dédiée à la gestion de
        production de pièces fabriquées et assemblées en usine. Cette expérience
        m’a permis de développer des compétences en développement web,
        déploiement d’applications, architecture logicielle et Intelligence
        Artificielle.
      </p>
    </div>

    <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3"
    >
      <Card
          v-for="item in cards"
          :key="item.title"
          :title="item.title"
          :content="item.content"
      />
    </div>
  </section>
</template>

<script setup>
import Card from "@/components/Card.vue";

const cards = [
  {
    title: "Déploiement en cluster",
    content: [
      "Utilisation et apprentissage de Kubernetes",
      "Déploiement sur plusieurs NUC",
      "Gestion de services conteneurisés",
    ],
  },

  {
    title: "Développement frontend",
    content: [
      "Utilisation de React avec TypeScript",
      "Refactoring de composants",
      "Amélioration de l’interface utilisateur",
    ],
  },

  {
    title: "Développement backend",
    content: [
      "Implémentation d’une API REST en Python",
      "Manipulation de librairies backend",
      "Tentative d’implémentation de WebSockets",
    ],
  },

  {
    title: "Base de données",
    content: [
      "Conception de MCD",
      "Organisation des données",
      "Réflexion sur la structure relationnelle",
    ],
  },
];
</script>

<style scoped>

</style>