export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate',
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted',
      },
    },
    pageHero: {
      slots: {
        title: 'text-5xl sm:text-7xl font-black text-pretty tracking-tight text-highlighted',
        container:
          'py-8 sm:py-8 lg:py-8 w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid pt-24 sm:pt-32 lg:pt-40 pb-8 gap-16 sm:gap-y-24 lg:grid-cols-2 lg:items-center',
      },
    },
    pageSection: {
      slots: {
        container:
          'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid py-4 sm:py-6 lg:py-8 gap-8 sm:gap-16',
        features: 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-8 features',
        title: 'text-primary',
      },
    },
    pageFeature: {
      slots: {
        leadingIcon: 'size-10 features_icon',
      },
    },
  },
  seo: {
    siteName:
      'sZam5 — скрипт Adobe InDesign/InCopy для приведения текстов публикаций к типографическим нормам',
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: 'images/logo.png',
      dark: '',
    },
    search: true,
    colorMode: true,
    links: [],
  },
  footer: {
    credits: `sZam5 • © 2004-${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-telegram',
        'to': 'https://t.me/vbatushev',
        'target': '_blank',
        'aria-label': 'GitHub',
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/vbatushev',
        'target': '_blank',
        'aria-label': 'GitHub',
      },
    ],
  },
  toc: {
    title: 'Содержание',
  },
})
