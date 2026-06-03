<!-- Card.vue -->
<template>
  <article
      class="h-full border border-[var(--muted)] bg-[var(--white)] p-6 flex flex-col justify-between gap-8 transition duration-200 hover:-translate-y-1 hover:border-zinc-700"
  >
    <div class="flex flex-col gap-5">
      <h2 class=" text-2xl font-semibold text-[var(--primary)] leading-tight">
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
      <div class="flex gap-3 mb-3">
        <div
            v-for="item in tech"
            :key="item.name"
            class="relative group"
        >
          <img
              class="w-12 h-12 object-contain transition duration-200 group-hover:scale-110"
              :src="getImg(item.image)"
              :alt="item.name"
          >

          <div
              class="absolute left-1/2 -translate-x-1/2 top-14
             opacity-0 group-hover:opacity-100
             pointer-events-none transition duration-200
             bg-zinc-900 border border-zinc-700
             rounded-xl px-3 py-2 min-w-max z-10"
          >
            <p class="text-sm font-semibold text-white">
              {{ item.name }}
            </p>

            <p class="text-xs text-zinc-400">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
      <div
          class="w-full h-[1px] bg-[var(--muted)] mb-5"
      />

      <button
          @click="open"
          class="w-full border border-[var(--muted)  px-4 py-3  font-medium transition bg-[var(--primary)] text-[var(--white)]"
      >
        Voir plus
      </button>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },

  content: {
    type: Array,
    default: () => [],
  },
  tech: {
    type: Array,
    default: () => [],
  },
  details: {
    type: String,
    default: "",
  },
});

function getImg(name) {
  return new URL(`../assets/prog/${name}.webp`, import.meta.url).href
}

const emit = defineEmits(["open"])

function open() {
  emit("open", {
    title: props.title,
    content: props.content,
    tech: props.tech,
    details:props.details
  })
}

</script>