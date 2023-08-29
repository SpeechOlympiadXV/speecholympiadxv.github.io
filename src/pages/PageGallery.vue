<script>
import AppGallery from "../components/AppGallery.vue";
import Prelis1 from "../assets/images/gallery/prelis1.jpg";
import Prelis2 from "../assets/images/gallery/prelis2.jpg";
import Prelis3 from "../assets/images/gallery/prelis3.jpg";
import Prelis4 from "../assets/images/gallery/prelis4.jpg";
import Prelis5 from "../assets/images/gallery/prelis5.jpg";
import Prelis6 from "../assets/images/gallery/prelis6.jpg";
import Prelis7 from "../assets/images/gallery/prelis7.jpg";
import Prelis8 from "../assets/images/gallery/prelis8.jpg";
import Prelis9 from "../assets/images/gallery/prelis9.jpg";
import Prelis10 from "../assets/images/gallery/prelis10.jpg";
import winner_1 from "../assets/images/gallery/winner_1.jpg";
import trophy_2 from "../assets/images/gallery/trophy_2.jpg";
import judges from "../assets/images/gallery/judges.jpg";
import group_pic_1 from "../assets/images/gallery/group_pic_1.jpg"
import crowd_1 from "../assets/images/gallery/crowd_1.jpg"

import Prelis14 from "../assets/images/gallery/prelis14.jpg";

export default {
  components: {
    AppGallery,
  },
  data() {
    return {
      images: [
        group_pic_1,
        judges,
        trophy_2,
        crowd_1,
        Prelis2,
        winner_1,
        Prelis4,
        Prelis6,
        Prelis7,
        Prelis8,
        Prelis9,
        Prelis10,


      ],
    };
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row mb-5">
        <AppGallery
          :images="images"
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