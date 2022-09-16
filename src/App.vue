<script >
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppPageLayout from "./components/AppPageLayout.vue";

import PageSample from "./pages/PageSample.vue";
import PageComingSoon from "./pages/PageComingSoon.vue";
import Page404 from "./pages/Page404.vue";

const routes = {
  "/": PageSample,
  "/about": PageComingSoon,
  "/speakers": PageComingSoon,
  "/contact": PageComingSoon,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  components: {
    AppPageLayout,
    AppHeader,
    AppFooter,
  },
  computed: {
    currentView() {
      console.log(window.location.hash.slice(1));
      return routes["/" + this.currentPath.slice(1)] || Page404;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
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
