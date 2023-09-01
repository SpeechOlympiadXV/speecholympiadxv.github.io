<script>
import SOLogo from "../assets/images/new_logo.png";

export default {
  data() {
    return {
      logo: {
        filename: SOLogo,
        alt: "Speech Olympiad Logo",
      },
    };
  },
};
</script>

<template>
  <img :src="logo.filename" :alt="logo.alt" class="logo" />
</template>

<style scoped>
.logo {
  object-fit: cover;
}
</style>