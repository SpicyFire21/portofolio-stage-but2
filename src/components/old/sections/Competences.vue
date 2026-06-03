<template>
  <section id="competences" class="w-full mx-auto  py-24 flex flex-col gap-8">

    <div class="flex flex-col gap-4 px-24 ">
      <h1 class="pb-2 text-5xl font-bold text-[var(--black)]">
        Compétences
      </h1>
      <p class="text-zinc-400 max-w-4xl leading-8">
        Durant mon stage chez IntyReality Solutions, j’ai pu mettre en pratique
        plusieurs compétences techniques et professionnelles du BUT
        Informatique.
      </p>
    </div>



      <div class="flex flex-col">
        <div
            v-for="competence in competences"
            :key="competence.title"
            class="bg-[var(--white)] border-t border-b border-[var(--muted)] px-25 py-8 flex flex-col gap-6"
        >
          <!-- Header -->
          <div class="flex flex-col gap-2">
            <h2 class="text-3xl font-semibold text-[var(--primary)]">
              {{ competence.title }}
            </h2>

            <span class="text-zinc-400">
          {{ competence.subtitle }}
        </span>
          </div>

          <!-- AC -->
          <div class="flex flex-col gap-5">
            <div
                v-for="ac in competence.items"
                :key="ac.title"
                class="border border-[var(--muted)] p-5 flex flex-col gap-3"
            >
              <h3 class="text-lg font-semibold text-[var(--primary)]">
                {{ ac.title }}
              </h3>

              <p class="text-zinc-400 leading-7 whitespace-pre-line">
                {{ ac.content }}
              </p>
            </div>
          </div>
        </div>
      </div>








  </section>
</template>

<script setup>
const competences = [
  {
    title: "Compétence 1",
    subtitle: "Réaliser un développement d'application",

    items: [
      {
        title: "AC1 — Choisir et implémenter les architectures adaptées",
        content: "Lors de mon stage chez IntiReality Solutions, j'ai activement participé à la refactorisation du code existant de l'application DETEK. Cela m'a demandé de comprendre le code existant afin de m'assurer de sa fonction. J'ai travaillé sur la base de données en réalisant un  Modèle Conceptuel de Données (MCD) afin de proposer une base de données qui respecte un format de données normalisés avec des relations correctement établies en inculant les nouvelles entités necessaires pour les fonctionnalités tel que l'enregistrement des logs. " +
            "Le MCD finale a été réalisé sur plusieurs itérations afin de respecté l'objectif finale de DETEK."+
            "\n\n J'ai egalement du travaillé sur le backend qui avait besoin d'être réorganisé afin de proposer un architecture plus lisible, évolutive et cohérente avec l'architecture finale en cluster prévue pour le projet que j'ai proposé vers la fin de mon stage." +
            "L'objectif était de séparé les services différents afin de pouvoir répartie la consommation de ressources et donc proposer un cluster plus performant." +
            "Enfin, j'ai eu aussi l'occasion de travaillé sur la partie frontend qui avait aussi besoin d'un refactoring afin d'avoir une architecture plus saines pour ajouter les fonctionnalités développées dans le backend au frontend."+
            "\n\n Le refactoring de ces trois parties ont été la tache presque principale de mon stage car l'application fut globalement developpée avec l'intelligence artificielle, ce qui m'a demandé de créé une base plus propre afin de pourvoir proposer une version plus stable de l'application. J'ai pu proposer des choix d'architecture qui ont satisfait l'équipe, implémenté une authentification JWT persisante coté serveur ainsi qu'un prototype d'un système de logs."
            + "J'ai également proposé une version normalisé de la base de données utilisé dans le projet." +
            "\n\n Grâce a ce stage, j'ai developpé mes compétences dans la conception de base de données, mes compétences en tant qu'architecte logiciel ainsi qu'en tant que developpeur backend."
      },

      {
        title: "AC2 — Faire évoluer une application existante",
        content: "Lors de mon stage chez IntiReality Solutions, j'ai activement participé à la refactorisation du code existant de l'application DETEK. Cela m'a demandé de comprendre le code existant afin de m'assurer de sa fonction. J'ai travaillé sur la base de données en réalisant un  Modèle Conceptuel de Données (MCD) afin de proposer une base de données qui respecte un format de données normalisés avec des relations correctement établies en inculant les nouvelles entités necessaires pour les fonctionnalités tel que l'enregistrement des logs. " +
            "Le MCD finale a été réalisé sur plusieurs itérations afin de respecté l'objectif finale de DETEK."+
            "\n\n J'ai egalement du travaillé sur le backend qui avait besoin d'être réorganisé afin de proposer un architecture plus lisible, évolutive et cohérente avec l'architecture finale en cluster prévue pour le projet que j'ai proposé vers la fin de mon stage." +
            "L'objectif était de séparé les services différents afin de pouvoir répartie la consommation de ressources et donc proposer un cluster plus performant." +
            "Enfin, j'ai eu aussi l'occasion de travaillé sur la partie frontend qui avait aussi besoin d'un refactoring afin d'avoir une architecture plus saines pour ajouter les fonctionnalités développées dans le backend au frontend."+
            "\n\n Le refactoring de ces trois parties ont été la tache presque principale de mon stage car l'application fut globalement developpée avec l'intelligence artificielle, ce qui m'a demandé de créé une base plus propre afin de pourvoir proposer une version plus stable de l'application. J'ai pu proposer des choix d'architecture qui ont satisfait l'équipe, implémenté une authentification JWT persisante coté serveur ainsi qu'un prototype d'un système de logs."
            + "J'ai également proposé une version normalisé de la base de données utilisé dans le projet." +
            "\n\n Grâce a ce stage, j'ai developpé mes compétences dans la conception de base de données, mes compétences en tant qu'architecte logiciel ainsi qu'en tant que developpeur backend."
      },

      {
        title: "AC3 — Adopter de bonnes pratiques de conception et de programmation",
        content: "à compléter"
      }
    ]
  },

  {
    title: "Compétence 4",
    subtitle: "Gérer des données de l’information",

    items: [
      {
        title: "AC3 — Concevoir une base de données relationnelle",
        content: "à compléter"
      },

      {
        title: "AC1 — Optimiser les modèles de données",
        content: "à compléter"
      }
    ]
  },

  {
    title: "Compétence 6",
    subtitle: "Collaborer au sein d’une équipe informatique",

    items: [
      {
        title: "AC4 — Rendre compte de son activité professionnelle",
        content: "à compléter"
      }
    ]
  }
]
</script>

