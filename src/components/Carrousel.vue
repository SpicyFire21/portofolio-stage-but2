<template>
  <div class="w-full flex flex-col items-center">

    <div class="relative w-full max-w-5xl flex items-center justify-center">

      <!-- Left -->
      <button @click="prev" class="absolute left-4 z-10 text-4xl text-zinc-400 hover:text-black">←</button>

      <!-- Slide -->
      <div class=" border w-full px-20 py-8 overflow-hidden">

        <div class=" border h-full flex justify-center gap-6">

          <!-- Text -->
          <div class="flex flex-col justify-center">
            <h1 class="text-2xl font-bold mb-6 text-black">
              {{ slides[currentIndex].title }}
            </h1>

            <div
                class="min-w-0 w-full max-w-[400px] text-zinc-500 leading-8 whitespace-pre-line break-words"
                v-html="slides[currentIndex].text"
            ></div>
          </div>


          <!-- Optional image -->
          <div
              v-if="slides[currentIndex].images"
              class="flex items-center overflow-hidden"
          >
<!--            <ImagePreview-->
<!--                :src="slides[currentIndex].image"-->
<!--                alt=""-->
<!--                imgClass="w-100 h-100 object-contain"-->
<!--            />-->


            <ImageCarrousel :images="slides[currentIndex].images" />
          </div>

        </div>

      </div>

      <!-- Right -->
      <button @click="next" class="absolute right-4 z-10 text-4xl text-zinc-400 hover:text-black">→</button>

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
import ImagePreview from "@/components/ImagePreview.vue";
import ImageCarrousel from "@/components/ImageCarrousel.vue";

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