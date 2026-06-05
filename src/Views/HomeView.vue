<template>
  <div class="flex flex-col items-center">
    <Section
        title="Presentation"
        subtitle=""
        text="Bienvenue sur mon portfolio, réalisé dans le cadre de mon stage de 2e année en BUT Informatique. Vous y découvrirez les compétences que j’ai développées tout au long de mon stage, sur l'entreprise, ainsi que des exemples concrets du projet DETEK dans lequel j'ai travaillé durant mon stage de quatrième semestre. Ce portfolio met en lumière les connaissances techniques et professionnelles que j’ai pu acquérir et mettre en pratique dans un contexte réel.

IntiReality Solutions est une entreprise qui utilise la vision IA afin de développer des solutions pour des objectifs industriels. Dirigée par Luis CONTRERAS, ainsi que son frère Alvaro CONTRERAS. L'entreprise exerce ses activités à Besançon et est surtout spécialisée dans la vision IA."
        :image=[]
    ></Section>


    <Section
        title="Entreprise : Qui est IntiReality Solutions"
        subtitle=""
        text="IntiReality Solutions est une entreprise localisée à Besançon spécialisée dans l'automatisation de productions industrielles via l'utilisation de vision artificielle, c'est pourquoi ils développent une application web qui se nomme DETEK afin de proposer aux industriels un moyen efficace de contrôler leurs productions de pièces selon des cas d'usages proposés par l'application. IntiReality Solutions a pour objectif de déployer DETEK localement chez les industriels."
        :image="[logo]"
    ></Section>

    <Section
        title="Entreprise : L'équipe"
        subtitle=""
        text="
        L'effectif de IntiReality Solutions est de 5 personnes, tout le monde touche à tous les domaines tels que la vision artificielle mais aussi le développement d'application."
        :image="[]"
    ></Section>

    <Section
        title="Entreprise : Les moyens de travail"
        subtitle=""
        text="Pour ce qui est des moyens de travail, l'entreprise possède un petit local assez grand pour avoir deux bureaux. Au début de mon stage, j'ai travaillé sur un NUC qu'on m'a fourni, par la suite, on m'a fourni un deuxième NUC afin que je puisse m'essayer au déploiement en cluster sur plusieurs NUCs."
        :image="[]"
    ></Section>

    <Section
        title="Sujet : Quel est mon sujet ?"
        subtitle=""
        text="Lors de mon stage chez Intireality Solutions, j'ai eu l'occasion de travailler sur le projet DETEK, en tant que développeur Full-Stack, afin de développer des fonctionnalités mais aussi de réorganiser le code existant. J'ai dû aussi travailler sur le déploiement de l'application en cluster multi-NUCs."
        :image="[]"
    ></Section>

    <Section
        title="Sujet : Les objectifs"
        subtitle=""
        :text="`Les objectifs principaux étaient de déployer DETEK dans un cluster multi NUCs mais aussi d'ajouter des fonctionnalités au projet telles qu'une authentification JWT avec droit, un système de logs. De plus, j'ai aussi proposé des choix d'architecture afin de rendre le code de DETEK plus évolutif.`"
        :image="[]"
    ></Section>

    <Section
        title="Sujet : Les enjeux"
        subtitle=""
        :text="`Les enjeux de ce projet sont de faire gagner du temps aux usines afin de les aider à assurer la production de pièces en bon état.`"
        :image="[]"
    ></Section>



    <Section
        title="Synthèse"
        subtitle=""
        :text="`Lors de mon stage chez IntiReality Solutions, j'ai mobilisé plusieurs savoir-faire généraux dans le cadre du développement d'application web. J'ai notamment développé des compétences en <b><u>développement d'interface web avec React Typescript</u></b>, en les rendant réutilisables au mieux tout en assurant une connexion stable avec le backend. J'ai également proposé un <b><u>refactoring du backend</u></b> en suivant au mieux le plan d'architecture que j'ai proposé pour l'implémentation future en cluster tout en ajoutant des fonctionnalités telles qu'une <b><u>authentification JWT persistante côté serveur</u></b> en assurant au mieux de prévenir certaines attaques courantes auxquelles cette stratégie d'authentification est sensible. J'ai aussi proposé un <b><u>déploiement en cluster multi NUCs</u></b> dans l'objectif de déployer le projet en local chez les industriels. Ce stage m'a aussi donné l'occasion de développer mon savoir-faire en suivi de projet via des <b><u>réunions avec l'équipe un jour sur deux</u></b> afin de partager l'avancement et les objectifs suivants de chacun, mais aussi sur <b><u>la gestion du code avec GitLab</u></b>. Enfin, mon intégration dans l'entreprise a été marquée par la <b><u>prise en main d'un projet développé via l'intelligence artificielle</u></b> ainsi que les <b><u>échanges avec les différents membres de l'équipe.</u></b>`"
        :image=[]
    >
      <Bulles :tech="tech"/>

    </Section>
  </div>
</template>

<script setup>
import logo from "@/assets/img/intiReality_logo.png"
import Section from "@/components/Section.vue";
import Bulles from "@/components/Bulles.vue";


const tech = [
  {
    name: "React",
    image: "React",
    description: "Framework Javascript",
    color: "bg-cyan-400"
  },

  {
    name: "TypeScript",
    image: "TypeScript",
    description: "Version typée de JavaScript",
    color: "bg-blue-500"
  },

  {
    name: "CSS",
    image: "CSS",
    description: "Langage de style",
    color: "bg-sky-500"
  },

  {
    name: "Python",
    image: "Python",
    description: "Backend avec FastAPI",
    color: "bg-yellow-400"
  },

  {
    name: "PostgreSQL",
    image: "PostgreSQL",
    description: "Base de données relationnelle",
    color: "bg-indigo-500"
  },

  {
    name: "Kubernetes",
    image: "Kubernetes",
    description: "Orchestrateur de conteneurs",
    color: "bg-blue-400"
  },

  {
    name: "Docker",
    image: "Docker",
    description: "Conteneurisation",
    color: "bg-sky-400"
  },

  {
    name: "Garage",
    image: "Garage",
    description: "Serveur S3 multi noeuds",
    color: "bg-orange-400"
  },

  {
    name: "NATS",
    image: "NATS",
    description: "Bus de message",
    color: "bg-green-400"
  },
  {
    name: "GIT",
    image: "GIT",
    description: "Système de contrôle de version",
    color: "bg-green-400"
  }
]

</script>
