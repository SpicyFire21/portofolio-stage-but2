<template>
  <section id="contact" class="px-25 py-24">
    <h1 class="pb-2 text-5xl font-bold text-[var(--black)]">
      Contact
    </h1>

    <div class="flex gap-5 mt-8">
      <a
          v-for="item in contacts"
          :key="item.name"
          :href="item.link"
          target="_blank"
          class="w-16 h-16 rounded-2xl border border-zinc-300
               flex items-center justify-center
               text-3xl transition
               hover:-translate-y-1 hover:border-[var(--primary)]"
      >
        <i
            :class="['fa-brands fa-xl', item.icon]"
            class="text-[var(--primary)]"
        />
      </a>
    </div>
  </section>
</template>

<script setup>
const contacts = [
  {
    icon:'fa-square-github',
    link:'https://github.com/SpicyFire21'
  },
  {
    icon:'fa-linkedin',
    link:'https://www.linkedin.com/in/adam-khnagui-a26659344/'
  }
]
</script>
