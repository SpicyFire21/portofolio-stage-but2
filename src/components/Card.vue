<!-- Card.vue -->
<template>
  <article
      class="h-full border border-[var(--muted)] bg-[var(--white)] p-6 flex flex-col justify-between gap-8 transition duration-200 hover:-translate-y-1 hover:border-zinc-700"
  >
    <div class="flex flex-col gap-5">
      <h2 class="text-2xl font-semibold text-[var(--primary)] leading-tight">
        {{ title }}
      </h2>

      <ul class="flex flex-col gap-3">
        <li
            v-for="item in content"
            :key="item"
            class="text-zinc-400 leading-7 flex gap-3"
        >
          <span class="text-[var(--primary)] mt-1">•</span>

          <span>
            {{ item }}
          </span>
        </li>
      </ul>
    </div>

    <div class="pt-2">
      <div
          class="w-full h-[1px] bg-[var(--muted)] mb-5"
      />

      <button
          class="w-full border border-[var(--muted)  px-4 py-3  font-medium transition bg-[var(--primary)] text-[var(--white)]"
      >
        Voir plus
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },

  content: {
    type: Array,
    default: () => [],
  },
});
</script>