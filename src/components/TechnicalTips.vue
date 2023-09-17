<template>
    <div
        :class="[backgroundColorClass, 'border', 'border-gray-200', 'bg-opacity-80', 'hover:bg-opacity-100', 'rounded-lg', 'p-4', 'my-3', 'md:my-0', 'w-full']">
        <h5 class="text-left font-bold text-amber-100 text-4xl mb-2 border-b-2 border-zinc-500 pb-2" v-html="title"></h5>
        <div class="md:flex ">
            <div class="md:w-1/3 md:flex md:justify-center my-4">
                <img alt="" :src="imageSrc" class="w-24 h-24 rounded-full mx-auto" loading="lazy">
            </div>
            <div class="md:w-2/3 card-body ">

                <h6 class="text-left text-gray-200 mt-3 mb-2">{{ subtitle }}</h6>

            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "TestimonialCard",
    props: {
        imageSrc: String,
        title: String,
        subtitle: String,
        body: String,
        backgroundColorClass: String, // New prop for custom background class
    },
};
</script>
  