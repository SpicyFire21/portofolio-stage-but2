<template>
  <Section
      title="Technique"
      subtitle=""
      text=""
      :image=[]
  > </Section>
  <SectionNavBar :links="links"/>
  <RouterView/>
</template>
<script setup>

import Section from "@/components/Section.vue";
import SectionNavBar from "@/components/SectionNavBar.vue";

const links = [
  {
    label: "trace 1",
    to: "/tech/1"
  },
  {
    label: "bilan",
    to: "/tech/bilan"
  },

]
</script>


<style scoped>

</style>