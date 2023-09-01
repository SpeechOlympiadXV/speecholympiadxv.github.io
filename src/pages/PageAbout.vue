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
        The Speech Olympiad stands as the flagship occasion hosted by the Gavel Club at the University of Moratuwa. As the sole English language speech competition within the university, it garners participants from all five faculties. Since its establishment in 2005, this event has progressively gained momentum, evolving into one of the most highly anticipated highlights on the university calendar. In an era where effective communication is paramount in any industry, the Speech Olympiad championship has become a coveted goal pursued by all young undergraduates. The enthusiasm instilled by faculty members to engage their students in this competition has led to a consistent rise in participation from all academic departments. While the Speech Olympiad certainly boasts prestige, it transcends mere title-seeking; it provides a platform for personal growth and the potential to ignite transformative change not only within oneself but also among peers.
      </p>


      <p>
        Throughout the span of the last 15 Speech Olympiad editions, there has been a consistent demonstration of the event’s ability to unveil hidden talents within the university’s undergraduate population. The recipients of awards and the participants who reach the final stages encompass a broad spectrum of backgrounds, highlighting the event’s widespread appeal that transcends various academic disciplines. Countless champions and finalists not only in the Inter-University Best Speaker Contest and All Island Best Speaker Contest but also in several other esteemed All Island and Inter-University Competitions such as Viva Voce, Eloquence, Speech Weaver, Templanza, and Enliven, have emerged as winners, attributing their recognition to their involvement in preceding Speech Olympiad competitions.
      </p>

      <!-- <p>
        Registrations for Speech Olympiad XV are open now, presenting you with
        the chance to spark a change, with your voice. Stand up for what you
        believe, break the silence, and redefine the power of words.
      </p> -->

      <img
        class="article-img"
        alt=""
        src= "../assets/images/gallery/trophy_3.jpg"
        loading="lazy"
      />
    </AppArticle>
  </main>
</template>

<style scoped>
</style>
