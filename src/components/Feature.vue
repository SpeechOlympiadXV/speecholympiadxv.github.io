<template>
    <div class="flex flex-col md:flex-row gap-6 m-9 p-9 w-[80%] rounded-2xl mx-auto backdrop-brightness-150">
      <!-- Content Section -->
      <div class="flex-1 space-y-4">
        <h2 class="text-5xl font-bold text-white">
          {{ heading }}
        </h2>
        
        <p class="text-gray-100 leading-relaxed">
          {{ text }}
        </p>
        
        <button @click="click(urlString)" class="inline-flex items-end px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-4 w-4 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      
      <!-- Image Section -->
      <div class="w-full md:w-1/3">
        <img 
          :src="image" 
          alt="Description" 
          class="w-full h-64 object-cover rounded-lg"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    index: Number,
    heading: String,
    headingEnd: String,
    text: String,
    image: String,
    urlString: String,
  })

  function click(urlString) {
    window.location.href = urlString
  }
  </script>