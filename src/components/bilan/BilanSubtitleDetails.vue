<template>
  <div class="p-10 flex flex-col gap-8">
    <h2 class="text-3xl font-bold text-[var(--primary)]">
      Synthèse - {{ data.title }}
    </h2>


    <h3 class="text-2xl font-bold text-[var(--primary)]">
      {{ data.subtitle }}
    </h3>
    <p class="text-zinc-600 leading-8 whitespace-pre-line">
      {{ data.bilan }}
    </p>

    <!-- Bulles -->
    <div class="flex flex-wrap gap-4">

      <div
          v-for="item in data.bulles"
          :key="item.text"
          class="px-3 py-1 rounded-full text-white font-medium shadow"
          :style="{
          backgroundColor: item.color
        }"
      >
        {{ item.text }}
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>