<template>
  <div class="hero">
    <slot></slot>
    <img class="hero-img" :src="image" alt="">
  </div>
</template>
<script>
export default {
  name: 'AppHeroSection',
  props:{
    heading:String,
    subHeading:String,
    image:String
  }
}
</script>
<style scoped>
.hero {
  text-align: center;
}
.hero-img {
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 450px;
}
</style>