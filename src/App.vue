<script >
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppPageLayout from "./components/AppPageLayout.vue";

export default {
  components: {
    AppPageLayout,
    AppHeader,
    AppFooter
  }
}



</script>

<template>
  <div>
    <AppHeader />
    <AppPageLayout />
    <AppFooter />
  </div>
</template>

<style >

</style>
