<script>
import SOLogo from '../assets/images/SOXIV_LOGO_White-small.png'

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
  <img :src="logo.filename" :alt="logo.alt" class="logo">
</template>

<style scoped>
.logo{
  object-fit: cover;
}
</style>