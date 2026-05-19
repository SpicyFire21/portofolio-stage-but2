<template>
  <div class=" flex items-center justify-center p-6">
    <div
        class="flex flex-col justify-between items-center  min-w-80 h-full  w-full max-w-sm rounded-2xl bg-[var(--dark-gray)] shadow-xl overflow-hidden border border-[var(--indigo)]"
    >

      <div>
        <div class=" px-6 py-4">
          <h2 class="text-xl font-semibold text-[var(--white)]">
            {{props.title}}
          </h2>
        </div>

        <div class="px-6 py-5">


          <ul class="text-[var(--light-gray)]">
            <li v-for="item in props.content">- {{item}}</li>
          </ul>

        </div>
      </div>


      <!-- Footer -->
      <div class=" px-6 py-4 flex justify-end">
        <button
            class="rounded-lg bg-[var(--pink)] px-4 py-2 text-[var(--white)] transition hover:opacity-90"
        >
          Action
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  title:{
    type:String,
    default:"title"
  },
  content:{
    type:String,
    default:"content"
  }
})

</script>

<style scoped>

</style>