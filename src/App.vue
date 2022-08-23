<script >
import Sample from "./components/Sample.vue";

import AppHeader from "./components/header/AppHeader.vue";

export default {
  components: {
    Sample,
    AppHeader
  }
}



</script>

<template>
  <div>
    <AppHeader />


    <!-- The following components are for testing purposes -->
    <Sample />
    <!-- <ButtonCounter /> -->
  </div>
</template>

<style >

</style>
