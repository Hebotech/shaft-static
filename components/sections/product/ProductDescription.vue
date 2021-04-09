<template>
  <div
    class="description order-3 order-sm-3 order-md-3 col-md-4 col-12 text-center"
  >
    <h3>Nueva colección</h3>
  </div>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';

export default {
  name: 'ProductDescription',
  mixins: [productHelmetMixin],
};
</script>

<style lang="scss" scoped>
.description {
  color: #e9e2e2;
  margin-top: 0em;
  margin-bottom: 0em;
}

h3 {
  @extend .h4-font;
  font-size: 4em;
}
.arrows-container {
  button.ctaa {
    background-color: white;
    color: $navy-color;
    padding: 0 1em;
    border: none;
    border-radius: 18px;
    font-size: 70%;
  }
  @extend .h6-font;
  font-stretch: expanded;
  font-size: 3em;
  display: flex;
  justify-content: flex-end;
}
.arrowContainer:hover {
  cursor: pointer !important;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 768px) {
  .description {
    margin-bottom: 5em;
  }
  * {
    color: #e9e2e2;
  }
  h3 {
    font-size: 3em;
  }
  p {
    font-size: 1em;
  }
}
</style>
