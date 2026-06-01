<template>
  <section id="entreprise" class="border border-[var(--primary)] py-24 px-25">
    <h1 class="text-5xl font-bold text-[var(--black)]">
      Entreprise
    </h1>
    <p class="text-zinc-400 leading-8 max-w-5xl"><b>IntiReality Solutions</b> est une entreprise qui utilise la vision IA afin de développer des solutions pour des objectifs industriels. Dirigée par Luis CONTRERAS, ainsi que son frère Alvaro CONTRERAS. L'entreprise exerce ses activités à Besançon et est surtout spécialisé dans la vision IA. </p>
    <br>

    <div class="flex flex-col items-center">
      <img class="logo" src="@/assets/img/intiReality_logo.png" alt="" @click="goTo()">
      <em>cliquez sur le logo pour aller sur le site de l'entreprise !</em>
    </div>

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