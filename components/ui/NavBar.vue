<template>
  <vs-navbar text-white :color="active" center-collapsed v-model="active">
    <template #left>
      <img src="/shaft-logo.svg" alt="" />
    </template>
    <template #right>
      <vs-navbar-item :active="active == 'primary'" id="primary">
        Primary
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'success'" id="success">
        Success
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'danger'" id="danger">
        Danger
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'warn'" id="warn">
        Warn
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'dark'" id="dark">
        Dark
      </vs-navbar-item>
      <vs-navbar-item :active="active == '#7d33ff'" id="#7d33ff">
        HEX
      </vs-navbar-item>
      <vs-navbar-item
        :active="active == 'rgb(59,222,200)'"
        id="rgb(59,222,200)"
      >
        RGB
      </vs-navbar-item>
    </template>
  </vs-navbar>
</template>
<script>
export default {
  data: () => ({
    active: 'primary',
  }),
};
</script>
