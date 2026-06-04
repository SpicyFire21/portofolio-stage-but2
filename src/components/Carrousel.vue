<template>
  <div class="w-full flex flex-col items-center">

    <div class="relative w-full max-w-4xl flex items-center justify-center">

      <!-- Left -->
      <button
          @click="prev"
          class="absolute left-4 z-10 text-4xl text-zinc-400 hover:text-black"
      >
        ←
      </button>

      <!-- Slide -->
      <div
          class="w-full h-[600px] px-20 py-8 overflow-hidden"
      >

        <div class="h-full flex flex-col gap-6">

          <!-- Text -->
          <div
              class="text-zinc-500 leading-8 whitespace-pre-line overflow-y-auto"
              v-html="slides[currentIndex].text"
          ></div>

          <!-- Optional image -->
          <div
              v-if="slides[currentIndex].image"
              class="flex-1 overflow-hidden"
          >
            <img
                :src="slides[currentIndex].image"
                alt=""
                class="w-full h-full object-contain"
            />
          </div>

        </div>

      </div>

      <!-- Right -->
      <button
          @click="next"
          class="absolute right-4 z-10 text-4xl text-zinc-400 hover:text-black"
      >
        →
      </button>

    </div>

    <!-- Pagination -->
    <div class="flex gap-3 mt-6">

      <button
          v-for="(_, index) in slides"
          :key="index"
          @click="currentIndex = index"
          class="w-3 h-3 rounded-full"
          :class="
          index === currentIndex
            ? 'bg-black'
            : 'bg-zinc-300'
        "
      />

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const next = () => {
  currentIndex.value =
      (currentIndex.value + 1) % props.slides.length
}

const prev = () => {
  currentIndex.value =
      (currentIndex.value - 1 + props.slides.length)
      % props.slides.length
}
</script>