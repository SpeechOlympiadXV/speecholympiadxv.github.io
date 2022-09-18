<template>
  <div class="card testimonial-card">
    <img :src="this.imageSrc" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-left testimonial-card-heading">{{this.title}}</h5>
      <p class="card-text text-left testimonial-card-body">{{this.body}}</p>
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

/*Testimonial Card*/
.testimonial-card{
  background-color: var(--color-testimonial-card-bg);
  border: solid 1px var(--color-border);
}
.testimonial-card:hover{
  border:solid 1px var(--color-border-hover);
}
.testimonial-card-heading{
  color:var(--color-heading);
}
.testimonial-card-body{
  color:var(--color-text);
}

/*Testimonial Card end*/

</style>