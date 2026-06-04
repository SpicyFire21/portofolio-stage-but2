<template>
  <nav
      class="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur"
  >
    <div class="flex items-center gap-2 px-25 py-4">
      <RouterLink
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="px-5 py-2 rounded-xl text-sm font-medium transition"
          :class="
          route.path === item.to
            ? 'bg-fuchsia-600 text-white'
            : 'text-zinc-500 hover:bg-zinc-100 hover:text-black'
        "
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router"

const route = useRoute()

defineProps({
  links: {
    type: Array,
    required: true
  },

})



</script>