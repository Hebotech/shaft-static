<template>
  <div>
    <client-only>
      <swiper :slides-per-view="3" :space-between="50">
        <swiper-slide>
          <img
            v-if="activeProduct"
            :src="`${activeProduct.images[counter]}`"
            class="main-product"
            loading="lazy"
        /></swiper-slide>
        <swiper-slide>
          <img
            v-if="activeProduct"
            :src="`${activeProduct.images[counter]}`"
            class="main-product"
            loading="lazy"
        /></swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';

export default {
  name: 'MainProduct',

  mixins: [productHelmetMixin],
};
</script>

<style lang="scss" scoped>
.main-product {
  cursor: pointer;
  background-position: center;
  background-size: cover;
  align-content: center;
  background-attachment: scroll;
  height: 100%;
  width: 35rem;
  filter: drop-shadow(4px 9.69px 20px rgba(0, 0, 0, 0.452));
}
@media (max-width: 576px) {
  .main-product {
    height: auto;
    width: 350px;
  }
  .circle {
    position: absolute;
    top: 10%;
    left: 15%;
    width: 0px;
    height: 0px;
    align-self: center;
    padding: 35%;
  }

  img {
    max-width: 40%;
  }
}
@media (max-width: 768px) {
  .main-product {
    width: 350px;
  }
  img {
    max-width: 90%;
  }
}
</style>
