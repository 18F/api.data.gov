import DataTable from "datatables.net-dt";
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
  // eslint-disable-next-line import/extensions
} from "vue/dist/vue.esm-bundler.js";

import useMetricsStore from "../stores/metrics";

DataTable.defaults.column.orderSequence = ["asc", "desc"];

export default defineComponent({
  template: `
    <div class="usa-table-container--scrollable">
      <table ref="tableEl" class="usa-table usa-table--compact usa-table--striped organizations-table" style="width: 100%"></table>
    </div>
  `,

  setup() {
    const store = useMetricsStore();
    const organizations = computed(() => {
      const data = [];

      store.organizations.forEach((organization) => {
        data.push({
          name: organization.name,
          api_backend_url_match_count: organization.api_backend_url_match_count,
          hits: organization.hits.total,
          hits_recent: organization.hits.recent.total,
          active_api_keys: organization.active_api_keys.total,
          active_api_keys_recent: organization.active_api_keys.recent.total,
          average_response_times_recent:
            organization.average_response_times.recent.average,
        });
      });

      return data;
    });

    const tableEl = ref();
    let dataTable;
    onMounted(() => {
      const numberRender = {
        display(data) {
          return Number(data).toLocaleString();
        },
      };
      const msRender = {
        display(data) {
          return `${Math.round(Number(data)).toLocaleString()} ms`;
        },
      };

      dataTable = new DataTable(tableEl.value, {
        data: this.organizations,
        autoWidth: false,
        columns: [
          {
            title: "Agency",
            data: "name",
          },
          {
            title: "Number of APIs",
            data: "api_backend_url_match_count",
            className: "numeric-value",
            width: "7.2rem",
            render: numberRender,
          },
          {
            title: "Hits<br>(Last 30 Days)",
            data: "hits_recent",
            className: "numeric-value",
            width: "10.2rem",
            render: numberRender,
          },
          {
            title: "Unique API Keys<br>(Last 30 Days)",
            data: "active_api_keys_recent",
            className: "numeric-value",
            width: "11rem",
            render: numberRender,
          },
          {
            title: "Average Response Time<br>(Last 30 Days)",
            data: "average_response_times_recent",
            className: "numeric-value",
            width: "14.8rem",
            render: msRender,
          },
          {
            title: "Hits<br>(All Time)",
            data: "hits",
            className: "numeric-value",
            width: "9rem",
            render: numberRender,
          },
          {
            title: "Unique API Keys<br>(All Time)",
            data: "active_api_keys",
            className: "numeric-value",
            width: "11rem",
            render: numberRender,
          },
        ],
        order: [[2, "desc"]],
        orderMulti: false,
        paging: false,
        searching: false,
        info: false,
      });
    });

    watch(organizations, () => {
      if (dataTable) {
        dataTable.clear();
        dataTable.rows.add(organizations.value);
        dataTable.columns.adjust().draw();
      }
    });

    return {
      tableEl,
    };
  },
});
