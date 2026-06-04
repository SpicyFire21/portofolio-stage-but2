<template>
  <div class="flex flex-wrap gap-5 p-5 justify-center ">
    <div
        v-for="item in tech"
        :key="item.name"
        class="relative group"
    >
      <!-- Bulle -->
      <div
          class="absolute inset-0 rounded-full blur-xl opacity-40
             group-hover:opacity-70 transition duration-300"
          :class="item.color"
      />

      <!-- Logo -->
      <div
          class="relative w-32 h-32 rounded-2xl border border-zinc-200
             bg-white flex items-center justify-center
             transition duration-300
             group-hover:-translate-y-1
             group-hover:scale-110"
      >
        <img
            class="w-20 h-20 object-contain"
            :src="getImg(item.image)"
            :alt="item.name"
        >
      </div>

      <!-- Tooltip -->
      <div
          class="absolute left-1/2 -translate-x-1/2 top-30
             opacity-0 group-hover:opacity-100
             pointer-events-none transition duration-200
             bg-zinc-900 border border-zinc-700
             rounded-xl px-3 py-2 min-w-max z-20"
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
</template>

<script setup>

defineProps({
  tech: {
    type: Array,
    required: true
  }
})


function getImg(name) {
  return new URL(`../assets/prog/${name}.webp`, import.meta.url).href
}

</script>