<template>
  <section id="entreprise" class="border-t  border-[var(--primary)] py-24 px-25">
    <h1 class="pb-2 text-5xl font-bold text-[var(--black)]">
      Entreprise
    </h1>
    <p class="text-zinc-400 leading-8 max-w-5xl"><b>IntiReality Solutions</b> est une entreprise qui utilise la vision IA afin de développer des solutions pour des objectifs industriels. Dirigée par Luis CONTRERAS, ainsi que son frère Alvaro CONTRERAS. L'entreprise exerce ses activités à Besançon et est surtout spécialisé dans la vision IA. </p>
    <br>



    <div class="flex flex-col items-center">
      <img class="logo" src="@/assets/img/intiReality_logo.png" alt="" @click="goTo()">
      <em>cliquez sur le logo pour aller sur le site de l'entreprise !</em>
    </div>

    <h2 class="pb-2 text-2xl font-bold text-[var(--black)]">En savoir plus</h2>
    <p>Mon stage s'est déroulé après le développement du premier MVP de DETEK, qui est une application web qui cherche a simplifier la production des pièces usinés par des industriels.</p>

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


</style>