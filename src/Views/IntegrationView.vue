<template>
  <Section
      title="Integration"
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
    to: "/integration/1"
  },
  {
    label: "bilan",
    to: "/integration/bilan"
  },

]
</script>


<style scoped>

</style>