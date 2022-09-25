<template>
  <div class="container-fluid article-container">
    <div class="article column pb-2">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppArticle",
};
</script>
<style>
/*Since the content is defined in parent components style is not scoped*/
.article-container {
  display: flex;
  justify-content: center;
}

.article {
  font-size: 1.125rem;
}
.article-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  background-color: grey;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.box {
  background-color: var(--color-background-mute);
  padding: 1rem;
  text-align: center;
  font-style: italic;
}

.first-letter::first-letter {
  font-size: 250%;
  line-height: 100%;
}

@media (min-width: 768px) {
  .article {
    width: 70%;
  }
  
  .hero h4 {
    font-size: 1.25em;
  }
}
</style>