<script setup>
import { ref, onMounted } from 'vue';
import WingedAward from './WingedAward.vue';

const isLoaded = ref(false);

onMounted(() => {
    // Trigger the animation when the component is mounted
    setTimeout(() => {
        isLoaded.value = true;
    }, 0); // Slight delay to allow the DOM to render
});
</script>

<template>
    <div class="w-full h-[90vh] background-gradient flex flex-col lg:flex-row items-center justify-fill relative">
        <div class="absolute w-auto h-auto z-0 -translate-x-20 opacity-[30%] left-1/4 lg:translate-y-1 -translate-y-32">
            <WingedAward />
        </div>
        <div class="w-full lg:w-[69%] h-full flex flex-col items-end justify-center p-2">
            <div class="flex flex-row justify-center items-baseline p-2 relative overflow-hidden">
                <Transition name="unveiled-animation">
                    <!-- Animate this div when the page loads -->
                    <div v-if="!isLoaded" class="absolute w-full h-full bg-black z-20"></div>
                </Transition>
                <div class="font-thin italic">Stories</div>
                <div class="text-7xl sm:text-8xl md:text-9xl font-semibold">Unveiled</div>
            </div>
            <div class="flex flex-row justify-center items-baseline p-2">
                <Transition name="unleashed-animation">
                    <div v-if="isLoaded" class="font-thin italic">Wings</div>
                </Transition>
                <Transition name="unleashed-animation">
                    <div v-if="isLoaded" class="text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-semibold">Unleashed</div>
                </Transition>
            </div>
            <Transition name="unbound-animation">
                <div v-if="isLoaded" class="flex flex-row justify-center items-baseline p-2">
                    <div class="font-thin italic">Limits</div>
                    <div class="text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-semibold">Unbound</div>
                </div>
            </Transition>
        </div>
    </div>
</template>



<style>

.background-gradient {
    background-size: 100% 100%;
    background-position: 0px 0px;
    background-image: radial-gradient(75% 75% at 50% 50%, #000000 59%, #181818 100%);
}

.unveiled-animation-enter-active, .unveiled-animation-leave-active {
    transition: transform 1.5s;
    transition-delay: 0.5s;
}

.unveiled-animation-enter-from {
    transform: translateY(-100%);
}

.unveiled-animation-enter-to {
    transform: translateY(0);
}

.unveiled-animation-leave-to {
    transform: translateY(-100%);
}



.unleashed-animation-enter-active, .unleashed-animation-leave-active {
    transition: transform 1.5s, opacity 1.5s;
    transition-delay: 2s;
}

.unleashed-animation-enter-from {
    transform: translateY(100%); /* Slide upwards from below */
    opacity: 0;
}

.unleashed-animation-enter-to {
    transform: translateY(0);
    opacity: 1;
}


.unbound-animation-enter-active, .unbound-animation-leave-active {
    transition: transform 1.5s, opacity 1.5s;
    transition-delay: 3.5s;
}

.unbound-animation-enter-from {
    transform: translateX(-100%); /* Slide upwards from below */
    opacity: 0;
}

.unbound-animation-enter-to {
    transform: translateX(0);
    opacity: 1;
}

</style>