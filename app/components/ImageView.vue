<template>
  <div class="cursor-zoom-in" @click="onClick">
    <img :src :alt />

    <Teleport v-if="showImage" to="body">
      <div class=" bg-default/75 backdrop-blur-sm fixed inset-0 flex items-center justify-center cursor-zoom-out focus:outline-none p-4 sm:p-8" @click="showImage = false">
        <img class="will-change-transform w-full md:w-1/2 lg:w-1/2 m-auto" :src :alt />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()

const showImage = ref(false)

const onClick = () => showImage.value = true
</script>

