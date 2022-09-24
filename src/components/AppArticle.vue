<template>
  <div class="container-fluid article-container">
    <div class="article column pb-2">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import ArticleInterview from "./ArticleInterview.vue"

export default {
  name: 'AppArticle',
  components: {ArticleInterview}
}
</script>
<style scoped>
.article-container {
  display: flex;
  justify-content: center;
}

.article {
  font-size: 1.125rem;
}

.article-img {
  aspect-ratio: 1000 / 450;
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

@media (min-width: 768px) {
  .article {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .hero h4 {
    font-size: 1.25em;
  }

  .article-img {
    aspect-ratio: 1/1;
  }
}
</style>