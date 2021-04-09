<template>
  <div class="container-fluid">
      <div class="row">
        <div class="col-12 mt-3">
          <h1>Shaft está contigo</h1>
          <h2>
            20% OFF
          </h2>
        </div>
        <div class="col">
          <h3>
            ❤️👨🏻‍⚕️👮🏻‍♂️🏃🏻‍♂️
          </h3>
          <h5>
            Personal de la salud, policías y repartidores
          </h5>
          <p>
            SHAFT está contigo en todo el mes de Junio,
            y es por esto que queremos apoyar a todos los motociclistas que aún
            están en la calle trabajando. Si eres mensajero, policía
            repartidor o trabajas en el sector
            salud tendrás un descuento especial del 20% en cualquier producto de la marca 😍.
            <strong>Presenta una fotografía vigente o
              tu registro como repartidor, credencial como miembro del
            sector salud para acceder a este beneficio
            <br>Protege tu vida con un casco certificado, protege tu vida con Shaft</strong>
          </p>
        </div>
      </div>
      <div class="cta m-3">
        <router-link to="/" class="go-to" @click="goTo">
          Ver Distribuidores
        </router-link>
      </div>
      <a> Aplican términos y condiciones según el
        distribuidor para poder hacer válida la promoción</a>
  </div>
</template>

<script>
export default {
  name: 'Conmtigo',
  mounted() {
    this.$ga.event('Shaft Contigo', 'view-page', 'Shaft contigo');
  },
  methods: {
    goTo() {
      this.$ga.event('CTA', 'click', 'from shaft contig');
    },
  },
};
</script>

<style lang="scss" scoped>
.go-to{
  background-color: $beta;
  color:$title-dark;
  text-decoration: none;
  padding: 1% 4%;
  border-radius:8px;
  font-family: mensuraBold;
  box-shadow: 10px 9.69px 30px rgba(0, 0, 0, 0.365);
}
a{
  text-decoration: underline;
}
.container-fluid{
  background: $alpha;
  min-height: 100vh;
}
h3{
  font-size:4em;
}
h1{
  font-family: shaft-h1;
  font-size: 12vw;
}
h2{
  font-family: mensurabold;
  font-size:7vw;
}
h5{
  font-family: mensuraLight;
  font-size:4vw;
}
p{
  font-size: 2.5vh;
  font-family: mensuraBold;
  strong{
    font-family: mensuraBold;
  }
}
</style>
