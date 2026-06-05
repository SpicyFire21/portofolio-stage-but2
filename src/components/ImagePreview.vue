<!-- ImagePreview.vue -->
<template>
  <div class="z-9999">
    <!-- Image -->
    <img
        :src="src"
        :alt="alt"
        :class="imgClass"
        class="cursor-pointer transition hover:scale-101"
        @click="open = true"
    >

    <!-- Modal -->
    <div
        v-if="open"
        class="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-10"
        @click="open = false"
    >
      <img
          :src="src"
          :alt="alt"
          class=" max-w-full max-h-full object-contain rounded-2xl"
      >

      <!-- Close -->
      <button
          class="absolute top-5 right-5 text-white text-5xl"
          @click="open = false"
      >
        ×
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

defineProps({
  src: {
    type: String,
    required: true
  },

  alt: {
    type: String,
    default: ""
  },

  imgClass: {
    type: String,
    default: ""
  }
})

const open = ref(false)
</script>