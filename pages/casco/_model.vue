<template>
  <div class="model-view p-0 container d-flex justify-content-around flex-wrap">
    <div class="row mx-0 justify-content-around align-items-center">
      <div class="col-9 mt-md-5">
        <h1 class="text-center">
          {{ product.name }}
        </h1>
        <span class="text-center" v-html="product.short_description" />
      </div>
      <div v-for="image in product.images" :key="image" class="col-md-4 col-12">
        <img :src="image" class="img-fluid" />
      </div>
      <div class="col-12">
        <span class="text-center" v-html="product.description" />
      </div>
      <div class="col-12 text-center">
        <h2>Certificaciones</h2>
      </div>
      <div class="row my-3 m-0 flex-nowrap overflow-auto">
        <div
          class="col-4"
          v-for="(item, index) in product.certificates"
          :key="index"
        >
          <img :src="item" alt="" class="w-50" />
        </div>
      </div>
    </div>
    <product-experience />
  </div>
</template>

<script>
export default {
  name: 'HelmetModel',

  components: {
    ProductExperience: () =>
      import('@/components/sections/ProductExperience.vue'),
  },

  mounted() {
    this.$store.dispatch('fetchProducts', this.$route.params)
  },

  async asyncData({ store, payload, params }) {
    await store.dispatch('fetchProducts', params)

    return {
      product: store.state.products.find(
        (product) => product.slug === params.model
      ),
    }
  },
}
</script>

<style lang="scss" scoped>
.model-view {
  min-width: 100%;
  h1,
  h2 {
    font-family: $font-primary;
    font-size: 5rem;
  }
  span,
  p {
    font-family: $font-text;
  }
  background-color: $alpha;
}
</style>
