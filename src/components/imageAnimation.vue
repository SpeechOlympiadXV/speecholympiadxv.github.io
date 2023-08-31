<template>
    <div class="w-full">
        <!-- <transition name="image-fade" mode="out-in"> -->
        <img :src="currentImage" :key="currentImage" class="image" />
        <!-- </transition> -->
    </div>
</template>
  
<script>
import dragon1 from '../assets/images/dragon1.png'
import dragon2 from '../assets/images/dragon2.png'
export default {

    data() {
        return {
            currentImage: dragon1,
        };
    },
    methods: {
        switchImage() {
            // Simulate loading a new image
            setTimeout(() => {
                this.currentImage = dragon2;
            }, 1500); // 1 second
        },
    },
    mounted() {
        this.switchImage();
    },
};
</script>
  
<style>
.image {
    width: 300px;
    height: 300px;
    /* filter: blur(1px); */
    /* Initial blur effect */
}

.image-fade-enter-active,
.image-fade-leave-active {
    transition: opacity 2s, filter 1s;
}

.image-fade-enter,
.image-fade-leave-to

/* .image-fade-leave-active in <2.1.8 */
    {
    opacity: 100;
    filter: blur(0px);
    /* Remove blur effect when fading out */
}
</style>
  