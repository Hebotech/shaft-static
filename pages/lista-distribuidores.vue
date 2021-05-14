<template>
  <div class="lista-container">
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Sitio web</th>
          <th scope="col">Dirección</th>
          <th scope="col">Coordenadas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(company, index) in markers" :key="company.name">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ company.name }}</td>
          <td>{{ company.website }}</td>

          <td>
            <ul class="list-group" v-if="company.address">
              <li
                class="list-group-item text-dark"
                v-for="direccion in company.address.split(';')"
                :key="direccion"
              >
                {{ direccion }}
              </li>
            </ul>
          </td>
          <td>
            <a
              class="text-light"
              :href="`https://www.latlong.net/convert-address-to-lat-long.html?long=${company.coordinates[1]}&lat=${company.coordinates[0]}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ company.coordinates }}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ListaDistribuidores',

  mounted() {
    this.$store.dispatch('fetchCompanies')
  },

  filters: {
    stringCood: function (value) {
      return value.reverse().join(',')
    },
  },

  computed: {
    markers() {
      return this.$store.state.mapMarkers
    },
    companies() {
      return this.$store.state.allCompanies
        .filter((company) => {
          return (
            company.properties.fav && company.properties.fav.value === 'true'
          )
        })
        .filter((company) => {
          return (
            company.properties.address &&
            company.properties.address.value !== ''
          )
        })
        .map(({ properties: company }) => {
          return {
            name: company.name.value,
            website: company.website.value,
            address: company.address.value.split(','),
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.lista-container {
  margin-top: 5rem !important;
}
</style>
