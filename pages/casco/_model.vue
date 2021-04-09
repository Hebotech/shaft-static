<template>
  <div>
    <pre>
      {{ JSON.stringify(product, null, 2) }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'HelmetModel',

  async asyncData({ store, payload, params }) {
    if (payload) return { product: payload };
    else {
      await store.dispatch('fetchProducts', params);

      return {
        product: store.state.products.find(
          (prod) => prod.slug === params.model
        ),
      };
    }
  },
};
</script>

<style lang="scss" scoped></style>
