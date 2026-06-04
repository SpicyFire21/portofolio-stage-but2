<template>
  <Section
      :title="currentTech.label"
      subtitle='Savoir-faire :'
      :text="currentTech.content"
      :image=[]
  > </Section>
</template>

<script setup>
import Section from "@/components/Section.vue";
import {links} from "@/data/techLinks.js";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

const currentTech = computed(() => {
  const match = links.find(l => l.to === route.path)
  return match || ""
})

</script>