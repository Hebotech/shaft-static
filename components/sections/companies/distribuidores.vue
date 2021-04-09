<template>
  <div class="distribuidores rounded">
    <h2 class="text-center">Tiendas Oficiales:</h2>
    <no-ssr>
      <MglMap
        :center.sync="center"
        :accessToken="accessToken"
        :mapStyle="mapStyle"
        :zoom="5"
      >
        <MglGeolocateControl position="top-right" />

        <MglMarker
          v-for="marker in mapMarkers"
          :key="marker.coordinates[0]"
          :coordinates="marker.coordinates"
          color="#DDFF00"
          class="w-25"
        >
          <div slot="marker">
            <map-marker :fav="marker.fav" />
          </div>
          <MglPopup style="max-width: 25rem" class="w-25">
            <map-popup v-bind="marker" />
          </MglPopup>
        </MglMarker>
      </MglMap>
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import MapMarker from '@/components/ui/companies/MapMarker';
import MapPopup from '@/components/ui/companies/MapPopup';

export default {
  name: 'distribuidoress',

  mounted() {
    this.$store.dispatch('fetchCompanies');
  },

  components: {
    MapPopup,
    MapMarker,
  },

  computed: {
    countries() {
      return [...this.shaftCompanies, ...this.favCompanies].map((company) => {
        console.log(company.properties);
        if (company.properties.country) {
          return company.properties.country.value;
        } else {
          return company;
        }
      });
    },
  },

  methods: {
    handleClick(object) {
      console.log(object);
    },
  },

  data() {
    return {
      accessToken:
        'pk.eyJ1IjoiaXJ2aW5nLWhlYm8iLCJhIjoiY2tlYzlibHNrMDIybjJ0cDloOGM1Y3Q1OSJ9.2fBGzUh_npTwBo4hoFPBXg',
      mapStyle: 'mapbox://styles/irving-hebo/ckec9srml09u719nzjjvbxaj5',
      center: [-102.2411842, 22.7787241],
      geojson: {},
      layerId: 'firstLayer',
      sourceId: 'firstSource',
      markerCoordinates: [19.4978, -99.1269],
    };
  },

  computed: {
    ...mapGetters(['favCompanies', 'shaftCompanies']),
    ...mapState({
      mapMarkers: (state) => state.mapMarkers,
    }),
  },
};
</script>

<style lang="scss" scoped>
pre {
  color: $alpha;
}
.distribuidores {
  min-height: 50vh;
  max-height: 60vh;
  z-index: 100;
  background-color: #081218;
  padding-top: 3em;
  h2 {
    font-family: shaft-h1;
    font-size: 4em;
    color: #e9e2e2;
    @media screen and (min-width: 800px) {
      font-size: 6em;
    }
  }
  img {
    position: relative;
    z-index: 3;
  }
}
h5 {
  color: $navy-color;
  font-family: shaft-h1;
}

.mgl-map-wrapper {
  min-height: 100vh;
}
</style>
