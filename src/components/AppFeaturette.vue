<template>
  <div class="row featurette">
    <div :class="'col-md-7 ' + getOrder(index, 0)">
      <h2 class="featurette-heading">
        {{ heading }} <span class="text-muted">{{ headingEnd }}</span>
      </h2>
      <p class="lead">{{ text }}</p>
    </div>
    <div :class="'col-md-5 ' + getOrder(index, 1)">
      <svg
        class="
          bd-placeholder-img bd-placeholder-img-lg
          featurette-image
          img-fluid
          mx-auto
        "
        width="500"
        height="500"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 500x500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee" />
        <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
      </svg>
    </div>
  </div>
  <hr class="featurette-divider" />
</template>

<script>
export default {
  name: "AppFeaturette",
  props: {
    index: Number,
    heading: String,
    headingEnd: String,
    text: String,
    image: String,
  },
  methods: {
    getOrder(rowIndex, colIndex) {
      if (
        (rowIndex % 2 === 0 && colIndex === 0) ||
        (rowIndex % 2 === 1 && colIndex === 1)
      ) {
        return "order-first";
      } else {
        return "order-last";
      }
    },
  },
};
</script>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

h2 {
  font-weight: 400;
}

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  /* rtl:remove */
  letter-spacing: -0.05rem;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

@media (max-width: 62em) {
  .featurette-heading {
    padding-top: 2rem;
  }
  .featurette-divider {
    margin: 2rem 0;
  }
}
</style>