<script>
const getActiveItem = () => {
  let hashInd = window.location.hash.slice(1);
      return [
        "",
        "about",
        "champions-story",
        "technical-tips",
      ].indexOf(hashInd);
}
export default {
  data() {
    return {
      items: [
        {
          name: "Home",
          url: "#",
        },
        {
          name: "About",
          url: "#about",
        },
        {
          name: "Champion's Story",
          url: "#champions-story",
        },
        {
          name: "Technical Tips",
          url: "#technical-tips",
        },
      ],
      activeItem: getActiveItem(),
    };
  },

  methods: {
    clickHandler(idx) {
      //collapse navbar for mobile view before changing active item.
      // Click on the button to do so
      if(window.matchMedia("(max-width: 768px)").matches){
        // Viewport is less or equal to 992 pixels wide (md)
        document.querySelector(".navbar-toggler").click();
      }
    },
  },

  mounted() {
    window.addEventListener("hashchange", () => {
      let hashInd = window.location.hash.slice(1);
      this.activeItem = getActiveItem()
    });
  },
};
</script>

<template>
  <!-- render menu items from list -->
  <li class="nav-item" v-for="(item, index) in items" :key="index">
    <!-- active class for selected menu item -->
    <div @click="clickHandler(index)" :class="{ active: index === activeItem }">
      <a class="nav-link" :href="item.url">{{ item.name }}</a>
    </div>
  </li>
</template>

<style scoped>
.active {
  font-weight: bold;
}
</style>
