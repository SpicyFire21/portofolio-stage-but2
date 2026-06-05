<template>
  <div
      class="w-full border border-zinc-200 rounded-3xl p-10 bg-zinc-50 flex flex-col gap-8"
  >
    <!-- Titre -->
    <h1 class="text-3xl font-bold text-[var(--primary)]">
      Évaluation du niveau - {{ title }}
    </h1>

    <!-- Avant -->
    <div class="flex items-center gap-6">
      <span class="min-w-[160px] text-3xl font-medium text-black">
        Avant stage
      </span>

      <div class="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
        <div
            class="h-full rounded-full transition-all duration-500"
            :class="beforeColor"
            :style="{ width: `${before}%` }"
        />
      </div>

      <span class="min-w-[140px] text-3xl text-black">
        {{ beforeLabel }}
      </span>
    </div>

    <!-- Après -->
    <div class="flex items-center gap-6">
      <span class="min-w-[160px] text-3xl font-medium text-black">
        Après stage
      </span>

      <div class="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
        <div
            class="h-full rounded-full transition-all duration-500"
            :class="afterColor"
            :style="{ width: `${after}%` }"
        />
      </div>

      <span class="min-w-[140px] text-3xl text-black">
        {{ afterLabel }}
      </span>
    </div>

    <!-- Description -->
    <p
        class="text-xl leading-10 text-zinc-700 whitespace-pre-line"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },

  before: {
    type: Number,
    default: 40
  },

  after: {
    type: Number,
    default: 80
  },

  beforeLabel: {
    type: String,
    default: "Débutant"
  },

  afterLabel: {
    type: String,
    default: "Avancé"
  },

  beforeColor: {
    type: String,
    default: "bg-green-700"
  },

  afterColor: {
    type: String,
    default: "bg-cyan-400"
  },

  description: {
    type: String,
    default: ""
  }
})
</script>