<script>
import AppGallery from "../components/AppGallery.vue";
import Prelis9 from "../assets/images/gallery/prelis9.jpg";
import Prelis13 from "../assets/images/gallery/prelis13.jpg";
import judges from "../assets/images/gallery/judges.jpg";
import award_2 from "../assets/images/gallery/award_2.jpg";
import group_pic_1 from "../assets/images/gallery/group_pic_1.jpg";
import crowd_1 from "../assets/images/gallery/crowd_1.jpg";
import crowd_2 from "../assets/images/gallery/crowd_2.jpg";
import crowd_3 from "../assets/images/gallery/crowd_3.jpeg";
import thulasi from "../assets/images/gallery/thulasi_1.jpg";
import crowd_5 from "../assets/images/gallery/crowd_5.jpg";
import trophies from "../assets/images/gallery/trophies.jpg";
import trophy_2 from "../assets/images/gallery/trophy_2.jpg";
import trophy_3 from "../assets/images/gallery/trophy_3.jpg";
import group_pic_2 from "../assets/images/gallery/group_pic_2.jpg";
import ceremony_1 from "../assets/images/gallery/ceremony_1.jpg";
import stage_1 from "../assets/images/gallery/stage_1.jpg";
import winner_1 from "../assets/images/gallery/winner_1.jpg";

export default {
  components: {
    AppGallery,
  },
  data() {
    return {
      images: [
        thulasi,
        crowd_1,
        trophies,
        award_2,
        group_pic_2,
        crowd_2,
        trophy_2,
        crowd_3,
        Prelis9,
        stage_1,
        ceremony_1,
        crowd_5,
        winner_1,
        trophy_3,
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
      <div class="row mb-5 p-2">
        <AppGallery :images="images" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  font-size: 2rem;
}
</style>