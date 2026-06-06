<template>
  <div class="flex flex-col items-center">
    <Section
        title="Presentation"
        subtitle=""
        :text="`Bienvenue sur mon portfolio, réalisé dans le cadre de mon <b>stage de 2e année en BUT Informatique.</b> Vous y découvrirez les compétences que j’ai développées tout au long de mon stage, sur l'entreprise, ainsi que des exemples concrets du projet dans lequel j'ai travaillé durant mon stage de quatrième semestre. Ce portfolio met en lumière les connaissances techniques et professionnelles que j’ai pu acquérir et mettre en pratique dans un contexte réel.

IntiReality Solutions est une entreprise qui utilise la vision IA afin de développer des solutions pour des objectifs industriels. Dirigée par <b>Luis CONTRERAS</b>, ainsi que son frère <b>Alvaro CONTRERAS.</b> L'entreprise exerce ses activités à Besançon et est surtout spécialisée dans la vision IA.`"
        :image=[]
    ></Section>


    <Section
        title="Entreprise : Qui est IntiReality Solutions"
        subtitle=""
        :text="`<b>IntiReality Solutions</b> est une entreprise localisée à <b>Besançon</b> spécialisée dans <b>l'automatisation de productions industrielles via l'utilisation de vision artificielle</b>, c'est pourquoi ils développent une <b>application web</b> qui se nomme <b>DETEK</b> afin de proposer aux industriels un moyen efficace de <b>contrôler leurs productions de pièces</b> selon des cas d'usages proposés par l'application. <b>IntiReality Solutions</b> a pour objectif de <b>déployer DETEK localement chez les industriels.</b>`"
        :image="[logo]"
        link="https://intireality.com/fr"
    ></Section>
      <em class="pt-10">Cliquez sur le logo pour visiter le site de l'entreprise.</em>
    <Section
        title="Entreprise : L'équipe"
        subtitle=""
        :text="`
        L'effectif de IntiReality Solutions est de <b>5 personnes</b>, tout le monde touche à tous les domaines tels que la vision artificielle mais aussi le développement d'application.`"
        :image="[]"
    ></Section>

    <Section
        title="Entreprise : Les moyens de travail"
        subtitle=""
        :text="`Pour ce qui est des moyens de travail, l'entreprise possède un petit local assez grand pour avoir deux bureaux. Au début de mon stage, j'ai travaillé sur un <b>NUC</b> qu'on m'a fourni, par la suite, on m'a fourni un deuxième NUC afin que je puisse m'essayer au <b>déploiement en cluster sur plusieurs NUCs.</b>`"
        :image="[]"
    ></Section>

    <Section
        title="Sujet : Quel est mon sujet ?"
        subtitle=""
        :text="`Lors de mon stage chez Intireality Solutions, j'ai eu l'occasion de travailler sur le projet <b>DETEK</b>, en tant que <b>développeur Full-Stack</b>, afin de <b>développer des fonctionnalités</b> mais aussi de <b>réorganiser le code</b> existant. J'ai dû aussi travailler sur le <b>déploiement de l'application en cluster multi-NUCs.</b>`"
        :image="[]"
    ></Section>

    <Section
        title="Sujet : Les objectifs"
        subtitle=""
        :text="`Les objectifs principaux étaient de déployer DETEK dans un cluster multi NUCs mais aussi d'ajouter des fonctionnalités au projet telles qu'une <b>authentification JWT avec droit</b>, un <b>système de logs.</b> De plus, j'ai aussi proposé des <b>choix d'architecture</b> afin de rendre le code de DETEK plus évolutif.`"
        :image="[]"
    ></Section>

    <Section
        title="Sujet : Les enjeux"
        subtitle=""
        :text="`Les enjeux de ce projet sont de faire <b>gagner du temps aux usines</b> afin de les aider à <b>assurer la production de pièces en bon état.</b>`"
        :image="[]"
    ></Section>



    <Section
        title="Synthèse"
        subtitle=""
        :text="`Lors de mon stage chez IntiReality Solutions, j'ai mobilisé plusieurs savoir-faire généraux dans le cadre du développement d'application web. J'ai notamment développé des compétences en <a href='/tech/1'><b><u>développement d'interface web avec React Typescript</u></b></a>, en les rendant réutilisables au mieux tout en assurant une connexion stable avec le backend. J'ai également proposé un <a href='/tech/2'><b><u>refactoring du backend</u></b></a> en suivant au mieux le plan d'architecture que j'ai proposé pour l'implémentation future en cluster tout en ajoutant des fonctionnalités telles qu'une <u>authentification JWT persistante côté serveur</u> en assurant au mieux de prévenir certaines attaques courantes auxquelles cette stratégie d'authentification est sensible. J'ai aussi proposé un <a href='/tech/3'><b><u>déploiement en cluster multi NUCs</u></b></a> dans l'objectif de déployer le projet en local chez les industriels.Ce stage m'a aussi donné l'occasion de développer mon savoir-faire en suivi de projet via des <a href='/proj/1'><b><u>réunions avec l'équipe un jour sur deux</u></b></a>afin de partager l'avancement et les objectifs suivants de chacun, mais aussi sur <a href='/proj/2'><b><u>la gestion du code avec GitLab</u></b></a>. Enfin, mon intégration dans l'entreprise a été marquée par la <a href='/integration/1'><b><u>prise en main d'un projet développé via l'intelligence artificielle</u></b></a>ainsi que les <a href='/integration/2'><b><u>échanges avec les différents membres de l'équipe</u></b></a>.`"
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
