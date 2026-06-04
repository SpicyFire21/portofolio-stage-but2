<template>
  <Section
      :title="currentInte.label"
      subtitle='Savoir-faire :'
      :text="currentInte.content"
      :image=[]
  > </Section>
</template>

<script setup>
import Section from "@/components/Section.vue";
import {links} from "@/data/integrationLinks.js";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

const currentInte = computed(() => {
  const match = links.find(l => l.to === route.path)
  return match || ""
})

</script>