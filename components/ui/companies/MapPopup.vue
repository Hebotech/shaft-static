<template>
  <div class="row m-0 text-center">
    <div class="col-12 border-0 animated zoomIn faster is-fav">
      <div class="card-body">
        <h5 class="card-title animated fadeInUp slower">
          {{ name }}
        </h5>
        <p class="card-text animated fadeIn faster delay-1s">
          {{ website }}
        </p>
        <p class="card-text animated fadeIn faster delay-1s">
          {{ description }}
        </p>
        <p class="card-text animated fadeIn faster delay-1s">
          <strong> Dirección: {{ address }} </strong>
        </p>
        <a
          v-if="website"
          rel="noopener"
          :href="`http://${website}`"
          class="btn border-0 animated fadeInDown slower"
          target="_blank"
        >
          Ver sitio web
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapPopup',

  props: {
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  font-family: MensuraLight;
  font-weight: 100;
  word-break: normal;
  max-width: 22rem;
  strong {
    font-weight: 900;
    color: $navy-color;
  }
}

.btn:hover {
  font-size: 0.9em;
  box-shadow: 5px 5px 7px #0000007b;

  transition: ease-in-out 0.4s;
}
.regular {
  border: 0px;
  margin-bottom: 3em;

  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  .btn {
    color: $title-dark;
    font-size: 0.95em;
    font-family: MensuraBold;
    transition: ease-in 0.2s;
    box-shadow: 5px 5px 10px #00000038;
  }
  h5 {
    font-family: MensuraBold;
    border-radius: 0px;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  }
}
.is-fav {
  border: 0px;

  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  .btn {
    background-color: $navy-color;
    color: $alpha;
    font-size: 1.2em;
    font-family: MensuraBold;
    transition: ease-in 0.2s;
    box-shadow: 5px 5px 10px #00000038;
  }
  h5 {
    font-family: MensuraBold;
    font-size: 2.5em;
    border-radius: 0px;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
  }
  p {
    font-size: 1.5em;
  }
}
.regular:hover {
  border: 0px;
  margin-bottom: 3em;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
  h5 {
    background-color: $alpha;
    padding: 2%;
    border-radius: 8px;
    transition: cubic-bezier(0, 0.92, 0.78, 0.63) 0.2s;
    @extend .animated !optional;
    @extend .rubberBand !optional;
  }
}
.is-fav:hover {
  border: 0px;

  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  h5 {
    background-color: $alpha;

    border-radius: 8px;
    transition: cubic-bezier(0, 0.92, 0.78, 0.63) 0.2s;
  }
}
</style>
