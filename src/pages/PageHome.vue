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
          title: "Testimonial title",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        },
        {
          imageSrc: rectangle,
          title: "Testimonial title",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        },
        {
          imageSrc: rectangle,
          title: "Testimonial title",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
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
        <div class="col-12 mb-2">
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
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
