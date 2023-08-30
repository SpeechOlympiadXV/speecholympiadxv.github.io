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
import Prelis11 from "../assets/images/gallery/prelis11.jpg";
import Prelis12 from "../assets/images/gallery/prelis12.jpg";
import Prelis13 from "../assets/images/gallery/prelis13.jpg";
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
        Prelis1,
        Prelis2,
        Prelis3,
        Prelis4,
        Prelis5,
        Prelis6,
        Prelis7,
        Prelis8,
        Prelis9,
        Prelis10,
        Prelis11,
        crowd_1,
        group_pic_1,
        judges,
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