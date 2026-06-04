<template>
  <nav
      class="sticky top-0 z-50 w-full border-b border-[var(--primary)] bg-[var(--white)] backdrop-blur "
  >
    <div class="overflow-x-auto">
      <div class="flex items-center gap-2 px-5 py-4 min-w-max">
        <RouterLink
            v-for="item in links"
            :key="item.to"
            :to="item.to"
            class="whitespace-nowrap px-5 py-2 rounded-xl text-sm font-medium transition"
            :class="
            route.path === item.to
              ? 'bg-[var(--primary)] text-[var(--white)]'
              : 'text-[var(--muted)] hover:bg-zinc-100 hover:text-[var(--black)]'
          "
        >
          {{ item.label }}
        </RouterLink>
      </div>
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
  }
})
</script>