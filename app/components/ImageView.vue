<template>
  <div class="cursor-zoom-in" @click="onClick">
    <img :src :alt />

    <Teleport v-if="showImage" to="body">
      <div
        class="bg-default/75 fixed inset-0 flex cursor-zoom-out items-center justify-center p-4 backdrop-blur-sm focus:outline-none sm:p-8"
        @click="showImage = false">
        <img class="m-auto w-full will-change-transform md:w-1/2 lg:w-1/2" :src :alt />
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

const onClick = () => (showImage.value = true)
</script>
