<script >
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

import PageHome from "./pages/PageHome.vue";
import PageAbout from "./pages/PageAbout.vue";
import PageTechnicalTips from "./pages/PageTechnicalTips.vue";
import PageComingSoon from "./pages/PageComingSoon.vue";
import PageGallery from "./pages/PageGallery.vue";
import Page404 from "./pages/Page404.vue";
import PageChampionsStory from "./pages/PageChampionsStory.vue"
import PageBlogs from './pages/PageBlogs.vue'
import PageTest from './pages/PageTest.vue';
import SinglePost from "./components/SinglePost.vue";
import PageForm from "./pages/PageForm.vue";
import { useSanityClient } from 'vue-sanity'
import PageAdmin from "./pages/PageAdmin.vue";
import PageFormNew from "./pages/PageFormNew.vue";

const routes = {
  "/": PageHome,
  "/about": PageAbout,
  "/champions-story": PageChampionsStory,
  "/technical-tips": PageTechnicalTips,
  "/gallery": PageGallery,
  "/blogs": PageTest,
  "/form": PageForm,
  "/admin": PageAdmin,
  "/register": PageFormNew,

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
  },
  setup() {
    useSanityClient(
      {
        projectId: 'i32b0q2c',
        dataset: 'production',
        useCdn: true,
      },
      true // will now create a preview client for use elsewhere
    )
  },
};


</script>

<template>
  <AppHeader />

  <component :is="currentView" />

  <AppFooter />
</template>

<style ></style>
<!-- 
<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

import PageHome from "./pages/PageHome.vue";
import PageAbout from "./pages/PageAbout.vue";
import PageTechnicalTips from "./pages/PageTechnicalTips.vue";
import PageComingSoon from "./pages/PageComingSoon.vue";
import PageGallery from "./pages/PageGallery.vue";
import Page404 from "./pages/Page404.vue";
import PageChampionsStory from "./pages/PageChampionsStory.vue";
import PageBlogs from './pages/PageBlogs.vue';
import PageTest from './pages/PageTest.vue';
import SinglePost from "./components/SinglePost.vue";
import { useSanityClient } from 'vue-sanity'

const routes = {
  "/": PageHome,
  "/about": PageAbout,
  "/champions-story": PageChampionsStory,
  "/technical-tips": PageTechnicalTips,
  "/gallery": PageGallery,
  "/blogs": PageBlogs,
  "/test/:limit": PageTest,
  "/blog/:postId": SinglePost // Use route parameter for postId
};

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {
    currentView() {
      //scroll to page top before changing the view
      window.scrollTo({ top: 0, behavior: 'auto' });

      return routes["/" + this.$route.hash.slice(1)] || Page404;
    },
  },
  setup() {
    useSanityClient(
      {
        projectId: 'i32b0q2c',
        dataset: 'production',
        useCdn: true,
      },
      true // will now create a preview client for use elsewhere
    )
  },
};
</script>

<template>
  <AppHeader />

  <component :is="currentView" />

  <AppFooter />
</template>

<style></style> -->
