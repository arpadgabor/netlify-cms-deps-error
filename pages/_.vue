<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api'
import { IContentDocument } from '@nuxt/content/types/content'

interface Page {
  title: string
  description: string
  body: any
}

export default defineComponent({
  name: 'Page',
  setup () {
    const { $content } = useContext()

    async function fetchCurrentPage (): Promise<(Page & IContentDocument)[]> {
      const pages = await $content({ deep: true }).fetch<Page>()

      return Array.isArray(pages) ? pages : []
    }

    const pages = useAsync(async () => {
      return await fetchCurrentPage()
    }, 'page')


    return {
      pages,
    }
  },
})
</script>

<template>
  <div v-if="pages" class="container grid grid-cols-1 lg:grid-cols-12 gap-8">
    <pre>
      {{ JSON.stringify(pages, null, 2) }}
    </pre>
  </div>
</template>
