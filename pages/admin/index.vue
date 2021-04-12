<script lang="ts">
import { defineComponent, onMounted, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'none',
  setup () {
    useMeta({
      title: 'Content Manager',
      script: [
        {
          type: 'text/javascript',
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          async: true
        },
        {
          type: 'text/javascript',
          src: '/netlify-cms-widget-parent.js'
        }
      ]
    })

    onMounted(() => {
      require('@/cms').init({
        baseURL: process.env.baseURL,
        localBackend: process.env.env === 'development'
      })
      setTimeout(() => {
        const html = document.querySelector('html')
        html?.classList.remove('dark')
      })
    })
    return {}
  },
  head: {}
})
</script>

<template>
  <main></main>
</template>

<style lang="postcss">
html {
  background: inherit !important;
}
/**
  Because the CMS was initialized manually, Tailwind overrides the CSS.
  We need to override whatever Tailwind removes, and even improve some of Netlify CMSs' own styles.
 */
.cms-editor-visual {
  & ul {
    @apply list-disc;
  }
  & ol {
    @apply list-decimal;
  }
  & li {
    & ul {
      list-style-type: circle;
    }

    & p {
      @apply mb-2 !important;
    }
    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
      @apply mb-0;
    }
  }

  & p:first-of-type {
    @apply mt-0;
  }
  & p {
    @apply leading-relaxed text-base;
  }
  & a {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }

  & p,
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    @apply my-8;
  }

  & blockquote {
    @apply border-none rounded-lg p-4 bg-gradient-to-r from-gray-200;

    & p {
      @apply text-xl !important;

      &:last-of-type {
        @apply m-0;
      }
    }
  }
}
</style>
