<template>
  <div
    class="home position-relative"
    :class="$route.name === 'product-modal' ? 'blurIn' : ''"
  >
    <hero-header :brandInfo="brandInfo" />

    <cta-button />

    <aviso />

    <product-experience />

    <distribuidores ref="cascos" />
  </div>
</template>

<script>
export default {
  name: 'Home',

  head: {
    title: 'Cascos Shaft México 🏍😎🇲🇽 | Sitio Oficial Shaft',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
  },

  components: {
    HeroHeader: () => import('@/components/sections/HeroHeader.vue'),

    ProductExperience: () =>
      import('@/components/sections/ProductExperience.vue'),

    Distribuidores: () =>
      import('@/components/sections/companies/distribuidores.vue'),

    CtaButton: () => import('@/components/ui/CtaButton.vue'),

    aviso: () => import('@/components/aviso.vue'),
  },

  async asyncData({ store, payload, params }) {
    await store.dispatch('fetchProducts', params)

    let responseFetch = await fetch('https://apihebo.online/shaft/brand')
    let responseJson = await responseFetch.json()

    return {
      products: store.state.products,
      brandInfo: responseJson.data,
    }
  },

  data() {
    return {
      enterProducts: false,
    }
  },
}
</script>

<style lang="scss">
.home {
  transition: filter 0.5s ease-in;

  &.blurIn {
    & > *:not(.modal-product) {
      transition: all 0.5s ease-out;
      filter: blur(8px);
    }
  }
}
</style>
