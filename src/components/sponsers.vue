<template>
    <div class="grid grid-cols-2 gap-4  w-full">
        <!-- Official Strategic Partner -->
        <div class=" p-4 flex flex-col items-center rounded-lg ">
            <h2 class="md:text-2xl  text-center text-sm font-semibold mb-2">Official Strategic Partner</h2>
            <img :src="uniliver" alt="Official Strategic Partner" class="w-full md:w-1/2 h-auto">
        </div>

        <!-- Official Banking Partner -->
        <div class=" p-4 rounded-lg flex flex-col items-center ">
            <h2 class="md:text-2xl text-center text-sm font-semibold mb-2">Exclusive Banking Partner</h2>
            <img :src="combank" alt="Official Banking Partner" class="w-full md:w-1/2 h-auto">
        </div>
    </div>
</template>
  
<script>
import combank from '../assets/logos/combank copy.png'
import uniliver from '../assets/logos/uniliver.png'
export default {
    name: 'SponsorDisplay',
    data() {
        return {
            combank,
            uniliver
        }
    }
    // Add any necessary props, data, and methods here
}
</script>
  