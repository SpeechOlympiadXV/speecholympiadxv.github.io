<script>
export default {
  data() {
    return {
      items: [
        //  Change the names to the correct names
        {
          name: 'Home',
          url: '/home'
        },
        {
          name: 'About',
          url: '/about'
        },
        {
          name: 'Speakers',
          url: '/speakers'
        },
        {
          name: 'Contact',
          url: '/contact'
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
  <li class="nav-item" v-for="(item, index) in items" :key="index" :class="{ active: index == activeItem }"
    @click="clickHandler(index)">

    <div>
      <a class="nav-link" :href="item.url">{{ item.name }}</a>
    </div>


  </li>




</template>

<style scoped>
</style>


