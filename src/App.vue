<script >
import Sample from "./components/Sample.vue";
import AppFooter from "./components/AppFooter.vue";

import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    Sample,
    AppHeader,
    AppFooter
  }
}



</script>

<template>
  <div>
    <AppHeader />


    <!-- The following components are for testing purposes -->
    <Sample />
    <AppFooter />
  </div>
</template>

<style >

</style>
