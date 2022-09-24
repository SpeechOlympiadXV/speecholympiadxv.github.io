<template>
  <div class="hero hero-img">
    <slot></slot>
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
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.hero-img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.lb-phone {
  display: none;
}

@media (min-width: 768px) {
}

@media (max-width: 768px) {
  .hero h4 {
    font-size: 1.25em;
  }

  .lb-phone {
    display: block;
  }
}
</style>