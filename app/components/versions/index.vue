<template>
  <UChangelogVersions :versions>
  </UChangelogVersions>
</template>

<script setup lang="ts">

const versions = ref([
  {
    title: 'sZam5.39',
    description: 'Небольшие изменения, купирующие проблему не показа имен файлов в InDesign 20.4 на macOS. В InDesign 20.4.1 ситуацию Adobe исправила.'
  }
])

</script>

<style scoped>

</style>
