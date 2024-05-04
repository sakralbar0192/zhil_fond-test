<template>
  <error-boundary>
    <div class="app">
      Hello word!
    </div>
  </error-boundary>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary.vue'
export default defineComponent({
    name: 'App',
    components: {ErrorBoundary}
})
</script>