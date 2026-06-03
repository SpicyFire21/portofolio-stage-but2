<template>
  <Section
      title="Suivi de projet"
      subtitle=""
      text=""
      image=""
  > </Section>
  <SectionNavBar :links="links"/>
</template>
<script setup>

import Section from "@/components/Section.vue";
import SectionNavBar from "@/components/SectionNavBar.vue";

const links = [
  {
    label: "trace 1",
    to: "/proj/1"
  },
  {
    label: "bilan",
    to: "/proj/bilan"
  },

]
</script>


<style scoped>

</style>