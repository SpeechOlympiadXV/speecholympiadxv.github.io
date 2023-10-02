<template>
    <div class="col-12 mb-2 mt-6">
        <h1 class="featurette-heading mt-0 mb-4">Semi Finalists</h1>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
        <!-- Grid items -->
        <div v-for="(item, index) in gridData" :key="index"
            class="bg-transparent  border-2 border-yellow-700 p-2 rounded-lg shadow-lg  animate-fade-in"
            :class="{ 'animate-elementL': (number >= item.number) }">
            <div class="flex flex-col items-center">
                <img :src="item.image" alt="Image" class="w-24 h-24 md:w-32 md:h-32 rounded-full mb-2" />
                <p class="text-center">{{ item.text }}</p>
            </div>
        </div>

    </div>
    <div class="col-12 mb-2 mt-6">
        <h1 class="featurette-heading mt-0 mb-4"> Reserved Semi Finalists</h1>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
        <!-- Grid items -->
        <div v-for="(item, index) in reserved" :key="index"
            class="bg-transparent  border-2 border-yellow-900 p-2 rounded-lg shadow-lg animate-fade-inL"
            :class="{ 'animate-elementL': (number >= item.number) }">
            <div class="flex flex-col items-center">
                <img :src="item.image" alt="Image" class="w-24 h-24  md:w-32 md:h-32 rounded-full mb-2" />
                <p class="text-center">{{ item.text }}</p>
            </div>
        </div>

    </div>
</template>
  
<script>

import semi1 from '../assets/images/kasunayya.jpg'
export default {
    data() {
        return {
            gridData: [
                { text: "Item 1", image: semi1, number: 0 },
                { text: "Item 2", image: semi1, number: 1 },
                { text: "Item 3", image: semi1, number: 2 },
                { text: "Item 4", image: semi1, number: 3 },
                { text: "Item 5", image: semi1, number: 4 },
                { text: "Item 6", image: semi1, number: 5 },
                { text: "Item 7", image: semi1, number: 6 },
                { text: "Item 8", image: semi1, number: 7 },
                { text: "Item 9", image: semi1, number: 8 },
                { text: "Item 10", image: semi1, number: 9 },
                { text: "Item 11", image: semi1, number: 10 },
                { text: "Item 12", image: semi1, number: 11 },
                // Add more items as needed
            ],
            reserved: [
                { text: "Item 1", image: semi1, number: 12 },
                { text: "Item 2", image: semi1, number: 13 },
                { text: "Item 3", image: semi1, number: 14 },
                { text: "Item 4", image: semi1, number: 15 },

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
  