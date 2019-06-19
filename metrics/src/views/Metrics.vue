<template>
  <div class="home">
    <h1>api.data.gov Metrics</h1>

    <div class="container form-group custom-select-lg-container">
      <select v-model="selectedOrganization" class="custom-select custom-select-lg">
        <option value="all">All Agencies</option>
        <option v-for="name in organizationNames" v-bind:value="name">{{ name }}</option>
      </select>
    </div>

    <div class="row">
      <div class="col-md-6">
        <UsageChart
          title="Last 30 Days"
          v-bind:hits="$store.getters.hitsRecentDaily(selectedOrganization)"
          v-bind:hits-total="$store.getters.hitsRecentTotal(selectedOrganization)"
          v-bind:active-api-keys="$store.getters.activeApiKeysRecentDaily(selectedOrganization)"
          v-bind:active-api-keys-total="$store.getters.activeApiKeysRecentTotal(selectedOrganization)"
          />
      </div>
      <div class="col-md-6">
        <UsageChart
          title="All Time"
          v-bind:hits="$store.getters.hitsMonthly(selectedOrganization)"
          v-bind:hits-total="$store.getters.hitsTotal(selectedOrganization)"
          v-bind:active-api-keys="$store.getters.activeApiKeysMonthly(selectedOrganization)"
          v-bind:active-api-keys-total="$store.getters.activeApiKeysTotal(selectedOrganization)"
          />
      </div>
    </div>

    <hr>

    <div class="form-group h3 text-center font-weight-light">
      {{ organizationNames.length }} participating agencies
    </div>

    <div>
      <OrganizationsTable/>
    </div>

    <div class="metrics-footer">
      <p>Legend</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UsageChart from '@/components/UsageChart.vue';
import OrganizationsTable from '@/components/OrganizationsTable.vue';

@Component({
  components: {
    UsageChart,
    OrganizationsTable,
  },
})
export default class Home extends Vue {
  private selectedOrganization = 'all';

  get organizationNames() {
    const names: string[] = [];
    this.$store.getters.organizations.forEach((organization: any) => {
      names.push(organization.name);
    });
    names.sort();

    return names;
  }

  private mounted() {
    this.$store.dispatch('fetchAnalytics');
  }
}
</script>
