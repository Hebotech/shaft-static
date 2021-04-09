<template>
  <div
    class="hot-sale container-fluid"
    :style="{'background-image': 'url('+require('@/assets/hot-sale/background.svg')+')'}"
  >
  <img class="img-fluid w-75 mb-3 mt-3" src="@/assets/brand/logo.png" alt="">
  <img class="img-fluid w-75 mb-3" src="@/assets/hot-sale/logo.png" alt="">
  <h1 class="mb-5">
    Tiendas oficiales
  </h1>
  <div class="row m-0 justify-content-center align-items-stretch">
    <div
      v-for="(store, storeIndex) in stores"
      :key="storeIndex"
      class="col-12 mb-5 col-md-6 mt-md-5"
    >
      <blue-theme-cards
        v-bind="store"
      />
    </div>
  </div>
  </div>
</template>

<script>
import BlueThemeCards from '@/components/_reuse_/components/BlueThemeCards.vue';

export default {
  name: 'HotSaleView',
  components: {
    BlueThemeCards,
  },
  data: () => ({
    stores: [
      {
        Nombre: 'Motos Df',
        website: 'https://www.motosdf.com.mx',
        description: 'Los mejores productos y precios los encuentras en MOTOS DF',
        discount: 20,
      },
      {
        Nombre: 'RideMX',
        website: 'https://www.ridemx.mx',
        description: 'Dedicados al Mototurismo de Aventura en México',
        discount: 10,
      },
      {
        Nombre: 'Bajaj Atizapan',
        website: 'https://planarbys.com',
        description: 'Todos los tipos de Motocicletas Bajaj: Carabela, treck, islo. Pagos contado o financiamiento',
        discount: 10,
      },
      {
        Nombre: 'iMoto Accesorios',
        website: 'https://imotoaccesorios.com.mx/',
        description: 'Brindando el servicio más alto para la satisfacción de nuestros clientes más exigentes',
        discount: 10,
      },
      {
        Nombre: 'Rino Bodega',
        website: 'https://rinobodega.com',
        description: '¡Amplia gama de productos para ti y tu moto. Hacemos envíos a toda la República con los precios mas competitivos!',
        discount: 25,
      },
    ],
  }),
};
</script>

<style lang="scss">
.hot-sale {
  h1{
    color: $alpha;
    font-family: Shaft-H1;
    font-size: 5em;
  }
  min-height: 100vh;
  background-color: #253A5F;
  background-size: contain;
}
@media  (min-width: 1100px) {
  .hot-sale{
    img{
      max-width: 20%;
    }
    font-size: 2em;
    background-size: cover;
    background-position-y: -900px;
  }
}
</style>
