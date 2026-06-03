<!-- SectionBlock.vue -->
<template>
  <section
      class="w-full px-25 py-20 border-t border-[var(--muted)]"
  >
    <div
        class="grid gap-12 items-center"
        :class="image ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'"
    >
      <!-- Contenu -->
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-3">
          <span
              v-if="subtitle"
              class="text-sm uppercase tracking-widest text-zinc-400"
          >
            {{ subtitle }}
          </span>

          <h1 class="text-5xl font-bold text-[var(--primary)]">
            {{ title }}
          </h1>
        </div>
        <!-- Image facultative -->
        <div
            v-if="image"
            class="w-full flex justify-center"
        >
          <img
              :src="image"
              :alt="title"
              class="max-w-full rounded-2xl object-cover"
          >
        </div>


        <!-- Slot libre -->
        <slot />
      </div>
      <p
          v-if="text"
          class="text-zinc-500 leading-8 whitespace-pre-line"
      >
        {{ text }}
      </p>

    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },

  subtitle: {
    type: String,
    default: ""
  },

  text: {
    type: String,
    default: ""
  },

  image: {
    type: String,
    default: ""
  }
})
</script>