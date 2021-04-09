<template>
  <svg
    viewBox="0 0 242 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="isFav ? '80' : '45'"
    :height="isFav ? '80' : '45'"
    :class="{ 'is-fav': isFav }"
  >
    <g opacity="0.3065" filter="url(#filter0_d)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M121 247C59.1441 247 8.99998 192.826 8.99998 126C8.99998 59.1735 59.1441 5 121 5C182.856 5 233 59.1735 233 126C233 192.826 182.856 247 121 247Z"
        :fill="isFav ? '#DDF64C' : '#e9e2e2'"
      />
    </g>
    <g opacity="0.7965" filter="url(#filter1_d)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M121 203C81.7878 203 50 168.526 50 126C50 83.4741 81.7878 49 121 49C160.212 49 192 83.4741 192 126C192 168.526 160.212 203 121 203Z"
        :fill="isFav ? '#DDF64C' : '#e9e2e2'"
      />
    </g>
    <g filter="url(#filter2_d)">
      <path
        d="M136.796 147.051H83.88L73.9492 140.045L78.0486 131.287H104.492L102.587 135.393H129.03L132.812 127.295H92.5694L82.8118 121.15L90.4043 104.984L106.917 97.9777H159.833L169.764 104.984L165.635 113.742H139.192L141.097 109.636H114.654L110.901 117.619H151.75L161.074 123.476L153.309 140.045L136.796 147.051Z"
        fill="#253A5F"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-1.52588e-05"
        y="0"
        width="242"
        height="260"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d"
        x="41"
        y="44"
        width="160"
        height="172"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d"
        x="69.9492"
        y="97.9777"
        width="103.814"
        height="57.0734"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  name: 'MapMarker',
  props: {
    fav: [String, Boolean],
  },

  computed: {
    isFav() {
      console.log(this.fav);
      return this.fav == 'true' || this.fav === true;
    },
  },
};
</script>

<style lang="scss" scoped>
.is-fav {
  z-index: 10;
}
</style>
