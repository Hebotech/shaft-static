<template>
  <div
    class="hero-header container-fluid align-items-center d-flex flex-column justify-content-center"
  >
    <div
      class="intro-website align-self-center d-flex flex-column align-items-center text-center"
    >
      <h2 class="_text">Nueva colección</h2>
      <h1 class="animate__animated animate__zoomInDown _text">
        Descubrela ahora
      </h1>
      <img
        src="/shaft-logo.svg"
        alt="shaft mexico"
        width="500px"
        class="img-fluid text-center d-block w-25 mt-3 logo animate__zoomInUp animate__animated"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroHeader',

  created() {
    this.lazyLoad = true
  },

  data() {
    return {
      lazyLoad: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.hero-header {
  height: 100vh;
  background-color: $alpha;
  background-image: url(/super.jpg);
  background-size: cover;
  background-position: 0 center;
  background-repeat: no-repeat;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.459);
  ._text {
    color: white;
    font-family: Shaft-h1;
    font-size: 5rem;
  }
}
</style>
