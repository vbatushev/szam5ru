<template>
  <div class="relative mx-auto flex w-full flex-col justify-center">
    <UCarousel
      ref="carousel"
      v-slot="{ item }"
      arrows
      :items="items"
      :prev="{ onClick: onClickPrev }"
      :next="{ onClick: onClickNext }"
      class="mx-auto max-w-1/2"
      @select="onSelect">
      <img :src="item.src" class="border-none" :alt="item.label" />
    </UCarousel>

    <div class="mx-auto flex max-w-xs justify-between gap-2 pt-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="size-11 cursor-pointer opacity-25 transition-opacity hover:opacity-100"
        :class="{ 'opacity-100': activeIndex === index }"
        @click="select(index)">
        <UTooltip :text="item.label">
          <img :src="item.src" width="44" height="44" class="rounded-lg" />
        </UTooltip>
        <div class="hidden">
          {{ item.src }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    src: '/images/szam5editor-preferences-spaces.png',
    label: 'Шпации, абзацы, инициалы',
  },
  { src: '/images/szam5editor-preferences-digits.png', label: 'Цифры и тире' },
  {
    src: '/images/szam5editor-preferences-withoutbreaks.png',
    label: 'Неотрываемые слова',
  },
  {
    src: '/images/szam5editor-preferences-abreviaturas.png',
    label: 'Аббревиатуры и сокращения',
  },
  {
    src: '/images/szam5editor-preferences-rules.png',
    label: 'Пользовательские правила',
  },
  {
    src: '/images/szam5editor-preferences-misc.png',
    label: 'Настройки исполнения',
  },
]

const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)

function onClickPrev() {
  activeIndex.value--
}
function onClickNext() {
  activeIndex.value++
}
function onSelect(index: number) {
  activeIndex.value = index
}

function select(index: number) {
  activeIndex.value = index

  carousel.value?.emblaApi?.scrollTo(index)
}
</script>

<style lang="css">
.embla {
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 70%;
}
</style>
