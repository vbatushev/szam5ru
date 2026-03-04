<template>
  <div class="relative grid grid-cols-1 gap-2 sm:grid-cols-2">
    <VideoLesson :item :key="item.id" v-for="item in items" class="w-full" />
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    id: '504084d405e6b25790269feee16e3620',
    label: 'Установка скрипта',
  },
  {
    id: 'e43ae985a774068193f531a3a0c5e8f9',
    label: 'Основы работы',
  },
  {
    id: '4162dc13e930e96e1522832dcaebbf47',
    label: 'Создание правил',
  },
  {
    id: '16a396261ec59019a94f779bcf0fe1d6',
    label: 'Предохранение апострофов от обработки',
  },
]
</script>
