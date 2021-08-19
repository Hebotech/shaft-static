<template>
  <div class="container-fluid text-center py-5">
    <div class="row mx-0 justify-content-center">
      <div class="col-md-8 mt-3">
        <h2>Una marca certificada y llena de calidad</h2>
      </div>
      <div class="col-md-8">
        <p>
          Shaft Helmets es una marca de articulos de protección para
          motociclistas que se preocupa por la excelencia y la calidad de sus
          productos. Nuestra idea es que la protección de los motociclistas sea
          un estilo de vida. Creyendo y trabajando por ese ideal, nos
          certificamos bajo los mss estrictos protocolos de la
          <strong> norma ECE P 2205 [Union Europea) y DOT FMVSS No 218</strong>
          <br class="my-3" />
          Certificarse con esta norms implica que Codas las referencias de
          nuestra marca pasan por diferentes pruebas, hechas en laboratorios de
          distintas partes del mundo, como la absorciOn de impacto, la
          resistencia, rigidez y extension de la coraza, vision periferica y
          resistencia del sistema de retencian.
          <br class="my-3" />
          Cada dia trabajamos fuertemente para garantizar la calidad de nuestros
          productos y con el mejor respaldo para que cada viaje en to moto sea
          tranquilo, seguro y una gran experiencia
        </p>
      </div>
      <div class="col-md-5 col-12">
        <img
          src="https://shafthelmets.com/wp-content/uploads/2016/09/evaluacion-producto.png"
          alt=""
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aviso',

  mounted() {
    this.$ga.event('Shaft Contigo', 'view-page', 'Shaft contigo')
  },

  methods: {
    goTo() {
      this.$ga.event('CTA', 'click', 'from shaft contig')
    },
  },
}
</script>

<style lang="scss" scoped>
.go-to {
  background-color: #45b1e8;
  color: #000000;
  text-decoration: none;
  padding: 1% 4%;
  border-radius: 8px;
  font-family: mensuraBold;
  box-shadow: 10px 9.69px 30px rgba(0, 0, 0, 0.365);
}
a {
  text-decoration: underline;
}
.container-fluid {
  background: #deff00;
}
h3 {
  font-size: 4rem;
}
h1 {
  font-family: shaft-h1;
  font-size: 3rem;
}
h2 {
  font-family: mensurabold;
  font-size: 2.5rem;
}
h5 {
  font-family: mensuraLight;
  font-size: 4vw;
}
p {
  font-size: 2.5vh;
  font-family: mensuraBold;
  strong {
    font-family: mensuraBold;
  }
}
</style>
