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
      ],
      activeItem: -1

    }

  },

  methods: {
    clickHandler(idx) {
      this.activeItem = idx
    }
  }

}
</script>
<template>


  <!-- Create an array and render the items -->
  <!-- Create a function and bind it to the onclick. Add logic to change active menu item  -->
  <li class="nav-item" v-for="(item, index) in items" 
  :key="index" 
  :class="{ active: index == activeItem }"
  :v-on:click="clickHandler(index)">

    <div>
      <a class="nav-link" :href="item.url">{{ item.name }}</a>
    </div>


  </li>




</template>

<style scoped>

</style>


