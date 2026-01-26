<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError
}>()

useHead({
  htmlAttrs: {
    lang: 'ru'
  }
})

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <AppHeader />

    <UError :error="error" :ui="{
      statusCode: 'text-base text-2xl font-semibold text-primary',
      statusMessage: 'mt-2 text-4xl sm:text-5xl font-extralight text-highlighted text-balance',
    }">
      <template #links>
        <UButton icon="i-lucide-arrow-left" to="/" label="Вернуться на главную"  />
      </template>
    </UError>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
