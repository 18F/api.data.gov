import Vue from 'vue';
import Vuex from 'vuex';
import ky from 'ky';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    organizations: [],
    organizationData: {},
  },

  getters: {
    organizations(state: any) {
      return state.organizations;
    },

    hitsTotal: (state: any) => (organizationName: string) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].hits.total;
      } else {
        return 0;
      }
    },

    hitsMonthly: (state: any) => (organizationName: string) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].hits.monthly;
      } else {
        return [];
      }
    },

    hitsRecentTotal: (state: any) => (organizationName: string) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].hits.recent.total;
      } else {
        return 0;
      }
    },

    hitsRecentDaily: (state: any) => (organizationName: string) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].hits.recent.daily;
      } else {
        return [];
      }
    },

    activeApiKeysTotal: (state: any) => (organizationName: string) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].active_api_keys.total;
      } else {
        return 0;
      }
    },

    activeApiKeysMonthly: (state: any) => (organizationName: string) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].active_api_keys.monthly;
      } else {
        return [];
      }
    },

    activeApiKeysRecentTotal: (state: any) => (organizationName: string) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].active_api_keys.recent.total;
      } else {
        return 0;
      }
    },

    activeApiKeysRecentDaily: (state: any) => (organizationName: string) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].active_api_keys.recent.daily;
      } else {
        return [];
      }
    },
  },

  mutations: {
    setData(state, data) {
      if (data && data.production_apis && data.production_apis.organizations) {
        state.organizations = data.production_apis.organizations;

        data.production_apis.organizations.forEach((organization: any) => {
          state.organizationData[organization.name] = organization;
        });
      }

      if (data && data.production_apis && data.production_apis.all) {
        state.organizationData.all = data.production_apis.all;
      }

      state.data = data;
    },
  },

  actions: {
    async fetchAnalytics() {
      const data = await ky.get('https://api.data.gov/api-umbrella/v0/analytics/summary.json?api_key=biBHFQWowEsEGZAkH9DTUu6khOW1oPQHqGQAxzoO').json();
      this.commit('setData', data);
    },
  },
});
