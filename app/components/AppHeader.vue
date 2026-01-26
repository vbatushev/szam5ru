<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import type { NavigationMenuItem } from '@nuxt/ui';

const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

const { header } = useAppConfig();

const items: NavigationMenuItem[] = [
  {
    label: 'Установка',
    icon: 'i-lucide-book-open',
    to: '/setup',
    children: [
      {
        label: 'Введение',
        to: '/setup',
        icon: 'i-lucide-house'
      },
      {
        label: 'Установка',
        to: '/setup/installation',
        icon: 'i-lucide-download'
      },
      {
        label: 'Использование',
        icon: 'i-lucide-sliders',
        to: '/setup/usage',
      },
    ]
  },
  {
    label: 'Настройки',
    icon: 'i-lucide-settings-2',
    to: '/preferences',
    children: [
      {
        label: 'Наборы',
        to: '/preferences',
        icon: 'i-lucide-settings-2'
      },
      {
        label: 'Правила',
        to: '/preferences/rules',
        icon: 'i-lucide-code-xml'
      },
      {
        label: 'Настройки исполнения',
        icon: 'i-lucide-component',
        to: '/preferences/preferences',
      },
    ]
  },
  {
    label: 'Поддержка',
    icon: 'i-lucide-life-buoy',
    to: '/support',
    children: [
      {
        label: 'Когда ничего не получается',
        to: '/support',
        icon: 'i-lucide-life-buoy'
      },
      {
        label: 'История версий',
        to: '/support/versions',
        icon: 'i-lucide-history'
      },
      {
        label: 'Мнения о скрипте',
        icon: 'i-lucide-users',
        to: '/support/testemonials',
      },
      {
        label: 'Контакты',
        icon: 'i-lucide-send',
        to: '/support/contacts',
      },
    ]
  },
]

</script>

<template>
  <UHeader class="" :ui="{
    root: 'grid grid-cols[auto_1fr_auto]',
    left: 'shrink-0',
    center: 'flex-1 grow flex flex-row gap-2 items-center justify-end',
  }" :to="header?.to || '/'">

    <UNavigationMenu :items :ui="{
      root: 'hidden md:flex',
    }"></UNavigationMenu>

    <template #left>
      <AppLogo @click="$router.push('/')" class="h-6 w-auto shrink-0 cursor-pointer" />
    </template>

    <template #right>
      <UContentSearchButton v-if="header?.search" />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost' }"
        />
      </template>
    </template>

    <template #body>
      <UContentNavigation highlight :navigation="navigation" />
    </template>
  </UHeader>
</template>
