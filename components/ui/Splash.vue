<template>
  <div class="pattern-wrapper">
    <img
      src="@/assets/pattern.png"
      alt=""
      class="pattern img-fluid w-100"
      :style="{'mask-image': 'url('+require('@/assets/splash.svg')+')'}"
    >
  </div>
</template>

<script>
export default {
  name: 'Splash',
};
</script>

<style lang='scss' scoped>
.pattern-wrapper{
  top: 190%;
  position: absolute;
  left: -80%;
}
.pattern{
  z-index: 0;
  position: sticky;
  top:150px;
  mask-position:right;
  mask-size:cover;
  background-color:$alpha100;
}
</style>
