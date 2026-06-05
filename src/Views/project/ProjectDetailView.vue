<template>
  <Section
      :title="currentProj.label"
      subtitle='Savoir-faire :'
      :text="currentProj.content"
      :image=[]
  > </Section>
  <carrousel v-if="currentProj.carrousel" :slides="currentProj.carrousel"/>

</template>

<script setup>
import Section from "@/components/Section.vue";
import {links} from "@/data/projLinks.js";
import {computed} from "vue";
import {useRoute} from "vue-router";
import Carrousel from "@/components/Carrousel.vue";

const route = useRoute()

const currentProj = computed(() => {
  const match = links.find(l => l.to === route.path)
  return match || ""
})

</script>