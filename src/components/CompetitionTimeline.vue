<template>
    <div class="p-9 m-9 bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm rounded-xl w-[90%] ml-[5%] md:w-[80%] md:ml-[10%] mr-auto">
    <div class="">
        <h2 class="text-3xl lg:text-4xl font-semibold text-white tracking-[-2px] leading-2 w-[80%] text-wrap">
        Timeline
        </h2>
        <p class="mt-4 text-gray-300 leading-6 text-left text-lg font-thin">
        Key stages and dates
        </p>
    </div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
            
        <div
        v-for="(stage, index) in stages"
        :key="stage.name"
        class="relative my-8 w-full sm:w-[90%] mx-auto"
        >
            <!-- Vertical line -->
            <div :class="['absolute overflow-visible top-8 left-0 sm:left-1 transform sm:-translate-x-1/2 w-[1px] bg-[#fee680] backdrop-brightness-200 ', stage.end ? 'h-0' : 'h-[120%]']"></div>
            
            <!-- Diamond shape -->
            <div
              class="absolute top-8 left-0 sm:left-1 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#edc001] to-[#fee680] rotate-45"
            ></div>
            
            <div
              class="flex flex-col sm:flex-row items-center sm:justify-between sm:items-start mb-4"
            >
              <div class="pl-[10%] w-[90%] sm:w-2/3 sm:pl-8 mb-4">
                <div class="flex items-center mb-2">
                  <!-- <div
                    class="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center z-10"
                  >
                    <component
                      :is="stage.icon"
                      class="w-8 h-8 text-white"
                    ></component>
                  </div> -->
                  <div class="ml-0">
                    <h3 class="text-xl font-semibold text-gray-200">
                      {{ stage.name }}
                    </h3>
                    <time class="text-sm text-gray-300">
                      {{ stage.date }}
                    </time>
                  </div>
                </div>
                <p class="mt-2 text-base text-gray-300 text-wrap text-justify">
                  {{ stage.description }}
                </p>
              </div>
              <div class="visibiliy sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-slate-500 rounded-lg">
                <img :src="'https://placehold.co/600x600'" class="w-full h-full object-cover rounded-lg">
                </img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
//   import { CalendarDays, Flag, Medal, Trophy, Users } from "lucide-vue-next";
  
  export default defineComponent({
    name: "EnhancedVerticalCompetitionTimeline",
    setup() {
      const stages = ref([
        {
          name: "Registration",
        //   icon: Users,
          date: "Jan 1 - Jan 31, 2025",
          heading: "Open for Entries",
          description:
            "Register your team and submit your initial project proposal. Early bird discounts available until January 15th.",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Preliminary",
        //   icon: Flag,
          date: "Feb 15 - Feb 28, 2025",
          heading: "First Round Judging",
          description:
            "Submit your detailed project plan. Top 50% of entries will advance to the semi-finals.",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Semi Finals",
        //   icon: Medal,
          date: "Mar 15 - Mar 16, 2025",
          heading: "Pitch Presentations",
          description:
            "Present your project to our panel of expert judges. Top 10 teams will advance to the grand finals.",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          name: "Grand Finals",
        //   icon: Trophy,
          date: "Apr 1, 2025",
          heading: "Final Showdown",
          description:
            "Showcase your completed project to industry leaders. Winners will be announced and prizes awarded.",
          image: "/placeholder.svg?height=200&width=200",
          end : true
        },
      ]);
  
      return { stages };
    },
  });
  </script>
  
<style scoped>
.visibiliy {
    display: none;
}

@media (min-width: 640px) {
    .visibiliy {
        display: block;
    }
}
</style>
  