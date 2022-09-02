<script >

import AppHeaderMenu from './AppHeaderMenu.vue';
import SOLogo from './SOLogo.vue';

export default {
  components: {
    AppHeaderMenu,
    SOLogo,

  }
}

</script>

<template>
  <div class="headerbar">
    <!-- Write a css to position the below containers -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" aria-label="NavBar">
      <div class="container-fluid">

        <div id="logo" style="width: 2opx !important,height=20px !important">
          <a class="navbar-brand" href="/home">

            <!-- Change the logo to the correct source -->
            <SOLogo />
          </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar1"
          aria-controls="navBar1" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navBar1">
          <ul class="navbar-nav ms-auto mb-2 mb-md-0">

            <AppHeaderMenu />

          </ul>

        </div>
      </div>
    </nav>

  </div>




</template>

<style scoped>
</style>