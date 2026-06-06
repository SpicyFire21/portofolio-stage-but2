<!-- SectionBlock.vue -->
<template>
  <section
      class="w-full px-25 pt-25 pb-0"
  >
    <div class="grid gap-12 items-start">
      <!-- Header -->
      <div class="flex flex-col gap-3">


        <h1 class="text-5xl font-bold text-[var(--primary)]">
          {{ title }}
        </h1>

        <span
            v-if="subtitle"
            class="text-xl uppercase tracking-widest text-zinc-400"
        >
          {{ subtitle }}
        </span>
      </div>

      <!-- Contenu -->
      <div
          class="grid gap-10 items-start"
          :class="image.length ? 'lg:grid-cols-2' : 'grid-cols-1'"
      >

        <!-- Images -->
        <div
            v-if="image.length > 0"
            class="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <img
              v-for="img in image"
              :key="img"
              :src="img"
              :alt="title"
              @click="redirect"
              class="w-full rounded-2xl object-cover border border-zinc-200"
              :class="props.link ? 'cursor-pointer' : ''"
          />
        </div>

        <!-- Texte -->
        <div class="flex flex-col gap-6">
          <p
              v-if="text"
              class="text-zinc-500 leading-8 whitespace-pre-line"
              v-html="text"
          />

          <!-- Slot libre -->
          <slot />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const props =defineProps({
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
    type: Array,
    default: () => []
  },
  link: {
    type: String,
    default: ""
  },
})

function redirect() {
  if (props.link) {
    window.location.href = props.link
  }
}

</script>