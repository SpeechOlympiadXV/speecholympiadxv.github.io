<template>
    <!-- <div class="flex justify-center items-center w-full">
        <button
            class="relative px-8 py-4 border-4 border-yellow-500 featurette-heading text-yellow-500 text-4xl rounded-full hover:bg-golden hover:text-white transition-all">
            <h1 class="text-xl">Click Me</h1>

            <svg xmlns="http://www.w3.org/2000/svg" class=" w-6 absolute right-4 top-1/2 transform -translate-y-1/2"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    </div> -->

   <!---- <div class="col-12 mb-2 mt-6">
        <h1 class="featurette-heading mt-0 mb-4">Finalists</h1>
    </div>
    <div class="grid grid-cols-4 md:grid-cols-4 gap-4 p-4">
     
        <div v-for="(item, index) in gridData_1" :key="index"
        class="bg-gradient-to-br  border-4 border-red-50 p-2 rounded-lg shadow-2xl transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-3xl transition-transform duration-1 ease-out animate-fade-in" 
        :class="{ 'animate-elementL': (number >= item.number) }">
            <div class="flex flex-col items-center justify-center md:p-2">
                <img :src="item.image" alt="Image" class="w-24 h-24 md:w-32 md:h-32 rounded-full mb-2" />
                <span class="text-center md:text-lg px-4">{{ item.text }}</span>
            </div>
        </div> 

    </div> -->

    <div class="col-12 mb-2 mt-6 px-4"> 
    <h1 class="featurette-heading mt-0 mb-4">Semi Finalists</h1>
    </div>
            <div class="flex h-full w-full items-center justify-center px-4">
            <div class="w-[100%] max-w-full px-4">
                <ul class="flex flex-row gap-10 justify-center flex-wrap"> 
                    <li
                        v-for="(item, index) in gridData_1"
                        :key="`item-${index}`"
                        :class="['w-8 h-8 rounded-2xl bg-c9c6c7 overflow-hidden transition-all duration-300 ease-in-out', 
                                { 'w-[15%]': hoverIndex !== index, 
                                'w-[30%]': hoverIndex === index }]"
                        :aria-current="hoverIndex === index ? 'true' : 'false'"
                        @mouseenter="hoverIndex = index"
                        @mouseleave="hoverIndex = null"
                    >
                        <img class="h-full w-full object-cover" :src="item.image" />
                        <div v-show="hoverIndex === index" class="absolute top-0 left-0 right-0 flex items-center justify-center p-4 bg-opacity-50 ">
                            <p class="typing-effect" style="color :ghostwhite;">{{ item.text }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>









    <!--------------

    <div class="flex h-full w-full items-center justify-center">
    <div class="w-full flex justify-center">
        <ul class="group flex flex-row gap-10 justify-center">
            <li v-for="(item, index) in gridData_1" :key="item.text"
                class="w-8 h-8 rounded-2xl bg-c9c6c7 overflow-hidden relative transition-all duration-300 cursor-pointer { '[&[aria-current=true]]:w-[48%]': activeItem === index }"
                :aria-current="activeItem === index ? 'true' : 'false'"
                @click="toggleActive(index)">
                <img class="h-full w-full object-cover" :src="item.image">
            </li>
        </ul>
    </div>
</div>



<!---------------------------------->


    <div class="col-12 mb-2 mt-6">
        <h1 class="featurette-heading mt-0 mb-4"> Reserved Semi Finalist</h1>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">

        <div class="bg-gradient-to-br  border-4 border-red-50 p-2 rounded-lg shadow-2xl transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-3xl transition-transform duration-150 ease-out animate-fade-in"
            :class="{ 'animate-elementL': (number >= reserved_1[0].number) }">
            <div class="flex flex-col items-center">
                <span class="text-center md:text-lg">{{ reserved_1[0].text }}</span>
            </div>
        </div>

        <div class="bg-gradient-to-br  border-4 border-red-50 p-2 rounded-lg shadow-2xl transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-3xl transition-transform duration-150 ease-out animate-fade-in"
            :class="{ 'animate-elementL': (number >= reserved_1[1].number) }">
            <div class="flex flex-col items-center">
                <span class="text-center md:text-lg">{{ reserved_1[1].text }}</span>
            </div>
        </div>

        <div class="bg-gradient-to-br  border-4 border-red-50 p-2 rounded-lg shadow-2xl transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-3xl transition-transform duration-150 ease-out animate-fade-in"
            :class="{ 'animate-elementL': (number >= reserved_1[2].number) }">
            <div class="flex flex-col items-center">
                <span class="text-center md:text-lg">{{ reserved_1[2].text }}</span>
            </div>
        </div>

        <div class="bg-gradient-to-br  border-4 border-red-50 p-2 rounded-lg shadow-2xl transform hover:translate-y-[-8px] hover:scale-105 hover:shadow-3xl transition-transform duration-150 ease-out animate-fade-in"
            :class="{ 'animate-elementL': (number >= reserved_1[3].number) }">
            <div class="flex flex-col items-center">
                <span class="text-center md:text-lg">{{ reserved_1[3].text }}</span>
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


import aloka from '../assets/images/finalists/aloka.png'
import afra_f from '../assets/images/finalists/afra.png'
import neela from '../assets/images/finalists/neela.png'
import anuja from '../assets/images/finalists/anuja.png'
import harshi  from '../assets/images/finalists/harshi.png'
import ranuja from '../assets/images/finalists/ranuja.png'
import ravitha from '../assets/images/finalists/ravitha.png'
import thulasi from '../assets/images/finalists/thulasi.png'
import unduli from '../assets/images/finalists/unduli.png'
import ami from '../assets/images/finalists/ami.png'

export default {


    data() {
        
        return {
            activeItem: null ,
            hoverIndex: null ,


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
                
                { text: "Afrah Rumie", image: afra_f, number: 1 },
                { text: "Anuja Mahamalage", image:anuja, number: 3 },
                { text: "Aloka Fernando", image: aloka, number: 4 },
                { text: "Harshi Gunawardhane", image: harshi , number: 5 },
                { text: "Neelayadhakshi Priyadhakshan", image: neela, number: 6 },
                { text: "Ranuja Jayawardena", image: ranuja, number: 7 },
                { text: "Ravitha Perera", image: ravitha, number: 8 },
                { text: "Thulasithan Gnanenthiram", image: thulasi, number: 10 },
                { text: "Unduli Senadheera", image: unduli, number: 11 },
                { text: "Amirthavarshani Ananthan", image: ami, number: 12 },


                // Add more items as needed
            ],

            reserved_1: [
            { text: "Hasith Nettikumara", number: 13 },
            { text: "Rasika Gunasekera", number: 14 },
            { text: "Sadil Jayatilaka", number: 15 },
            { text: "Thilakshan Balakrishnan", number: 16 },

            ],

            reserved_2: [
                { text: "Hesandu Hemal", number: 12 },
                { text: "Inodee Fernando", number: 13 },
                { text: "Safnas Kaldeen", number: 14 },
                { text: "Savinu Aththanayake", number: 15 },

                // Add more items as needed
            ],
            animate: false,
            final: false,
            semi: false,
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
        },

        setActive(index) {
            this.activeItem = index;},

        toggleActive(index) {
            console.log("Index clicked:", index);
            this.activeItem = this.activeItem === index ? null : index;
            console.log("Active clicked:", this.activeItem);
        },
        hoverItem(index) {
            this.hoverIndex = index;
        },
        unhoverItem() {
            this.hoverIndex = null;
        }



    },
    mounted() {
        console.log(this.number)
        this.increment()
    }
};
</script>
  
<style scoped>
    .w-8 {
    width: 19%; /* 32px */
    }
    .h-8 {
    height: 80%; /* 32px */
    }
    .rounded-2xl {
    border-radius: 1rem; /* 16px */
    }
    .bg-c9c6c7 {
    background-color: #c9c6c7;
    }

    li {
    transition: width 0.5s ease; /* Ensures smooth transition for width changes */
    width: 100%; /* Default width for all items */
    }

    li:hover {
        width: 15%; /* Width on hover for all items */
    }

    li[aria-current="true"] {
        width: 25%; /* Active item width */
    }


    /* Specific hover styles for first and last items if needed */




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
    @keyframes typing {
    0% {
        max-width: 0;
    }
    100% {
        max-width: 100%;
    }
    }

    

    .typing-effect {
        font-family: 'Courier New', monospace;
        border-right: none; /* Caret color */
        white-space: nowrap;
        overflow: hidden; /* Keeps the content from spilling outside the container */
        display: inline-block;
        font-weight: bold; /* Making sure the font is bold */
        font-size: 24px; /* Adjust font size as needed */
        animation: typing 2s steps(20, end) ;
    }

</style>
  