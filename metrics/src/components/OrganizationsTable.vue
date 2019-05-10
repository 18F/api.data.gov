<template>
  <div v-pre>
    <table class="organizations-table table table-striped table-bordered" style="width: 100%"></table>
  </div>
</template>

<script lang="ts">
import 'datatables.net';
import 'datatables.net-bs4';
import jQuery from 'jquery';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class OrganizationsTable extends Vue {
  private dataTable: any;

  get organizations() {
    const organizations: Array<{
      name: string,
      hits: number,
      hits_recent: number,
      active_api_keys: number,
      active_api_keys_recent: number,
      average_response_times_recent: number,
    }> = [];

    this.$store.getters.organizations.forEach((organization: any) => {
      organizations.push({
        name: organization.name,
        hits: organization.hits.total,
        hits_recent: organization.hits.recent.total,
        active_api_keys: organization.active_api_keys.total,
        active_api_keys_recent: organization.active_api_keys.recent.total,
        average_response_times_recent: organization.average_response_times.recent.average,
      });
    });

    return organizations;
  }

  @Watch('organizations')
  private onOrganizationsChange() {
    if (this.dataTable) {
      this.dataTable.clear();
      this.dataTable.rows.add(this.organizations);
      this.dataTable.draw();
    }
  }

  private mounted() {
    const numberRender = {
      display(data: any) {
        return Number(data).toLocaleString();
      },
    };
    const msRender = {
      display(data: any) {
        return Number(data).toLocaleString() + ' ms';
      },
    };

    this.dataTable = jQuery(this.$el).find('.organizations-table').DataTable({
      data: this.organizations,
      columns: [
        {
          title: 'Agency',
          data: 'name',
        },
        {
          title: 'Hits<br>(Last 30 Days)',
          data: 'hits_recent',
          render: numberRender,
        },
        {
          title: 'Unique API Keys<br>(Last 30 Days)',
          data: 'active_api_keys_recent',
          render: numberRender,
        },
        {
          title: 'Average Response Time<br>(Last 30 Days)',
          data: 'average_response_times_recent',
          render: msRender,
        },
        {
          title: 'Hits<br>(All Time)',
          data: 'hits',
          render: numberRender,
        },
        {
          title: 'Unique API Keys<br>(All Time)',
          data: 'active_api_keys',
          render: numberRender,
        },
      ],
      order: [[1, 'desc']],
      paging: false,
      searching: false,
      info: false,
    });
  }
}
</script>

<style scoped lang="scss">
</style>
