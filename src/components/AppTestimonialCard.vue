<template>
  <div class="card">
    <img :src="this.imageSrc" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-left">{{this.title}}</h5>
      <p class="card-text text-left">{{this.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialCard",
  props : {
    imageSrc : String,
    title: String,
    body: String
  }
}
</script>

<style scoped>

</style>