<script >
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

import PageHome from "./pages/PageHome.vue";
import PageAbout from "./pages/PageAbout.vue";
import PageTechnicalTips from "./pages/PageTechnicalTips.vue";
import PageComingSoon from "./pages/PageComingSoon.vue";
import Page404 from "./pages/Page404.vue";
import PageChampionsStory from "./pages/PageChampionsStory.vue"

const routes = {
  "/": PageHome,
  "/about": PageAbout,
  "/champions-story": PageChampionsStory,
  "/technical-tips": PageTechnicalTips,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {
    currentView() {
      //scroll to page top before changing the view
      window.scrollTo({ top: 0, behavior: 'auto' });

      return routes["/" + this.currentPath.slice(1)] || Page404;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      // TODO pass a reference to the current menu item
      this.currentPath = window.location.hash;
    });

    // animate on scroll
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('animated-show');
        }else{
          entry.target.classList.remove('animated-show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> observer.observe(el));
  },
};


</script>

<template>
  <AppHeader />

  <component :is="currentView" />

  <AppFooter />
</template>

<style >
</style>
