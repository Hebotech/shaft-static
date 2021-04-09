export const productHelmetMixin = {
  inheritAttrs: false,
  computed: {
    activeProduct() {
      return this.$store.getters.activeProduct;
    },
    
    counter() {
      return this.$store.state.counter;
    },
    
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    nextImage() {
      if (this.counter <= this.activeProduct.images.length - 2) {
        this.$store.commit('ADDING_COUNTER');
      } else {
        this.$store.commit('RESTART_COUNTER');
      }
    },

    lastImage() {
      if (this.counter !== 0) {
        this.$store.commit('SUBSTRACTING_COUNTER');
      } else {
        this.$store.commit('IMAGES_LENGTH', this.activeProduct.images.length - 1);
      }
    },


    nextProduct() {
      this.$store.dispatch('nextProduct');
    },

    lastProduct() {
      this.$store.dispatch('lastProduct');
    },

    activateProduct() {
      this.$store.dispatch('activateProduct')
    }
  },
};
