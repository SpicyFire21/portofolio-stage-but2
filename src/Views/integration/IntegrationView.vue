<template>
  <Section
      title="Integration"
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
import {links} from "@/data/integrationLinks.js";
</script>


<style scoped>

</style>