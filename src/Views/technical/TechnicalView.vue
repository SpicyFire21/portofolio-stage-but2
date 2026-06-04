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
import {links} from "@/data/techLinks.js";

</script>


<style scoped>

</style>