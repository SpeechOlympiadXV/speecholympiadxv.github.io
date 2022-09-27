<script>
import AppCarousel from "../components/AppCarousel.vue";
import AppFeaturette from "../components/AppFeaturette.vue";
import AppTestimonialCard from "../components/AppTestimonialCard.vue";
import Doodle from "../components/Doodle.vue";
import HomePage_About from "../assets/images/HomePage_About.jpg";
import HomePage_PathOfChampion from "../assets/images/HomePage_PathOfChampion.jpg";
import HomePage_TechnicalTips from "../assets/images/HomePage_TechnicalTips.jpg";
import HomePage_testimonial_sirimevan from "../assets/images/HomePage_testimonial_sirimevan.jpg";
import HomePage_testimonial_malindi from "../assets/images/HomePage_testimonial_malindi.jpeg";
import HomePage_testimonial_amaya from "../assets/images/HomePage_testimonial_amaya.jpg";
import HomePage_testimonial_asitha from "../assets/images/HomePage_testimonial_asitha.jpg";
import { animateOnScroll } from "../aos.js";

export default {
  components: { AppFeaturette, AppTestimonialCard, AppCarousel, Doodle },
  mounted() {
    var testimonialOut = null;
    animateOnScroll();
    if (!window.matchMedia("(max-width: 768px)").matches) {
      testimonialOut = this.$data.testimonials.pop();
      const shiftTestimonial = () => {
        let temp = testimonialOut;
        testimonialOut = this.$data.testimonials.shift();
        this.$data.testimonials.push(temp);
      };
      setInterval(shiftTestimonial, 1000); // TODO change back !
    }
  },
  data() {
    return {
      featurettes: [
        {
          heading: "What is Speech Olympiad XV ?",
          headingEnd: "",
          text: "Learn more about the premier intra-university speech competition of the University of Moratuwa, the structure of the competition and its theme for the year 2022. True excitement awaits as Speech Olympiad returns to a physical context this year!",
          image: HomePage_About,
          urlString: "#about",
        },
        {
          heading: "Walk the Path of a Champion",
          headingEnd: "",
          text: "Experience the journey of Speech Olympiad through the story of an ambitious and talented champion. Toastmaster Mohamed Yasir shares his fond memories from Speech Olympiad and invites you to grab your opportunity at SOXV.",
          image: HomePage_PathOfChampion,
          urlString: "#champions-story",
        },
        {
          heading: "A Guide to Becoming a Better Speaker",
          headingEnd: "",
          text: "From the basic do’s and don’ts of public speaking to the delicate intricacies of a winning speech, the champion of SOIX Dr. Samadhi Poornima guides you through the art of becoming a great public speaker.",
          image: HomePage_TechnicalTips,
          urlString: "#technical-tips",
        },
      ],
      testimonials: [
        {
          key: "1",
          imageSrc: HomePage_testimonial_sirimevan,
          title: "Sirimevan Jayasundera",
          subtitle: "Champion - SOVI",
          body: "Speech Olympiad is more than a mere speaking contest, it is a culmination of people, experiences and exposure. I cherish to this date, every moment of the competition which was a gateway to self-reflection that enhanced my capabilities in the corporate world and beyond.",
        },
        {
          key: "2",
          imageSrc: HomePage_testimonial_malindi,
          title: "Malindi Jayathunga",
          subtitle: "1st Runner-Up and Best Prepared Speaker - SOXI",
          body: "My Speech Olympiad experience has enabled me to become the storyteller I am today. I work in advertising where I get to present new ideas and unique concepts to both my team and clients on a daily basis. I developed my presenting skills thanks to the support and knowledge I got from Speech Olympiad and the Gavel Club of University of Moratuwa.",
        },
        {
          key: "3",
          imageSrc: HomePage_testimonial_asitha,
          title: "Asitha Rathnayake",
          subtitle: "Champion – SOXII",
          body: "Speech Olympiad is a good place to win, but more than that, it is a great place to lose. The Gavel Mora family helped me a lot to improve myself as a speaker and a leader during the course of three Speech Olympiads, which helped me become the overall champion at Speech Olympiad XII.",
        },
        {
          key: "4",
          imageSrc: HomePage_testimonial_amaya,
          title: "Amaya Dharmasiri",
          subtitle: "1st Runner-Up and Best Impromptu Speaker – SOXII",
          body: "I was not new to the stage, but I was new to public speaking when I took part in Speech Olympiad. Everyone at the Gavel Club was willing to help us become the best version of ourselves. Not only did I become more confident in communicating in English, but I also learnt about my capabilities and understood myself better, thanks to Speech Olympiad.",
        },
      ],
    };
  },
};
</script>

<template>
  <main>
    <AppCarousel />
    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">
      <Doodle />
      <!-- START THE FEATURETTES -->
      <AppFeaturette
        v-for="(featurette, i) in featurettes"
        :index="i"
        :key="i"
        :heading="featurette.heading"
        :heading-end="featurette.headingEnd"
        :text="featurette.text"
        :image="featurette.image"
        :urlString="featurette.urlString"
      />

      <!--Testimonials-->
      <div class="row mb-5">
        <div class="col-12 mb-2">
          <h1 class="featurette-heading mt-0 mb-4">Testimonials</h1>
        </div>

        <!-- Three columns of cards  -->
        <div class="col-12 mb-2">
          <transition-group name="list" tag="div" class="row">
            <div
              class="col-lg-4 d-flex justify-content-center"
              v-for="testimonial in testimonials"
              :key="'testimonial' + testimonial.key"
            >
              <AppTestimonialCard
                :title="testimonial.title"
                :imageSrc="testimonial.imageSrc"
                :body="testimonial.body"
                :subtitle="testimonial.subtitle"
              />
            </div>
            <!-- /.col-lg-4 -->
          </transition-group>
        </div>
        <!-- /.row -->
      </div>
    </div>
    <!-- /.container -->
  </main>
</template>


<style scoped>
/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  /* rtl:remove */
  letter-spacing: -0.05rem;
}
.hidden {
  display: none !important;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-leave-active {
  position: absolute;
}

@media (min-width: 40em) {
  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

@media (max-width: 62em) {
  .featurette-heading {
    padding-top: 2rem;
    font-weight: bold;
  }
  .app-testimonial-card {
    transition-delay: 0s;
  }
}

.app-testimonial-card {
  /*noinspection CssUnresolvedCustomProperty*/
  transition-delay: calc(
    200ms * var(--order)
  ); /*order is declared as an inline variable*/
}
</style>
