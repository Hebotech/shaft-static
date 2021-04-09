<template>
  <div class="card  border-0 animated zoomIn faster" :class="[isFav ? 'is-fav mb-4' : 'regular']">
    <div class="card-body">
      <i v-if="isFav" class="fas fa-crown    "></i>
      <h5 class="card-title animated fadeInUp slower">
        {{ company.properties.name.value }}
      </h5>
      <p class="card-text animated fadeIn faster delay-1s">
        {{ company.properties.website.value }}
      </p>
      <a
        rel="noopener"
        :href="`http://${company.properties.website.value}`"
        class="btn border-0 animated fadeInDown slower "
        target="_blank"
        @click="addNewClick()"
      >
        Ver sitio web
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'websites',
  components: {},
  props: {
    company: {
      type: Object,
      required: true,
    },
    isFav: Boolean,
  },
  methods: {
    addNewClick() {
      this.$ga.event('Distribuidores', 'click', `${this.company.properties.name.value}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  z-index: 2;
}
p {
  font-family: MensuraLight;
  font-weight: 100;
}

.btn:hover {
  font-size: 0.9em;
  box-shadow: 5px 5px 7px #0000007b;

  transition: ease-in-out 0.4s;
}
.regular {
  border-radius: 12px;
  box-shadow: 5px 5px 10px #00000038;
  border: 0px;
  margin-bottom: 3em;

  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  .btn {
    background-color: $alpha;
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
  border-radius: 12px;

  box-shadow: 5px 5px 15px $navy-color;
  border: 0px;
  background-color: $alpha;
  margin-bottom: 3em;
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
  box-shadow: 5px 5px 15px $alpha;
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
  box-shadow: 5px 5px 10px $alpha;
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
  h5 {
    background-color: $alpha;

    border-radius: 8px;
    transition: cubic-bezier(0, 0.92, 0.78, 0.63) 0.2s;
  }
}
</style>
