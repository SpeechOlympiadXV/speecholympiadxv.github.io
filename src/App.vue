<script >
import AppFooter from "./components/AppFooter.vue";

import AppHeader from "./components/AppHeader.vue";
import AppPageLayout from "./components/AppPageLayout";

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


    <!-- The following components are for testing purposes -->
    <AppPageLayout />
    <AppFooter />
  </div>
</template>

<style >

</style>
