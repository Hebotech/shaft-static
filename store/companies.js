import axios from 'axios';
const urlBase = 'http://localhost:9000/shaft';

export const state = () => ({
  allCompanies: [],
});

export const getters = {
  favCompanies: (state) => {
    return state.allCompanies.filter((company) =>
      company.properties.fav.value === true ? company : console.log(company)
    );
  },
};

export const actions = {
  async fetchCompanies({ commit, state }) {
    const allCompanies = await axios.get(`${urlBase}/companies`);
    commit('SET_ALL_COMPANIES', allCompanies.data.data.companies);
  },
};

export const mutations = {
  SET_ALL_COMPANIES(state, allCompanies) {
    state.allCompanies = allCompanies;
  },
};
