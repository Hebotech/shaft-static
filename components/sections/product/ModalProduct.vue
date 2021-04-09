<template>
  <div
    v-if="products"
    class="container-fluid d-flex modal-product align-items-center align-content-center justify-content-center my-auto"
  >
    <div class="row text-center justify-content-center align-items-center">
      <button class="close-cta" @click="$router.push('/')">Cerrar</button>
      <div class="col-md-9 col-10 content-modal p-2">
        <h5 class="title">
          {{ activeProduct.name }}
        </h5>
        <div
          id="carouselModalProducts"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div
              :key="image"
              class="carousel-item active"
              v-for="image in activeProduct.images"
            >
              <img
                :src="activeProduct.images[counter]"
                :alt="`Casco Shaft ${activeProduct.name} México`"
                class="img-fluid"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselModalProducts"
            role="button"
            data-slide="prev"
            @click="lastImage"
          >
            <span class="sr-only">Previous</span>
            <i class="fas fa-arrow-left" />
          </a>
          <a
            class="carousel-control-next"
            href="#carouselModalProducts"
            role="button"
            data-slide="next"
            @click="nextImage"
          >
            <span class="sr-only">Next</span>
            <i class="fas fa-arrow-right" />
          </a>
        </div>
        <div
          class="bolsa-pro d-flex flex-column text-left p-md-5"
          v-if="activeProduct.bolsa"
        >
          <h5 class="text-center">¡Incluye de regalo!</h5>
          <img
            src="/products/bolsapro/abierta.png"
            alt="Bolsa cubrecasco Shaft"
            class="img-fluid"
          />
          <img
            src="/products/bolsapro/cerrada.png"
            alt="Bolsa cubrecasco Shaft"
            class="img-fluid"
          />
        </div>
        <h5 class="text-center">Detalles</h5>
        <div
          class="d-flex flex-wrap overflow-scroll flex-row justify-content-around text-center align-items-stretch"
        >
          <div
            v-for="certificate in activeProduct.certificates"
            :key="certificate"
          >
            <img
              :src="certificate"
              :alt="`${activeProduct.model} certificate`"
              loading="lazy"
              class="img-fluid w-50"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="container-fluid modal-product flex-row align-items-center justify-content-center"
    v-else
  >
    <h2 class="title">Gráfico: {{ $route.params.graphic }}</h2>
    <h2 class="title">Modelo: {{ $route.params.model }}</h2>

    <img src="/brand/logo.png" alt="logo shaft" />

    <div class="spinner-grow text-warning" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';

export default {
  name: 'ModalProduct',

  mixins: [productHelmetMixin],

  mounted() {
    if (
      this.activeProduct &&
      this.$route.params.graphic !== this.activeProduct.name
    ) {
      this.$store.dispatch('findAndActivateProduct', this.$route.params);
    }
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: $alpha;
}

.modal-product {
  cursor: pointer;
  position: fixed;
  z-index: 500;
  overflow: hidden;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.705);

  .carousel {
    span,
    a {
      color: $navy-color;
      font-size: 2em;
      @media screen and (min-width: 750px) {
        font-size: 4em;
      }
    }
  }

  .close-cta {
    z-index: 501;
    color: white;
    background-color: red;
    padding: 0.3em 2em;
    border: none;
    border-radius: 8px;
    font-family: MensuraBold;
    position: absolute;
    top: 0;
    right: 0;
    @media screen and (min-width: 750px) {
      left: 0;
    }
  }
}

.row {
  height: 100%;
  overflow: auto;
}

.content-modal {
  cursor: default;
  overflow: auto;
  background-color: $alpha;
  color: $navy-color;
  border-radius: 8px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25),
    0px 4px 50px rgba(222, 255, 0, 0.5);
  h5 {
    font-family: shaft-h1;
    font-size: 13vw;
    @media screen and (min-width: 750px) {
      font-size: 5vw;
    }
  }
  p {
    font-family: MensuraLight;
  }
  pre {
    color: $navy-color;
  }
}
</style>
