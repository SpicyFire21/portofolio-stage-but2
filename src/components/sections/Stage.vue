<!-- Stage.vue -->
<template>
  <section id="stage" class="border-t border-b border-[var(--primary)] w-full mx-auto px-25 py-24 flex flex-col gap-12">
    <div class="flex flex-col gap-5">
      <h1 class="pb-2 text-5xl font-bold text-[var(--black)]">Stage</h1>
      <p class="text-zinc-400 leading-8 max-w-5xl">
        Lors de mon stage chez IntyReality Solutions, j’ai participé au
        développement de l’application web DETEK, dédiée à la gestion de
        production de pièces fabriquées et assemblées en usine. Cette expérience
        m’a permis de développer des compétences en développement web,
        déploiement d’applications, architecture logicielle et Intelligence
        Artificielle.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
      <Card
          v-for="item in cards"
          :key="item.title"
          :title="item.title"
          :content="item.content"
          :tech="item.tech"

          v-bind="item"
          @open="openDialog"

      />
    </div>

    <StageDialog
        :selected="selected"
        @close="selected = null"
    />

  </section>
</template>

<script setup>
import Card from "@/components/Card.vue";
import StageDialog from "@/components/StageDialog.vue";
import {ref} from "vue";

const cards = [
  {
    title: "Développement frontend",
    content: [
      "Refactoring de composants",
      "Amélioration de l’interface utilisateur",
    ],
    tech:[
      {
        name: "React",
        image: "React",
        description: "Framework Javascript"
      },
      {
        name: "TypeScript",
        image: "TypeScript",
        description: "Version typé de JavaScript"
      },
      {
        name: "CSS",
        image: "CSS"
      }

    ],
    details:"details frontend"
  },

  {
    title: "Développement backend",
    content: [
      "Implémentation d’une API REST en Python",
      "Manipulation de librairies backend",
      "Tentative d’implémentation de WebSockets",
    ],
    tech:[
      {
        name: "Python",
        image: "Python",
        description: "Python avec l'utilisation de la librairie FastAPI"
      }
    ],
    details:"details backend"
  },

  {
    title: "Base de données",
    content: [
      "Conception de MCD",
      "Réflexion sur la structure relationnelle",
    ],
    tech:[
      {
        name: "PostgreSQL",
        image: "PostgreSQL",
        description: "Moteur de base de données relationnelle"
      }
    ],
    details:"details bdd"
  },
  {
    title: "Déploiement en cluster",
    content: [
      "Utilisation et apprentissage de Kubernetes",
      "Déploiement sur plusieurs NUC",
      "Gestion de services conteneurisés",
    ],
    tech:[
      {
        name: "Kubernetes",
        image: "Kubernetes",
        description: "plateforme de gestion automatique de conteneurs"
      },
      {
        name: "Docker",
        image: "Docker",
        description: "outil qui permet de créer et exécuter des applications dans des conteneurs"
      }
    ],
    details:"details cluster"
  },
  {
    title: "Déploiement de services",
    content: [
      "Déploiement du serveur S3 Garage",
      "Déploiement du serveur d'un bus de message NATS"
    ],
    tech:[
      {
        name: "Garage",
        image: "Garage",
        description: "Serveur S3 multi noeuds"
      },
      {
        name: "NATS",
        image: "NATS",
        description: "Serveur de bus de message"
      }
    ],
    details:"details services"
  }
];

const selected = ref(null)

function openDialog(data) {
  selected.value = data
}


</script>

<style scoped>

</style>