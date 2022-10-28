<script>
import AppGallery from "../components/AppGallery.vue";

export default {
  components: {
    AppGallery,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row mb-5">
        <AppGallery
          :images="[
            'prelis1.jpg',
            'prelis2.jpg',
            'prelis3.jpg',
            'prelis4.jpg',
            'prelis5.jpg',
            'prelis6.jpg',
            'prelis7.jpg',
            'prelis8.jpg',
            'prelis9.jpg',
            'prelis10.jpg',
            'prelis11.jpg',
            'prelis12.jpg',
            'prelis13.jpg',
            'prelis14.jpg',
          ]"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  font-size: 2rem;
}
</style>