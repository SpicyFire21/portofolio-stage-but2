<!-- Footer.vue -->
<template>
  <footer
      class="w-full bg-white px-10 py-8 mt-20"
  >
    <div
        class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8"
    >

      <!-- Informations -->
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold text-[var(--primary)]">
          Portfolio
        </h2>

        <p class="text-zinc-500">
          Deuxième année de BUT informatique.
        </p>
      </div>

      <!-- Réseaux -->
      <div class="flex items-center gap-5">

        <a
            href="https://github.com/SpicyFire21"
            target="_blank"
            class="w-14 h-14 rounded-2xl border border-zinc-200
             flex items-center justify-center
             text-2xl text-zinc-500
             hover:bg-black hover:text-white
             transition"
        >
          <i class="fa-brands fa-github"></i>
        </a>

        <a
            href="https://www.linkedin.com/in/adam-khnagui-a26659344/"
            target="_blank"
            class="w-14 h-14 rounded-2xl border border-zinc-200
             flex items-center justify-center
             text-2xl text-zinc-500
             hover:bg-blue-600 hover:text-white
             transition"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>

      </div>

    </div>

    <!-- Bas -->
    <div
        class="mt-8 pt-6 border-t border-zinc-200 text-center"
    >
      <p class="text-sm text-zinc-400">
        © {{ year }} - Adam Khnagui. Tous droits réservés.
      </p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>