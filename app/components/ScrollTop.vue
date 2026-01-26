<template>
  <div
    v-show="y > 100"
    class="px-3 pt-3 pb-2 rounded-md fixed bottom-4 right-4 cursor-pointer hover:bg-slate-100 hover:text-primary hidden md:block hover:dark:bg-slate-900"
    @click="scrollToTop"
  >
    <UIcon
      name="i-lucide-arrow-up"
      class="size-5 "
    />
  </div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
</script>
