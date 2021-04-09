<template>
  <svg
    no-ssr
    class="logo-svg"
    width="100%"
    height="100%"
    viewBox="0 0 1083 883"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="background-0"
      d="M29.7787 417.788L707.67 216L808.183 261.346L134.07 466.157L29.7787 417.788Z"
      fill="#DDF64C"
    />
    <keep-alive>
      <client-only placeholder="helow">
        <component
          class="svg-to-animate"
          ref="currentBackground"
          :is="backgrounds[activeProduct.index]"
          @rendered="animatePath"
        />
      </client-only>
    </keep-alive>
  </svg>
</template>

<script>
import { productHelmetMixin } from '@/mixins/productHelmetsMixin';

import { gsap } from 'gsap';
//import MorphSVGPlugin from 'gsap/MorphSVG.js';

export default {
  name: 'MainBackground',
  mixins: [productHelmetMixin],

  created() {
    //gsap.registerPlugin(MorphSVGPlugin);
  },

  methods: {
    animatePath() {
      let tl = new gsap.timeline();
      tl.to(
        '#background-0',
        {
          morphSVG: `.svg-to-animate .animate-svg`,
          ease: 'power2',
          duration: 0.9,
        },
        '0'
      ).fromTo(
        '.svg-to-animate',
        {
          opacity: 0,
          translateY: 10,
        },
        {
          rotation: 0,
          translateY: 0,
          opacity: 1,
          ease: 'ease-in-out',
          duration: 0.5,
        }
      );
    },
  },

  components: {
    SH211: () =>
      import(/* webpackChunkName: "SH-211" */ '@/components/SVG/SH-211.vue'),

    SH227FLOW: () =>
      import(
        /* webpackChunkName: "SH227FLOW" */ '@/components/SVG/SH-227-FLOW.vue'
      ),

    SH502CAMO: () =>
      import(
        /* webpackChunkName: "SH502CAMO" */ '@/components/SVG/SH-502-CAMO.vue'
      ),

    SH502RUBBER: () =>
      import(
        /* webpackChunkName: "SH502RUBBER" */ '@/components/SVG/SH-502-RUBBER.vue'
      ),

    SH581PREDATOR: () =>
      import(
        /* webpackChunkName: "SH581PREDATOR" */ '@/components/SVG/SH-581-PREDATOR.vue'
      ),

    SH581LIBERTY: () =>
      import(
        /* webpackChunkName: "SH581LIBERTY" */ '@/components/SVG/SH-3690-LIBERTY.vue'
      ),

    SH581PATRIOT: () =>
      import(
        /* webpackChunkName: "SH581PATRIOT" */ '@/components/SVG/SH-3690-PATRIOT.vue'
      ),

    SH581SHINNER: () =>
      import(
        /* webpackChunkName: "SH581SHINNER" */ '@/components/SVG/SH-3690-SHINNER.vue'
      ),

    SHPRO610ASTUTE: () =>
      import(
        /* webpackChunkName: "SHPRO610ASTUTE" */ '@/components/SVG/SH-PRO-610-ASTUTE.vue'
      ),

    SHPRO610NEOTRADE: () =>
      import(
        /* webpackChunkName: "SHPRO610NEOTRADE" */ '@/components/SVG/SH-PRO-610-NEOTRADE.vue'
      ),

    SHPRO610SOLID: () =>
      import(
        /* webpackChunkName: "SHPRO610SOLID" */ '@/components/SVG/SH-PRO-610-SOLID.vue'
      ),
  },

  data() {
    return {
      backgrounds: [
        'SH581PREDATOR',
        'SH227FLOW',
        'SH502RUBBER',
        'SHPRO610NEOTRADE',
        'SHPRO610ASTUTE',
        'SHPRO610SOLID',
        'SH581PATRIOT',
        'SH581LIBERTY',
        'SHPRO610NEOTRADE',
        'SHPRO610SOLID',
      ],
    };
  },
};
</script>

<style lang="scss">
g.svg-to-animate {
  opacity: 0;
}

.svg-to-animate .animate-svg {
  visibility: hidden;
}
</style>
