<script>
export default {
  data() {
    return {
      items: [
        //  Change the names to the correct names
        {
          name: 'Features',
          url: '/features'
        },
        {
          name: 'Prices',
          url: '/prices'
        },
        {
          name: 'Community',
          url: '/community'
        },
        {
          name: 'Support',
          url: '/support'
        }
        ]

    }
  }
}
</script>
<template>
  <div class="navBar">
    This is the AppHeaderMenu component. I should add a list here.

    <!-- TODO: Create an array and render the items -->
    <li v-for="(item, index) in items" :key="index">
      {{ item.name }}
    </li>

  </div>
</template>

<style scoped>
.heading {
  font-size: 2.5rem;
}
</style>