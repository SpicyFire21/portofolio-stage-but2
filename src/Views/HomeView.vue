<template>
  <div>
    <Section
        title="Presentation"
        subtitle=""
        text="Bienvenue sur mon portfolio, réalisé dans le cadre de mon stage de 2e année en BUT Informatique. Vous y découvrirez les compétences que j’ai développées tout au long de mon stage en Bachelor Universitaire de Technologie, ainsi que des exemples concrets du projet DETEK dans lequel j'ai travaillé durant mon stage de quatrième semestre. Ce portfolio met en lumière les connaissances techniques et professionnelles que j’ai pu acquérir et mettre en pratique dans un contexte réel.

IntiReality Solutions est une entreprise qui utilise la vision IA afin de développer des solutions pour des objectifs industriels. Dirigée par Luis CONTRERAS, ainsi que son frère Alvaro CONTRERAS. L'entreprise exerce ses activités à Besançon et est surtout spécialisé dans la vision IA."
        image=""
    >

    </Section>

    <Section
        title="Contexte"
        subtitle=""
        text="Lors de mon stage, j'ai travaillé sur le developpement et deploiement du projet DETEK, une application web qui applique des processus de vision et d'analyse afin d'aider les industrielles dans leurs productions de pièces. "
        :image="logo"
    >

    </Section>

    <Section
        title="Synthèse"
        subtitle=""
        text="Lors de mon stage, j'ai pu developpé mes compétences dans différents domaines, a commencé par le développement Frontend. J'ai developpé mes compétences sur le framework React avec l'utilisation de TypeScript dans la réalisation d'interfaces web et aussi dans la réorganisation de ces dernières.

      J'ai également travaillé sur la partie backend ou j'y ai passé le principale de mon temps, j'ai proposé une architecture pour une nouvelle version du backend afin d'améliorer l'évolutivité du code et rendre le deploiement en cluster plus facilement. J'ai pour cela travaillé avec le language python en utilisant la librairie FastAPI pour l'implémentation d'une API REST.
      De plus, J'ai aussi travaillé sur la base de donnée en propsant sur plusieurs tiérations des versions d'un MCD afin de pouvoir mettre à jour la base de donnée pour proposer une version normalisée de cette dernière. Cela m'a aussi donné l'occasion de voir du code permettant d'appliquer une analyse image en temps réel.

      J'ai exploré le deploiement en cluster multi-NUC en utlisant la plateforme de gestion de conteneurs kubernetes et le conteneur docker.

      Enfin, j'ai aussi exploré le deploiement de services tel que le serveur S3 garage ainsi que le bus de message NATS, dans l'objectif de pouvoir le deployer dans la version finale du cluster.

"
        image=""
    >

    </Section>
  </div>
</template>

<script setup>
import logo from "@/assets/img/intiReality_logo.png"
import Section from "@/components/Section.vue";
</script>


<style scoped>

</style>