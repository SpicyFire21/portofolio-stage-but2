<!-- ImageCarousel.vue -->
<template>
  <div class="w-full flex flex-col items-center gap-6">

    <!-- Main image -->
    <div class="relative w-full flex items-center justify-center">

      <!-- Image -->
      <img
          :src="images[current]"
          alt=""
          class="max-h-[600px] object-contain rounded-2xl cursor-pointer"
          @click="open = true"
      >


    </div>

    <!-- Thumbnails -->
    <div class="flex flex-wrap justify-center gap-3">
      <button
          v-for="(img, index) in images"
          :key="index"

          @click="current = index"
          class="w-3 h-3 object-cover rounded-xl cursor-pointer transition"

          :class="
          index === current
            ? 'bg-black'
            : 'bg-zinc-300'
        "
      ></button>



    </div>

    <!-- Fullscreen -->
    <div
        v-if="open"
        class="fixed inset-0 z-900 bg-black/90 flex items-center justify-center p-10"
        @click="open = false"
    >
      <img
          :src="images[current]"
          alt=""
          class="max-w-full max-h-full object-contain rounded-2xl"
      >

      <button
          class="absolute top-5 right-5 text-white text-6xl"
          @click="open = false"
      >
        ×
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const current = ref(0)
const open = ref(false)

const next = () => {
  current.value =
      (current.value + 1) % props.images.length
}

const prev = () => {
  current.value =
      (current.value - 1 + props.images.length)
      % props.images.length
}
</script>