<template>
    <div
      class="card mb-3 border-0 animated zoomIn faster regular"
    >
      <div class="card-body">
        <div class="discount">
          <p>
           {{discount}}% OFF
          </p>
        </div>
        <h5
          class="card-title animated fadeInUp slower"
        >
          {{Nombre}}
        </h5>
        <p class="card-text animated fadeIn faster delay-1s">
          {{description}}
        </p>
        <a
          rel="noopener"
          :href="`${website}`"
          class="btn border-0 animated fadeInDown slower "
          target="_blank"
          @click='addNewClick(name)'
        >
          Comprar ahora
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'StoreCardHotSale',
  components: {
  },
  props: {
    Nombre: String,
    website: String,
    description: String,
    discount: Number,
  },
  methods: {
    addNewClick() {
      this.$ga.event('Hot sale', 'click', `${this.Nombre}`);
    },
  },
};
</script>

<style lang='scss' scoped>
.discount{
  display: inline-block;
  text-align:center;
  border-radius: 50%;
  background-color: #DF2831;
  position: absolute;
  p{
    color:white;
    font-family: mensuraLight;
    // padding:.1em;
    margin:1em;
  }
  top:-20%;
  left:85%;
  font-size: .9em;
  // text-overflow: initial;
  max-width: 35%;

}
.card{
  overflow: visible;
  position:relative;
  z-index: 2;
}
p{
  font-family: MensuraLight;
  font-weight: 100;
}

.btn:hover{
  font-size: .9em;
  box-shadow: 5px 5px 7px #0000007b;

  transition:ease-in-out .4s;
}
.regular{
    border-radius: 12px;
    box-shadow: 5px 5px 10px #00000038;
    border:0px;
    margin-bottom:3em;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) .5s;
  .btn{
  min-width: 100%;
  background-color:#223455;
  color:$alpha;
  font-size: .95em;
  font-family: MensuraBold;
  transition:ease-in .2s;
  box-shadow: 5px 5px 10px #00000038;
}
  h5{
      font-family: MensuraBold;
      border-radius:0px;
      font-size: 1.7em;
      transition:cubic-bezier(0.175, 0.885, 0.32, 1.275) .3s;
    }
}
</style>
