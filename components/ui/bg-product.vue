<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1152 636"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <symbol id="desktop-bg-top">
      <rect
        width="479.025"
        height="1240.01"
        rx="171"
        transform="rotate(82.5982 1181.34 0.966187)"
        fill="#FF0000"
      />
    </symbol>

    <use
      xlink:href="#desktop-bg-top"
      x="0"
      class="desktop-bg-top"
      width="100%"
      height="100%"
      y="0"
    />
  </svg>
</template>

<script>
export default {};
</script>

<style>
.desktop-bg-top {
  visibility: hidden;
}
@media screen and (min-width: 800px) {
  .mobile-bg-top {
    visibility: hidden;
  }

  .desktop-bg-top {
    visibility: visible;
  }
}
.mobile-bg-top {
}
</style>
