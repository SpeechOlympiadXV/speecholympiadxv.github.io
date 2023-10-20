<template>
    <div class="col-12 mb-2 mt-6">
        <h1 class="featurette-heading mt-0 mb-4">Finalists</h1>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <!-- Grid items -->
        <div v-for="(item, index) in gridData_1" :key="index"
            class="bg-transparent  border-2 border-red-700 p-2 rounded-lg shadow-lg  animate-fade-in"
            :class="{ 'animate-elementL': (number >= item.number) }">
            <div class="flex flex-col items-center justify-center md:p-2">
                <img :src="item.image" alt="Image" class="w-24 h-24 md:w-32 md:h-32 rounded-full mb-2" />
                <span class="text-center md:text-lg px-4">{{ item.text }}</span>
            </div>
        </div>

    </div>

    
    <div class="col-12 mb-2 mt-6">
        <h1 class="featurette-heading mt-0 mb-4"> Reserved Finalist</h1>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <!-- Grid items  .... check this grid  ....-->

    <div class="bg-transparent border-2 border-red-900 p-2 rounded-lg shadow-lg animate-fade-inL"
         :class="{ 'animate-elementL': (number >= reserved_1[0].number) }">
        <div class="flex flex-col items-center">
            <span class="text-center md:text-lg">{{ reserved_1[0].text }}</span>
        </div>
    </div>

    </div>

    <div class="col-12 mb-2 mt-6">
        <h1 class="featurette-heading mt-0 mb-4">Semi Finalists</h1>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <!-- Grid items -->
        <div v-for="(item, index) in gridData_2" :key="index"
            class="bg-transparent  border-2 border-yellow-700 p-2 rounded-lg shadow-lg  animate-fade-in"
            :class="{ 'animate-elementL': (number >= item.number) }">
            <div class="flex flex-col items-center justify-center md:p-2">
                <img :src="item.image" alt="Image" class="w-24 h-24 md:w-32 md:h-32 rounded-full mb-2" />
                <span class="text-center md:text-lg px-4">{{ item.text }}</span>
            </div>
        </div>

    </div>

    <div class="col-12 mb-2 mt-6">
        <h1 class="featurette-heading mt-0 mb-4"> Reserved Semi Finalists</h1>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <!-- Grid items -->
        <div v-for="(item, index) in reserved_2" :key="index"
            class="bg-transparent  border-2 border-yellow-900 p-2 rounded-lg shadow-lg animate-fade-inL"
            :class="{ 'animate-elementL': (number >= item.number) }">
            <div class="flex flex-col items-center">
                <span class="text-center md:text-lg">{{ item.text }}</span>
            </div>
        </div>

    </div>
</template>
  
<script>

import afra from '../assets/images/SemiFinalists/Afra.jpg'
import chathura from '../assets/images/SemiFinalists/Chathura.jpg'
import damsith from '../assets/images/SemiFinalists/Damsith Adikari.jpeg'
import adeepa from '../assets/images/SemiFinalists/Adeepa_.jpg'
import hasindu from '../assets/images/SemiFinalists/Hasindu Warnapura.jpg'
import lakindu from '../assets/images/SemiFinalists/Lakindu.png'
import oshan from '../assets/images/SemiFinalists/Oshan Yalegama.jpg'
import pasindu from '../assets/images/SemiFinalists/Pasindu_M..png'
import varun from '../assets/images/SemiFinalists/Poobalaraja Varun .jpg'
import saai from '../assets/images/SemiFinalists/Saai Syvendra.jpg'
import sasindi from '../assets/images/SemiFinalists/Sasindi.jpg'
import ami from '../assets/images/SemiFinalists/ami.jpg'

import afra_f from '../assets/images/finalists/afra.jpg'
import lakindu_f from '../assets/images/finalists/lakindu.jpg'
import damsith_f from '../assets/images/finalists/damsith.jpg'
import saai_f from '../assets/images/finalists/saai.jpg'
import ami_f from '../assets/images/finalists/ami.jpg'

export default {
    data() {
        return {
            gridData_2: [
                { text: "Adeepa Kularathne", image: adeepa, number: 0 },
                { text: "Afrah Rumie", image: afra, number: 1 },
                { text: "Amirthavarshani Ananthan", image: ami, number: 2 },
                { text: "Chathura Gunasekara", image: chathura, number: 3 },
                { text: "Damsith Adikari", image: damsith, number: 4 },
                { text: "Hasindu Warnapura", image: hasindu, number: 5 },
                { text: "Lakindu Kariyawasam", image: lakindu, number: 6 },
                { text: "Oshan Yalegama", image: oshan, number: 7 },
                { text: "Pasindu Weerasinghe", image: pasindu, number: 8 },
                { text: "Poobalaraja Varun", image: varun, number: 9 },
                { text: "Saai Syvendra", image: saai, number: 10 },
                { text: "Sasindi Peiris", image: sasindi, number: 11 },
                // Add more items as needed
            ],
            gridData_1: [
                { text: "Afrah Rumie", image: afra_f, number: 0 },
                { text: "Amirthavarshani Ananthan", image: ami_f, number: 1 },
                { text: "Damsith Adikari", image: damsith_f, number: 2 },
                { text: "Lakindu Kariyawasam", image: lakindu_f, number: 3 },
                { text: "Saai Syvendra", image: saai_f, number: 4 },
                // Add more items as needed
            ],
            reserved_1: [
                { text: "Adeepa Kularathne", number: 12 },
            ],

            reserved_2: [
                { text: "Hesandu Hemal", number: 12 },
                { text: "Inodee Fernando", number: 13 },
                { text: "Safnas Kaldeen", number: 14 },
                { text: "Savinu Aththanayake", number: 15 },

                // Add more items as needed
            ],
            animate: false,
            number: -1
        };
    },
    methods: {
        increment() {
            if (this.number != 16) {
                setTimeout(() => {
                    this.number = this.number + 1;
                    console.log(this.number)
                    this.increment()
                }, 300)
            }
        }
    },
    mounted() {
        console.log(this.number)
        this.increment()
    }
};
</script>
  
<style scoped>
.animate-fade-in {
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 2s ease, transform 2s ease;
}

.animate-fade-inL {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 2s ease, transform 2s ease;
}

.timeline-item {
    display: flex;
    width: 80%;
    margin: 20px 0;
}

.animate-elementL {
    opacity: 1;
    transform: translateX(0px);

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
</style>
  