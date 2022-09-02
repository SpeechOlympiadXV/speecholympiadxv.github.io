<script>
import SOLogo from '../assets/images/so-logo.png'

export default {
  data() {
    return {
      logo: {
        filename: SOLogo,
        alt: 'Speech Olympiad Logo'
      }
    }
  }
}
</script>

<template>
  <img :src="logo.filename" :alt="logo.alt">
</template>

<style scoped>
</style>