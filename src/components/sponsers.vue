<template>
  <div class="w-full flex justify-center items-center mb-9">
    <div class="w-[90%] md:w-[80%] bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
      <div class="w-full flex flex-col items-start mb-9">
        <h1 class="text-3xl lg:text-4xl font-semibold tracking-[-2px] leading-2 text-white">
          Our Partners
        </h1>
      </div>
      
      <div v-for="type in ['Gold', 'Silver', 'Bronze']" :key="type" class="mb-8">
        <template v-if="getSponsorsByType(type).length > 0">
          <h2 class="text-xl lg:text-2xl font-semibold text-gray-300 mb-4">{{ type }} Sponsor</h2>
          <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
            <div v-for="sponsor in getSponsorsByType(type)" :key="sponsor.id" class="sponsor-box col-span-1">
              <div class="backdrop-brightness-150 rounded-lg shadow-lg p-4 transition duration-300 ease-in-out transform w-full h-full border border-gray-700">
                <div class="w-full h-full flex flex-col items-center justify-center">
                  <img v-if="sponsor.name !== 'mystery'" :src="sponsor.imageUrl" :alt="sponsor.name" class="w-full object-contain">
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-question mb-4">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                    <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"/>
                    <path d="M12 17h.01"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
      
      <div v-if="sponsors.length === 0" class="text-center">
        No sponsors available at the moment.
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const sponsors = ref([
  {
    id: 1,
    name: 'Commercial Bank',
    imageUrl: "src/assets/logos/combanklogo.png",
    partnershipType: 'Silver'
  }
])
const getSponsorsByType = (type) => {
  return sponsors.value.filter(sponsor => sponsor.partnershipType === type)
}
</script>

<style scoped>
.sponsor-box {
  @apply flex flex-col;
}
</style>

