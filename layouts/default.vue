<template>
  <div>
    <nav-bar />
    <Nuxt class="mt-5" />
  </div>
</template>

<script>
import NavBar from '@/components/ui/NavBar.vue'

export default {
  name: 'Default',

  components: {
    NavBar,
  },
}
</script>

<style lang="scss">
:root {
  --vs-primary: #dfff00;
  --vs-success: 23, 201, 100;
  --vs-danger: 242, 19, 93;
  --vs-warn: 254, 130, 0;
  --vs-dark: #293a62;
}

@font-face {
  font-family: 'shaft-h1';
  font-display: swap;
  src: url('~@/styles/lhfasylum-webfont.woff') format('woff');
}
@font-face {
  font-family: 'MensuraBold';
  font-display: swap;
  src: url('~@/styles/mensurabold-webfont.woff2') format('woff2'),
    url('~@/styles/mensurabold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'MensuraLight';
  font-display: swap;
  src: url('~@/styles/mensuralight-webfont.woff2') format('woff2'),
    url('~@/styles/mensuralight-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
#app {
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
