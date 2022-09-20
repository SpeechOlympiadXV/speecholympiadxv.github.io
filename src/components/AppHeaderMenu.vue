<script>
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
      activeItem: 0,
    };
  },

  methods: {
    clickHandler(idx) {
      this.activeItem = idx;
    },
  },

  mounted() {
    window.addEventListener("hashchange", () => {
      let hashInd = window.location.hash.slice(1);
      this.activeItem = [
        "",
        "about",
        "champions-story",
        "technical-tips",
      ].indexOf(hashInd);
    });
  },
};
</script>

<template>
  <!-- render menu items from list -->
  <li class="nav-item" v-for="(item, index) in items" :key="index">
    <!-- active class for selected menu item -->
    <div @click="clickHandler(index)" :class="{ active: index == activeItem }">
      <a class="nav-link" :href="item.url">{{ item.name }}</a>
    </div>
  </li>
</template>

<style scoped>
.active {
  font-weight: bold;
}
</style>
