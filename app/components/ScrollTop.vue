<template>
  <div
    v-show="y > 100"
    class="hover:text-primary fixed right-4 bottom-4 hidden cursor-pointer rounded-md px-3 pt-3 pb-2 hover:bg-slate-100 md:block hover:dark:bg-slate-900"
    @click="scrollToTop">
    <UIcon name="i-lucide-arrow-up" class="size-5" />
  </div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
</script>
