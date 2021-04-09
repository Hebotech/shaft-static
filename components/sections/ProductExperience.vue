<template>
  <div
    class="p-5 d-flex flex-column justify-content-around justify-content-md-between container-fluid"
    v-if="products"
  >
    <div class="productSection flex-column" id="#cascos">
      <h1 class="text-center helmet-title">Nueva coleccion</h1>
    </div>
    <product-circle />
  </div>
  <div class="container-fluid align-items-center justify-content-center" v-else>
    <div class="spinner-grow text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin'

import ProductCircle from '@/components/sections/product/ProductCircle.vue'
import ProductTitles from '@/components/sections/product/ProductTitles.vue'

export default {
  name: 'ProductExperience',
  components: {
    ProductCircle,
  },

  mixins: [productHelmetMixin],
}
</script>

<style lang="scss" scoped>
.bolsa-pro {
  position: absolute;
  margin-top: 20%;

  img {
    max-width: 25%;
    border-radius: 15px;
    filter: drop-shadow(0px 0px 15px $alpha);
  }

  left: 0;
  transform: translateX(-2em);
  opacity: 1;
  font-family: MensuraBold;
  color: $alpha;
  animation: fadeInRight 1s ease-in-out forwards;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-10em);
    }
  }

  @media screen and (min-width: 750px) {
    transform: translatey(0em);
    right: 0;
    margin-top: 15%;
    transform: translateX(1em);
    img {
      max-width: 10%;
    }
  }
}

h1 {
  @extend .title;
  font-size: 6em;
  color: $alpha;
}

.container-fluid {
  background-color: $navy-color;
  background-blend-mode: lighten;
  z-index: 20;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all ease-in-out 0.3s;
  //padding-top: 3.5em;
  overflow-x: hidden;
}

.productSection {
  display: flex;
  z-index: 3;
  position: relative;
}

@media screen and (min-width: 1441px) {
  .bg-svg {
    top: 115%;
    padding: 12% 0;
  }
}

.extra-info {
  button {
    border: 4px solid $alpha;
    border-radius: 10px;
    position: absolute;
    margin: auto;
    padding: 3% 4%;
    font-family: MensuraBold;
    background-color: transparent;
    color: $alpha;
    transition: all ease-in 0.5s;
    &:hover {
      color: $navy-color;
      background-color: $alpha;
      transition: all ease-out 0.5s;
    }
  }
}

@media (max-width: 768px) {
  .container-fluid {
    height: auto;
    h1 {
      margin-bottom: 0em;
      font-size: 4em;
      color: white;
    }
    .bg-svg {
      top: 42em;
      right: 0;
      padding: 40% 0%;
      z-index: 0;
    }
  }
}
</style>
