<template>
  <section>
    <h1 class="text-4xl font-bold text-[var(--black)]">{{title}}</h1>

    <BilanSubtitleDetails :data="item" v-for="item in content"/>


    <BilanSkillLevel
        :title="title"
        :before="before"
        :after="after"
        :beforeLabel="getLevelLabel(before)"
        :afterLabel="getLevelLabel(after)"
        :description="bilan"
    />

  </section>
</template>

<script setup>
import BilanSubtitleDetails from "@/components/bilan/BilanSubtitleDetails.vue";
import BilanSkillLevel from "@/components/bilan/BilanSkillLevel.vue";

defineProps({
  title: {
    type: String,
    required: true
  },
  before: {
    type: Number,
    required: true
  },
  after: {
    type: Number,
    required: true
  },
  bilan: {
    type: String,
    required: true
  },
  content: {
    type: Array,
    required: true
  },
})


function getLevelLabel(value) {
  if (value < 20) {
    return "Débutant"
  }

  if (value < 40) {
    return "Intermédiaire"
  }

  if (value < 60) {
    return "Confirmé"
  }

  if (value < 80) {
    return "Avancé"
  }

  return "Expert"
}
</script>
