// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  appId: 'szam5-site',
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  ssr: false,
  devtools: {
    enabled: true,
  },
  app: {
    baseURL: '/',
    head: {
      title: 'sZam5 — Adobe InDesign script…',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://szam5.ru',
    name: 'sZam5 — Adobe InDesign script',
  },
  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
      },
    },
  },

  compatibilityDate: '2026-03-03',

  routeRules: {
    '/files/vZam.zip': { static: true },
  },

  postcss: {
    plugins: {
      'autoprefixer': {},
      'postcss-nested': {},
      'cssnano': {},
      '@tailwindcss/postcss': {},
    },
  },

  fonts: {
    families: [{ name: 'Inter', provider: 'google', weights: [100, 400, 500, 600, 700, 800, 900] }],
  },

  icon: {
    provider: 'iconify',
  },

  ogImage: {
    enabled: false,
  },

  robots: {
    blockNonSeoBots: true,
  },
})
