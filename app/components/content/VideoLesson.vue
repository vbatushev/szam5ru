<template>
  <div
    ref="wrapper"
    class="w-full border border-default flex flex-col justify-center items-center"
  >
    <iframe
      ref="frame"
      :key="item.id"
      :src="`https://rutube.ru/play/embed/${item.id}/`"
      class="border-none w-full"
      allow="clipboard-write; autoplay"
      webkitAllowFullScreen
      mozallowfullscreen
      allowFullScreen
    ></iframe>
    <div class="px-4 py-2 text-center bg-slate-100 w-full">
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ item: { id: string; label: string } }>();

const frameRef = useTemplateRef("frame");
const wrapperRef = useTemplateRef("wrapper");

onMounted(() => setFrameHeight());

const { width } = useWindowSize();

const setFrameHeight = () => {
  if (frameRef.value && wrapperRef.value) {
    frameRef.value.width = `${wrapperRef.value.getBoundingClientRect().width}px`;
    frameRef.value.height = `${wrapperRef.value.getBoundingClientRect().width / 1.777778}px`;
  }
};

watch(width, () => setFrameHeight());
</script>

<style scoped></style>
