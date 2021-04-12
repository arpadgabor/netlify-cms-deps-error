<script lang="ts">
import { defineComponent, onMounted, PropType } from '@nuxtjs/composition-api'

interface Error {
  message: string
  statusCode: number
}

export default defineComponent({
  name: 'Error',
  props: {
    error: { type: Object as PropType<Error>, required: true }
  },
  setup () {
    onMounted(() => {
      window.scroll({
        top: 0
      })
    })

    return {}
  }
})
</script>

<template>
  <section v-if="error" class="container">
    <h1 class="text-4xl md:text-6xl lg:text-8xl font-hero tracking-tighter text-primary">
      Could not find page.
    </h1>
  </section>
</template>
