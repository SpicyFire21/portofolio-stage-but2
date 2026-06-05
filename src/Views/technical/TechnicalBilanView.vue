<template>
  <div class="flex flex-col gap-20">
    <BilanSection
        v-for="item in sections"
        :key="item.to"
        :title="item.label"
        :bilan="item.lastbilan"
        :after="item.after"
        :before="item.before"
        :content="item.carrousel"
    />


  </div>
</template>

<script setup>
import { computed } from "vue"

import BilanSection from "@/components/bilan/BilanSection.vue"
import { links } from "@/data/techLinks.js"

const sections = computed(() => {
  return links.filter(item => item.to !== "/tech/bilan")
})
</script>