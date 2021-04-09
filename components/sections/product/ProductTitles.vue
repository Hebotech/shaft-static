<template>
  <div
    class="order-3 order-lg-3 col-md-12 col-12 d-flex flex-md-column flex-sm-row justify-content-around justify-content-md-center"
  >
    <transition
      mode="out-in"
      enter-active-class="animated jackInTheBox faster"
      leave-active-class="animated rollOut"
    >
      <slot v-if="!activeProduct"></slot>
      <div v-else>
        <img
          v-for="(certificate, certificateIndex) in activeProduct.certificates"
          :key="certificateIndex"
          :src="certificate"
          alt="shaft mexico certificado"
          class="img-fluid"
        />
        <div class="text-center">
          <a href="https://cascoscertificados.org/cascos-shaft-certificados/" target="_blank"
            >Ver más</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';

export default {
  name: 'ProductTitles',
  mixins: [productHelmetMixin],
};
</script>

<style lang="scss" scoped>
.container-fluid {
}
a {
  font-family: MensuraBold;
  text-decoration: underline;
  color: $font-dark;
}
@media (max-width: 768px) {
  .container-fluid {
    background-color: $background-light !important;
    height: auto !important;
    h1 {
      font-size: 3em;
    }
    img {
      width: 17%;
    }
  }
}
img {
  width: 60%;
}
</style>
