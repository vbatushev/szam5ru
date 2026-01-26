// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  appId: 'szam5-site',
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  ssr: true,

  devtools: {
    enabled: true
  },

  app: {
    head: {
      title: 'sZam5 — Adobe InDesign script'
    }
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://szam5.com',
    name: 'sZam5 — Adobe InDesign script'
  },

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  devServer: {
    // port: 8090,
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      autoSubfolderIndex: true
    }
    // output: {
    //   publicDir: './dist'
    // }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [100, 400, 500, 600, 700, 800, 900] }
    ]
  },

  icon: {
    provider: 'iconify'
  },

  ogImage: {
    enabled: false
  },

  robots: {
    blockNonSeoBots: true
  }
})
