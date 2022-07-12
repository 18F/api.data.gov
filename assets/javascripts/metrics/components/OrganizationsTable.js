import datatables from "datatables.net-bs5";
import jQuery from "jquery";
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
  // eslint-disable-next-line import/extensions
} from "vue/dist/vue.esm-bundler.js";

import useMetricsStore from "../stores/metrics";

const DataTable = datatables(window, jQuery);

export default defineComponent({
  template: `
    <div>
      <table ref="tableEl" class="organizations-table table table-striped table-bordered" style="width: 100%"></table>
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
        columns: [
          {
            title: "Agency",
            data: "name",
          },
          {
            title: "Number of APIs",
            data: "api_backend_url_match_count",
            render: numberRender,
          },
          {
            title: "Hits<br>(Last 30 Days)",
            data: "hits_recent",
            render: numberRender,
          },
          {
            title: "Unique API Keys<br>(Last 30 Days)",
            data: "active_api_keys_recent",
            render: numberRender,
          },
          {
            title: "Average Response Time<br>(Last 30 Days)",
            data: "average_response_times_recent",
            render: msRender,
          },
          {
            title: "Hits<br>(All Time)",
            data: "hits",
            render: numberRender,
          },
          {
            title: "Unique API Keys<br>(All Time)",
            data: "active_api_keys",
            render: numberRender,
          },
        ],
        order: [[2, "desc"]],
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
