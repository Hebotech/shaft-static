<template>
  <div
    class="home position-relative"
    :class="$route.name === 'product-modal' ? 'blurIn' : ''"
  >
    <hero-header />
    <cta-button />
    <product-experience />

    <distribuidores ref="cascos" />
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {
    HeroHeader: () => import('@/components/sections/HeroHeader.vue'),

    ProductExperience: () =>
      import('@/components/sections/ProductExperience.vue'),

    Distribuidores: () =>
      import('@/components/sections/companies/distribuidores.vue'),

    CtaButton: () => import('@/components/ui/CtaButton.vue'),
  },

  created() {
    this.$store.dispatch('fetchProducts', this.$route.params)
    this.scrollFix(this.$route.hash)
  },
  methods: {
    scrollFix(hashbang) {
      this.$nextTick(() => {
        if (this.$refs[hashbang]) {
          console.log(this.$refs)
          this.$refs[hashbang].scrollIntoView({
            behaviour: 'smooth',
          })
        }
      })
    },
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
