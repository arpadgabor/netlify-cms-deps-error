import { defineNuxtConfig } from '@nuxtjs/composition-api'

export default defineNuxtConfig({
  target: 'static',
  generate: {
    fallback: true,
    interval: 1
  },
  components: false,

  env: {
    env: process.env.NODE_ENV || 'development',
    baseURL: process.env.URL || 'http://localhost:3000'
  },

  head: {
    title: 'test',
    titleTemplate: '%s - test',
    htmlAttrs: {
      lang: 'ro'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'desc', name: 'description', content: 'test' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  buildModules: [
    '@nuxt/postcss8',
    '@nuxt/typescript-build',
    '@nuxt/image',
    '@nuxtjs/composition-api',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode'
  ],
  modules: ['@nuxt/content', '@nuxtjs/sitemap'],

  css: ['~/assets/css/global.css', '~/assets/css/typography.css', '~/node_modules/leaflet/dist/leaflet.css'],

  sitemap: {
    hostname: process.env.URL || 'http://localhost:3000',
    gzip: true,
    exclude: [
      '/admin'
    ]
  },

  content: {
    liveEdit: false
  },

  tailwindcss: {
    jit: true
  },

  colorMode: {
    classSuffix: ''
  },

  googleFonts: {
    families: {
      'Work+Sans': [400, 500, 600, 700]
    },
    display: 'swap'
  },

  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    }
  }
})
