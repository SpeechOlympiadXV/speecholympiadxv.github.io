<script>
import AppArticle from "../components/AppArticle.vue";
import AppHeroSection from "../components/AppHeroSection.vue";
import About_title_mobile from "../assets/images/About_title_mobile.jpg"
import About_title_desktop from "../assets/images/About_title_desktop.jpg"

export default {
  data() {
    return {
      About_title_mobile,
      About_title_desktop
    }
  },
  components: { AppArticle, AppHeroSection },
  computed: {
    isMobile() {
      return window.matchMedia("(max-width: 768px)").matches;
    },
  },
};
</script>

<template>
  <main>
    <AppHeroSection
      :imagePath="
        isMobile
          ? About_title_mobile
          : About_title_desktop
      "
    >
      <!-- <div class="hero-text">
        <h1>What is Speech Olympiad XV?</h1>
      </div> -->
    </AppHeroSection>
    <AppArticle>
      <p class="mt-3 first-letter">
        The Gavel Club of the University of Moratuwa is excited to announce that
        Speech Olympiad, the most coveted intra-university speech competition is
        back for the 15th iteration and this year, it’s all about being bold
        enough to make a difference. 2022 in particular, has been an
        extraordinary year which has proven that any form of change is possible,
        be it changing one’s self or changing the system. Staying true to this,
        Speech Olympiad XV is driven upon the belief that change can be inspired
        by something as simple as an individual voice.
      </p>

      <p>
        The excitement of stepping onto an actual stage and speaking in front of
        a live audience returns to Speech Olympiad XV as all three rounds, The
        Preliminary Round, the Semi-Final, and the Grand Finale will be held
        physically. The contestant is expected to deliver a prepared speech for
        the Preliminary Round, whilst the other two rounds require the
        contestant to deliver a prepared speech as well as an impromptu speech.
      </p>

      <p>
        We at Gavel Mora passionately believe that so much can be done through
        speech. Hence, we invite you to set aside your fears of “not being
        heard” and raise your voice, even if it shakes. Because the moment you
        do so is the moment you make change happen.
      </p>

      <p>
        Registrations for Speech Olympiad XV are open now, presenting you with
        the chance to spark a change, with your voice. Stand up for what you
        believe, break the silence, and redefine the power of words.
      </p>
      <img
        class="article-img"
        alt=""
        src="../assets/images/about_SO_article_image_1.jpg"
        loading="lazy"
      />
    </AppArticle>
  </main>
</template>

<style scoped>
</style>
