<script>
import AppCarousel from "../components/AppCarousel.vue";
import AppGallery from "../components/AppGallery.vue";
import AppFeaturette from "../components/AppFeaturette.vue";
import AppTestimonialCard from "../components/AppTestimonialCard.vue";
import Doodle from "../components/Doodle.vue";
import HomePage_About from "../assets/images/What is SO - Home page .png";
import timeline2 from "../components/timeline2.vue"
import sove from "../assets/images/souvenir.jpeg";

import HomePage_testimonial_sirimevan from "../assets/images/HomePage_testimonial_sirimevan.jpg";
import HomePage_testimonial_malindi from "../assets/images/HomePage_testimonial_malindi.jpeg";
import HomePage_testimonial_amaya from "../assets/images/HomePage_testimonial_amaya.jpg";
import HomePage_testimonial_asitha from "../assets/images/HomePage_testimonial_asitha.jpg";
import PageSemi from "./PageSemiFinalists.vue"
import Prelis1 from "../assets/images/gallery/1.png";
import Prelis2 from "../assets/images/gallery/3.jpg";
import Prelis3 from "../assets/images/gallery/8.jpg";
import sponserDisplay from "../components/sponsers.vue";
import timeline from "../components/timeline.vue";



import { animateOnScroll } from "../aos.js";
import Blogs from './PageTest.vue';
import registrationsOpen from "../assets/images/Registrations_open.png"
import prelis from "../assets/images/Prelis.png"
import announcingSemi from "../assets/images/Semi_Finalists_announced.png"
import semiFinal from "../assets/images/Semi_Finals.png"
import finalistsAnounced from "../assets/images/Finalists_announced.png"
import finals from "../assets/images/Finals.png"
import winners from "../assets/images/winners_announced.png"

import PageTT from "./PageTechTips.vue"

import pageChamp from "./PageChampionsStory.vue"


export default {
  components: {
    PageSemi,
    AppFeaturette,
    AppTestimonialCard,
    AppCarousel,
    Doodle,
    AppGallery,
    Blogs,
    timeline,
    sponserDisplay,
    timeline2,
    PageTT,

    pageChamp
  },
  mounted() {
    var testimonialOut = null;
    animateOnScroll(".hidden");
    if (!window.matchMedia("(max-width: 768px)").matches) {
      testimonialOut = this.$data.testimonials.pop();
      const shiftTestimonial = () => {
        let temp = testimonialOut;
        testimonialOut = this.$data.testimonials.shift();
        this.$data.testimonials.push(temp);
      };
      setInterval(shiftTestimonial, 10000);
    }
  },
  data() {
    return {
      galleryImages: [Prelis1, Prelis2, Prelis3],
      registrationsOpen,
      prelis,
      announcingSemi,
      semiFinal,
      finalistsAnounced,
      finals,
      winners,
      featurettes: [

      {
          heading: "What is Speech Olympiad?",
          headingEnd: "",
          text: "Speech Olympiad stands as the flagship occasion hosted by the Gavel Club at the University of Moratuwa. As the sole English language speech competition within the university...",
          image: HomePage_About,
          urlString: "#about",

        },
        {
          heading: "Get the e-souvenir of SO XVI now! ",
          headingEnd: "",
          image: sove,
          urlString: "https://drive.google.com/drive/folders/1cgRxBgzpUKh4nvYecXVgzRsBsQTCYenI?usp=sharing",
          link: "https://drive.google.com/drive/folders/your-folder-id-here",

        }

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
      <AppFeaturette v-for="(featurette, i) in featurettes" :index="i" :key="i" :heading="featurette.heading"
        :heading-end="featurette.headingEnd" :text="featurette.text" :image="featurette.image"
        :urlString="featurette.urlString" 
        />

      <div class="col-12 mb-2 mt-6">
        <!-- <h1 class="featurette-heading mt-0 mb-4">Timeline</h1> -->
      </div>
      <sponserDisplay />
      <hr class="featurette-divider" />
      <PageSemi />
      <hr class="featurette-divider" />
      <div class="col-12 mb-2 mt-6">
        <!-- <h1 class="featurette-heading mt-0 mb-4">Timeline</h1> -->
      </div>
      <div class="col-12 mb-2 mt-6">
        <h1 class="featurette-heading mt-0 mb-4">Timeline</h1>
      </div>

      <timeline2 />
      <hr class="featurette-divider" />
      <div class="col-12 mb-2 mt-6">
        <h1 class="featurette-heading mt-0 mb-4">Past Experiences</h1>
      </div>

      <Blogs :limit="2" />
      <br /><br />
      <hr class="featurette-divider" />
      <PageTT />
      <hr class="featurette-divider" />
      <page-champ />
      <hr class="featurette-divider" />
      <div class="row mb-5">
        <div class="col-12 mb-2">
          <h1 class="featurette-heading mt-0 mb-4">Testimonials</h1>
        </div>


        <!-- Three columns of cards  -->
        <div class="col-12 mb-2">
          <transition-group name="list" tag="div" class="row">
            <div class="col-lg-4 d-flex justify-content-center" v-for="testimonial in testimonials"
              :key="'testimonial' + testimonial.key">
              <AppTestimonialCard :title="testimonial.title" :imageSrc="testimonial.imageSrc" :body="testimonial.body"
                :subtitle="testimonial.subtitle" />
            </div>
            <!-- /.col-lg-4 -->
          </transition-group>
        </div>
        <!-- /.row -->
      </div>
      <hr class="featurette-divider" />
      <!--Prelis images-->
      <div class="row mb-5">
        <div class="col-12 mb-2">
          <h1 class="featurette-heading mt-0 mb-4">Gallery</h1>
        </div>
        <div class="col-12 mb-2">
          <AppGallery :images="galleryImages" :showLink="true" />
        </div>
      </div>
    </div>
    <!-- /.container -->
  </main>
</template>


<style scoped>
/* Thin out the marketing headings */
/* Custom styles for the amber-themed outlined button */
.button-container {
  text-align: center;
}

.button {
  border: 3px solid #ff9d00;
  /* Amber border color */
  color: #ff9d00;
  font-size: xx-large;
  border-radius: 20%;
  /* Amber text color */
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.button:hover {
  background-color: #ff8000;
  /* Amber background color on hover */
  color: #fff;
  /* White text color on hover */
}

.button:focus {
  outline: none;
  /* Remove focus outline */
}

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

.featurette-heading {
  font-size: 30px;
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
  transition-delay: calc(200ms * var(--order));
  /*order is declared as an inline variable*/
}

.featurette-divider {
  margin: 5rem 0;
  /* Space out the Bootstrap <hr> more */
}

/* styles.css */

.gradient-overlay {
  position: relative;
  display: inline-block;
}

.gradient-overlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  pointer-events: none;
}
</style>
