<template>
  <div class="grid grid-cols-1 gap-4">
    <OpinionsItem v-for="item in opinions" :key="item.id" :item />
  </div>
</template>

<script setup lang="ts">
const opinions = computed(() =>
  useOpinions.sort(() => {
    return Math.random() - 0.5
  }),
)
</script>
