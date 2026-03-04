<template>
  <div ref="wrapper" class="border-default flex w-full flex-col items-center justify-center border">
    <iframe
      ref="frame"
      :key="item.id"
      :src="`https://rutube.ru/play/embed/${item.id}/`"
      class="w-full border-none"
      allow="clipboard-write; autoplay"
      webkitAllowFullScreen
      mozallowfullscreen
      allowFullScreen></iframe>
    <div class="w-full bg-slate-100 px-4 py-2 text-center">
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ item: { id: string; label: string } }>()

const frameRef = useTemplateRef('frame')
const wrapperRef = useTemplateRef('wrapper')

onMounted(() => setFrameHeight())

const { width } = useWindowSize()

const setFrameHeight = () => {
  if (frameRef.value && wrapperRef.value) {
    frameRef.value.width = `${wrapperRef.value.getBoundingClientRect().width}px`
    frameRef.value.height = `${wrapperRef.value.getBoundingClientRect().width / 1.777778}px`
  }
}

watch(width, () => setFrameHeight())
</script>

<style scoped></style>
