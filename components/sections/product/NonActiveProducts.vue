<template>
  <div class="d-flex row m-0 p-0 justify-content-around">
    <product
      v-for="(product, productIndex) in products"
      v-bind="product"
      :product="product"
      :productIndex="productIndex"
      :key="productIndex"
      :class="{ activing: products[productIndex].active }"
      class="my-3"
    />
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';
import product from '@/components/ui/products/product.vue';

export default {
  name: 'NonActiveProduct',
  components: {
    product,
  },
  mixins: [productHelmetMixin],
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .non-active-container {
    margin-top: 1em;
    .non-active-products {
      width: 35px;
    }
    .activing {
      width: 45px;
      height: 45px;
    }
  }
}
</style>
