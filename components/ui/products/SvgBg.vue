<template>
  <div class="svg-bgg container" :class="{ turnBlack: activeProduct.glow }">
    <div
      class="row align-items-center justify-content-md-end justify-content-end justify-content-lg-end"
    >
      <div class="col-md-10 col-12 -column">
        <client-only placeholder="no-ssr">
          <main-background />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';

export default {
  name: 'Svg-bg',
  components: {
    MainBackground: () =>
      import(
        /* webpackChunkName: "SH-211" */ '@/components/SVG/MainBackground.vue'
      ),
  },
  mixins: [productHelmetMixin],
};
</script>

<style lang="scss" scoped>
.svg-bgg {
  z-index: 1;
  position: absolute;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  transition: background-color 0.5s ease-in;
  padding-top: 20%;
  @media screen and (min-width: 750px) {
    padding-top: 10%;
  }
}

.-column {
  border-radius: 0%;
}

.turnBlack {
  background-color: #000;
  transition: background-color 1.5s ease-out;
}
</style>
