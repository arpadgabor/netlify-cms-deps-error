<script lang="ts">
import { defineComponent, onMounted, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Home',
  setup () {
    const route = useRoute()

    onMounted(() => {
      if (!route.value.fullPath.includes('token')) { return }

      const url = 'https://identity.netlify.com/v1/netlify-identity-widget.js'
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = url
      document.getElementsByTagName('head')[0].appendChild(script)
    })

    return {}
  },
  head: {}
})
</script>

<template>
  <div class="container min-h-[200vh] space-y-32">
    content
  </div>
</template>
