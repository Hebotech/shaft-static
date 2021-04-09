<template>
  <vs-navbar
    shadowScroll
    text-white
    :color="active"
    center-collapsed
    v-model="active"
  >
    <template #left>
      <img
        src="https://shafthelmets.com/wp-content/uploads/2016/08/logo.png"
        alt=""
        class="img-fluid w-50 py-2"
      />
    </template>
    <template #right>
      <vs-navbar-item
        :to="`/`"
        :active="$route.path.includes('/')"
        id="primary"
      >
        Inicio
      </vs-navbar-item>
      <!-- <vs-navbar-item
        :to="{ path: `/`, hash: '#cascos' }"
        :active="$route.path.includes('/cascos')"
        id="primary"
      >
        Cascos
      </vs-navbar-item> -->
      <vs-navbar-item
        :to="`/mapa/`"
        :active="$route.path.includes('mapa')"
        id="primary"
      >
        Distribuidores
      </vs-navbar-item>
    </template>
  </vs-navbar>
</template>
<script>
export default {
  data: () => ({
    active: '#293a62',
  }),
}
</script>
