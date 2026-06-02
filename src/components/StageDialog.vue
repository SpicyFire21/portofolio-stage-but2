<template>
  <div
      v-if="selected"
      class="fixed inset-0 bg-black/60 flex items-center justify-center"
      @click.self="close"
  >
    <div class="bg-[var(--white)] p-8 rounded-2xl w-[600px]">
      <h2 class="text-2xl text-[var(--black)] mb-4">
        {{ selected.title }}
      </h2>

      <p class="text-[var(--muted)]">
       {{selected.details}}
      </p>


    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: Object
})

const emit = defineEmits(["close"])

function close() {
  emit("close")
}

function getImg(name) {
  return new URL(`../assets/prog/${name}.webp`, import.meta.url).href
}
</script>