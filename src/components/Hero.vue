<script setup>
import { ref, onMounted } from 'vue';
import LaurelWreath from './LaurelWreath.vue';

const isLoaded = ref(false);
const textAnimationDone = ref(false);
const stars = ref([])

onMounted(() => {
    // Trigger the animation when the component is n
    setTimeout(() => {
        isLoaded.value = true;
    }, 0.1); // Slight delay to allow the DOM to render

    setTimeout(() => {
        textAnimationDone.value = true;
    }, 3000);

    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        stars.value.push({
        id: i,
        style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            filter : `blur(${Math.random() * 5}px)`,
            backgroundColor : `${Math.random() > 0.5 ? 'white' : '#EDC001'}`
        }
     })
    }
});
</script>

<template>
    <div class="w-full h-[78vh] sm:h-[82vh] md:h-[86vh] lg:h-[90vh] background-gradient flex flex-col items-center justify-center relative overflow-hidden">
        <div v-if="textAnimationDone" class="absolute inset-0">
          <div v-for="star in stars" :key="star.id" :style="star.style" class="star"></div>
        </div>
        <div class="absolute w-auto h-auto z-0 opacity-[20%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <LaurelWreath />
        </div>
        <div class="w-full max-w-4xl h-full flex flex-col items-center justify-center p-2">
            
            <!-- SPEAK -->
            <div class="flex flex-row justify-center items-baseline p-2 relative overflow-hidden">
                <Transition name="word-1-animation">
                    <div v-if="!isLoaded" class="absolute w-full h-full bg-black z-20"></div>
                </Transition>
                <div class="text-6xl xs:text-7xl sm:text-8xl md:text-9xl font-semibold text-white">SPEAK</div>
            </div>
            
            <!-- THE -->
            <div class="flex flex-row justify-center items-baseline p-2 relative overflow-hidden">
                <Transition name="word-2-animation">
                    <div v-if="!isLoaded" class="absolute w-full h-full bg-black z-20"></div>
                </Transition>
                <div class="font-thin italic text-md md:text-2xl">THE</div>
            </div>
            
            <!-- LIGHT -->
            <div class="flex flex-row justify-center items-baseline p-2 relative overflow-hidden">
                <Transition name="word-3-animation">
                    <div v-if="!isLoaded" class="absolute w-full h-full bg-black z-20"></div>
                </Transition>
                <div class="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-semibold text-white unleashed-shadow">LIGHT</div>
            </div>
            
            <!-- BE -->
            <div class="flex flex-row justify-center items-baseline p-2 relative overflow-hidden">
                <Transition name="word-4-animation">
                    <div v-if="!isLoaded" class="absolute w-full h-full bg-black z-20"></div>
                </Transition>
                <div class="font-thin italic text-md md:text-2xl text-[#EDC001]">BE THE</div>
            </div>
            
            
            <!-- STAR -->
            <div class="flex flex-row justify-center items-baseline p-2 relative overflow-hidden">
                <Transition name="word-6-animation">
                    <div v-if="!isLoaded" class="absolute w-full h-full bg-black z-20"></div>
                </Transition>
                <div class="text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-semibold text-[#EDC001] unbound-text-shadow">STAR</div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.unleashed-shadow {
    text-shadow: 0 0 10px #BC9C23;
}

.unbound-text-shadow {
    text-shadow: 0 0 10px #BC9C23;
}

.star {
  position: absolute;
  width: 0.25rem;
  height: 0.25rem;
  background-color: white;
  border-radius: 9999px;
  backdrop-filter: blur(100%);
  opacity: 0;
  animation: twinkle 5s infinite;
}

@keyframes twinkle {
  0% {
    opacity: 0;
    transform: scale(1);
    translate: 0 0;
  }
  50% {
    opacity: 0.7;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(1);
    translate: 0 -30px;
  }
}

.background-gradient {
    background-size: 100% 100%;
    background-position: 0px 0px;
    background-image: radial-gradient(75% 75% at 50% 50%, #000000 59%, #181818 100%);
}

/* Word 1: SPEAK - Slide down */
.word-1-animation-enter-active, .word-1-animation-leave-active {
    transition: transform 1s;
    transition-delay: 0.2s;
}
.word-1-animation-enter-from {
    transform: translateY(-100%);
}
.word-1-animation-enter-to {
    transform: translateY(0);
}
.word-1-animation-leave-to {
    transform: translateY(-100%);
}

/* Word 2: THE - Slide from left */
.word-2-animation-enter-active, .word-2-animation-leave-active {
    transition: transform 1s;
    transition-delay: 0.6s;
}
.word-2-animation-enter-from {
    transform: translateX(-100%);
}
.word-2-animation-enter-to {
    transform: translateX(0);
}
.word-2-animation-leave-to {
    transform: translateX(-100%);
}

/* Word 3: LIGHT - Slide from right */
.word-3-animation-enter-active, .word-3-animation-leave-active {
    transition: transform 1s;
    transition-delay: 1.0s;
}
.word-3-animation-enter-from {
    transform: translateX(100%);
}
.word-3-animation-enter-to {
    transform: translateX(0);
}
.word-3-animation-leave-to {
    transform: translateX(100%);
}

/* Word 4: BE - Slide up */
.word-4-animation-enter-active, .word-4-animation-leave-active {
    transition: transform 1s;
    transition-delay: 1.4s;
}
.word-4-animation-enter-from {
    transform: translateY(100%);
}
.word-4-animation-enter-to {
    transform: translateY(0);
}
.word-4-animation-leave-to {
    transform: translateY(100%);
}

/* Word 5: THE - Fade + Scale */
.word-5-animation-enter-active, .word-5-animation-leave-active {
    transition: transform 1s, opacity 1s;
    transition-delay: 1.8s;
}
.word-5-animation-enter-from {
    transform: scale(0.5);
    opacity: 0;
}
.word-5-animation-enter-to {
    transform: scale(1);
    opacity: 1;
}
.word-5-animation-leave-to {
    transform: scale(0.5);
    opacity: 0;
}

/* Word 6: STAR - Split reveal (like your original unbound) */
.word-6-animation-enter-active, .word-6-animation-leave-active {
    transition: transform 1s ease-in-out;
    transition-delay: 2.2s;
}
.word-6-animation-leave-from {
    transform: translateX(0);
}
.word-6-animation-leave-to {
    transform: translateX(-100%);
}
</style>