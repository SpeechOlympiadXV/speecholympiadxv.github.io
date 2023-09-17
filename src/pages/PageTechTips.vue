<script>
import TechnicalTips_portrait from "../assets/images/TechnicalTips_portrait.jpeg"
import TechnicalTips from "../components/TechnicalTips.vue";
import HomePage_testimonial_malindi from "../assets/images/HomePage_testimonial_malindi.jpeg";
import Samadhi from "../TechTips/Samadhi.vue"
export default {
    data() {

        return {
            key: "0",
            technicalTips: [
                {
                    key: "1",
                    imageSrc: TechnicalTips_portrait,
                    title: "A guide to becoming a better speaker",
                    subtitle: "Tips from Dr.Samadhi Poornima, champion of Speech Olympiad IX",
                    backgroundColorClass: "bg-cyan-700",
                    body: "Speech Olympiad is more than a mere speaking contest, it is a culmination of people, experiences and exposure. I cherish to this date, every moment of the competition which was a gateway to self-reflection that enhanced my capabilities in the corporate world and beyond.",
                },
                {
                    key: "2",
                    imageSrc: HomePage_testimonial_malindi,
                    title: "Malindi Jayathunga",
                    subtitle: "1st Runner-Up and Best Prepared Speaker - SOXI",
                    backgroundColorClass: "bg-lime-700",
                    body: "My Speech Olympiad experience has enabled me to become the storyteller I am today. I work in advertising where I get to present new ideas and unique concepts to both my team and clients on a daily basis. I developed my presenting skills thanks to the support and knowledge I got from Speech Olympiad and the Gavel Club of University of Moratuwa.",
                }
            ]
        }
    },
    methods: {
        handleClick(key) {
            this.key = key;
        },
        closePost() {
            this.key = "0";
        }
    },
    components: {
        TechnicalTips,
        Samadhi
    },

}
</script>
<template>
    <div class="row mb-5">
        <div class="col-12 mb-2">
            <h1 class="featurette-heading mt-0 mb-4">Technical Tips</h1>
        </div>

        <!-- Three columns of cards  -->
        <div class="col-12 mb-2" v-if="key == '0'">
            <transition-group name="list" tag="div" class="row">
                <div class="col-lg-4 d-flex justify-content-center" v-for="technicalTip in technicalTips"
                    :key="'testimonial' + technicalTip.key" @click="handleClick(technicalTip.key)">
                    <TechnicalTips :title="technicalTip.title" :imageSrc="technicalTip.imageSrc" :body="technicalTip.body"
                        :subtitle="technicalTip.subtitle" :backgroundColorClass="technicalTip.backgroundColorClass" />
                </div>
                <!-- /.col-lg-4 -->
            </transition-group>
        </div>
    </div>
    <div v-if="key == '1'">
        <button @click="closePost"
            class="bg-amber-800 m-4 text-white p-4 w-36 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
                    clip-rule="evenodd" />
            </svg>


        </button>
        <Samadhi />
        <button @click="closePost"
            class="bg-amber-800 m-4 text-white p-4 w-36 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
                    clip-rule="evenodd" />
            </svg>


        </button>
    </div>
</template>
<style >
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
}
</style>