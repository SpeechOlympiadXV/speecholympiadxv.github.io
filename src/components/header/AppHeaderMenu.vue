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


  <!-- TODO: Create an array and render the items -->
  <li class="nav-item" v-for="(item, index) in items" :key="index">
    <a class="nav-link active" aria-current="page" href="{{ item.url }}">{{ item.name }}</a>

  </li>




</template>

<style scoped>
.heading {
  font-size: 2.5rem;
}
</style>