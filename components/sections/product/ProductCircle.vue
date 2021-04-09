<template>
  <div
    class="bg-circle row mb-3 mt-5 d-flex justify-content-between align-items-center order-0 order-lg-2 d-flex"
  >
    <non-active-products />

    <div class="col-8 justify-content-center">
      <main-product :counter="counter" />
    </div>
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';
import nonActiveProducts from './NonActiveProducts.vue';
import MainProduct from './MainProduct.vue';

export default {
  name: 'ProductCircle',
  components: {
    nonActiveProducts,
    MainProduct,
  },
  mixins: [productHelmetMixin],
  mounted() {
    window.addEventListener('keyup', (event) => {
      switch (event.keyCode) {
        case 37:
          this.lastImage();
          break;
        case 38:
          this.lastProduct();
          break;
        case 39:
          this.nextImage();
          break;
        case 40:
          this.nextProduct();
          break;
        // no default
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
