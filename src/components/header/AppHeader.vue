<script >

import AppHeaderMenu from './AppHeaderMenu.vue';
export default {
  components: {
    AppHeaderMenu
  }
}

</script>

<template>
    <div class="headerbar">
        This is the AppHeader component.
        <!-- TODO: have to write a css to position the below containers -->
        <div id="logo">
            <img src="so_logo.jpg" alt="speech olympiard logo">
            <!-- TODO: Change the logo to the correct source -->
            

        </div>
        <AppHeaderMenu />
    </div>

    <!-- TODO: Create a function and bind it to the onclick. Add logic to change active menu item -->


</template>

<style scoped>
.heading {
    font-size: 2.5rem;
}
</style>