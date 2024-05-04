<template>
    <div v-if="error">
      {{ errorMessage }}
      Что то пошло не так
    </div>
    <div v-else><slot></slot></div>
  </template>
  
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'ErrorBoundary',
    data() {
        return {
            error: false,
            errorMessage: '',
        }
    },
    errorCaptured(error, vm, info) {
        console.log('error')
        this.error = Boolean(error)
        this.errorMessage = info
        return false
    },
})
</script>