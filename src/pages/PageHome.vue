<script>
import AppCarousel from "../components/AppCarousel.vue";
import AppFeaturette from "../components/AppFeaturette.vue";
import AppTestimonialCard from "../components/AppTestimonialCard.vue";
import Doodle from "../components/Doodle.vue";
import rectangle from "../assets/images/rectangle.jpg";

export default {
  components: { AppFeaturette, AppTestimonialCard, AppCarousel, Doodle },
  data() {
    return {
      featurettes: [
        {
          heading: "What is Speech Olympiad XV",
          headingEnd: "?",
          text: "Learn more about the premier intra-university speech competition of the University of Moratuwa, the structure of the competition and its theme for the year 2022. True excitement awaits as Speech Olympiad returns to a physical context this year!",
          image: "",
          urlString: "#about",
        },
        {
          heading: "Walk the Path of a Champion",
          headingEnd: "",
          text: "Experience the journey of Speech Olympiad through the story of an ambitious and talented champion. Toastmaster Mohamed Yasir shares his fond memories from Speech Olympiad and invites you to grab your opportunity at SOXV.",
          image: "",
          urlString: "#champions-story",
        },
        {
          heading: "A Guide to Becoming a Better Speaker",
          headingEnd: "",
          text: "From the basic do’s and don’ts of public speaking to the delicate intricacies of a winning speech, the champion of SOIX Samadhi Poornima guides you through the art of becoming a great public speaker.",
          image: "",
          urlString: "#technical-tips",
        },
      ],
      testimonials: [
        {
          imageSrc: rectangle,
          title: "Sirimevan Jayasundera",
          subtitle: "Champion - SOVI",
          body: "Speech Olympiad is more than a mere speaking contest, it is a culmination of people, experiences and exposure. I cherish to this date, every moment of the competition which was a gateway to self-reflection that enhanced my capabilities in the corporate world and beyond.",
        },
        {
          imageSrc: rectangle,
          title: "Malindi Jayathunga",
          subtitle: "1st Runner-Up and Best Prepared Speaker - SOXI",
          body: "My Speech Olympiad experience has enabled me to become the storyteller I am today. I work in advertising where I get to present new ideas and unique concepts to both my team and clients on a daily basis. I developed my presenting skills thanks to the support and knowledge I got from Speech Olympiad and the Gavel Club of University of Moratuwa.",
        },
        {
          imageSrc: rectangle,
          title: "Asitha Rathnayake",
          subtitle: "Champion – SOXII",
          body: "Speech Olympiad is a good place to win, but more than that, it is a great place to lose. The Gavel Mora family helped me a lot to improve myself as a speaker and a leader during the course of three Speech Olympiads, which helped me become the overall champion at Speech Olympiad XII.",
        },
        {
          imageSrc: rectangle,
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
          <h2 class="featurette-heading mt-0">Testimonials</h2>
        </div>

        <!-- Three columns of cards  -->
        <div class="col-12 mb-2">
          <div class="row">
            <div
              class="col-lg-4 d-flex justify-content-center"
              v-for="testimonial in testimonials"
            >
              <AppTestimonialCard
                :title="testimonial.title"
                :imageSrc="testimonial.imageSrc"
                :body="testimonial.body"
                :subtitle="testimonial.subtitle"
              />
            </div>
            <!-- /.col-lg-4 -->
          </div>
        </div>
        <!-- /.row -->
      </div>
    </div>
    <!-- /.container -->
  </main>
</template>


<style scoped>
</style>
