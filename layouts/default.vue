<script lang="ts">
import { defineComponent, onMounted, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'DefaultLayout',
  transition: 'fade',
  setup () {
    const { $content } = useContext()

    onMounted(() => {
      $content().fetch()
    })
    return {}
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Nuxt />
  </div>
</template>
