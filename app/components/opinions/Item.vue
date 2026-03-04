<template>
  <UCard
    variant="soft"
    :ui="{
      root: 'shadow-xl',
      header: 'p-2 sm:px-4 bg-slate-200 dark:bg-slate-700 dark:text-slate-50',
      body: 'p-2 sm:p-4 dark:bg-slate-300 dark:text-slate-800',
      footer: 'p-2 sm:px-4',
    }">
    <template #header>
      <div class="flex flex-col">
        <div class="text-lg font-bold" v-text="item.name" />
        <div class="text-sm">
          <a v-if="item.link" :href="item.link">{{ item.badge }}</a>
          <span v-else>{{ item.badge }}</span>
        </div>
      </div>
    </template>
    <div class="" v-html="item.opinion" />
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  item: Opinion
}>()
</script>
