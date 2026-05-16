<template>
  <section id="entreprise">
    <h2>Entreprise</h2>
    <p><b>IntiReality Solutions</b> est une entreprise qui utilise la vision IA afin de développer des solutions pour des objectifs industriels. Dirigée par Luis CONTRERAS, ainsi que son frère Alvaro CONTRERAS. L'entreprise exerce ses activités à Besançon et est surtout spécialisé dans la vision IA. </p>
    <br>
    <img class="logo" src="@/assets/img/intiReality_logo.png" alt="" @click="goTo()">
    <em>cliquez sur le logo pour aller sur le site de l'entreprise !</em>
  </section>
</template>

<script setup>


function goTo(){
  window.open("https://intireality.com/fr")
}

</script>

<style scoped>
.logo {
  width: 40%;
  aspect-ratio: 1270/540;
}

.logo:hover {
  cursor: pointer;
}


section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>