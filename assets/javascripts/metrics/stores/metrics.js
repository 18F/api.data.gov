import ky from "ky";
import { defineStore } from "pinia";

export default defineStore({
  id: "metrics",

  state: () => ({
    organizations: [],
    organizationData: {},
  }),

  getters: {
    hitsTotal: (state) => (organizationName) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].hits.total;
      }
      return 0;
    },

    hitsMonthly: (state) => (organizationName) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].hits.monthly;
      }
      return [];
    },

    hitsRecentTotal: (state) => (organizationName) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].hits.recent.total;
      }
      return 0;
    },

    hitsRecentDaily: (state) => (organizationName) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].hits.recent.daily;
      }
      return [];
    },

    activeApiKeysTotal: (state) => (organizationName) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].active_api_keys.total;
      }
      return 0;
    },

    activeApiKeysMonthly: (state) => (organizationName) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].active_api_keys.monthly;
      }
      return [];
    },

    activeApiKeysRecentTotal: (state) => (organizationName) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].active_api_keys.recent
          .total;
      }
      return 0;
    },

    activeApiKeysRecentDaily: (state) => (organizationName) => {
      if (state.organizationData[organizationName]) {
        return state.organizationData[organizationName].active_api_keys.recent
          .daily;
      }
      return [];
    },
  },

  actions: {
    async fetchAnalytics() {
      const data = await ky
        .get(
          "https://api.data.gov/api-umbrella/v0/analytics/summary.json?api_key=biBHFQWowEsEGZAkH9DTUu6khOW1oPQHqGQAxzoO",
        )
        .json();

      if (data && data.production_apis && data.production_apis.organizations) {
        this.organizations = data.production_apis.organizations;

        data.production_apis.organizations.forEach((organization) => {
          this.organizationData[organization.name] = organization;
        });
      }

      if (data && data.production_apis && data.production_apis.all) {
        this.organizationData.all = data.production_apis.all;
      }
    },
  },
});
