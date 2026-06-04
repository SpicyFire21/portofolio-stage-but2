<template>
  <Section
      :title="currentTech.label"
      subtitle='Savoir-faire :'
      :text="currentTech.content"
      :image=[]
  > </Section>
 <carrousel :slides="currentTech.carrousel"/>
</template>

<script setup>
import Section from "@/components/Section.vue";
import {links} from "@/data/techLinks.js";
import {computed} from "vue";
import {useRoute} from "vue-router";
import Carrousel from "@/components/Carrousel.vue";

const route = useRoute()

const currentTech = computed(() => {
  const match = links.find(l => l.to === route.path)
  return match || ""
})

</script>