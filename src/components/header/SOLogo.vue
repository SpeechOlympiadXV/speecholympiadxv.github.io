<script>
export default {
  data(){
    return{
      images_path:'src/assets/images/',
      logo:{
        filename:'so-logo.png',
        alt:'Speech Olympiad Logo'
              }
    }
  }
}
</script>

<template>
  <img :src="images_path+logo.filename" :alt="logo.alt">
</template>

<style scoped>

</style>