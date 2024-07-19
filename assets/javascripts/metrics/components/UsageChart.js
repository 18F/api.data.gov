import * as echarts from "echarts";
import debounce from "lodash-es/debounce";
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch,
  // eslint-disable-next-line import/extensions
} from "vue/dist/vue.esm-bundler.js";

export default defineComponent({
  template: `
    <div>
      <div class="grid-row">
        <div class="desktop:grid-col">
          <div ref="chartEl" class="chart" style="width: 100%; height: 400px;"></div>
        </div>
      </div>
      <div class="grid-row">
        <div class="desktop:grid-col text-center">
          <p class="font-heading-xl">{{ Number(hitsTotal).toLocaleString() }}<br>Hits</p>
        </div>
        <div class="desktop:grid-col text-center">
          <p class="font-heading-xl">{{ Number(activeApiKeysTotal).toLocaleString() }}<br>Unique API Keys</p>
        </div>
      </div>
    </div>
  `,

  props: {
    title: String,
    hits: Array,
    hitsTotal: Number,
    activeApiKeys: Array,
    activeApiKeysTotal: Number,
    dateFormatOptions: Object,
  },

  setup(props) {
    const chartData = computed(() => {
      const data = {
        hits: props.hits,
        activeApiKeys: props.activeApiKeys,
      };

      if (props.title === "All Time") {
        // Remove last element from monthly hits, since this represents the
        // current in-progress month and causes dips in the chart until the
        // month is finished.
        data.hits.pop();
      }

      return data;
    });

    const chartEl = ref();
    let chart;
    onMounted(() => {
      const colors = ["#30A64A", "#0E5FC2"];

      const dateFormatter = new Intl.DateTimeFormat(
        undefined,
        props.dateFormatOptions,
      );

      const series = [
        {
          name: "Hits",
          type: "line",
          yAxisIndex: 0,
          data: chartData.value.hits,
        },
      ];

      // Skip the unique API keys for the monthly chart for now until we can
      // figure out solution to 10k limit each month.
      if (props.title !== "All Time") {
        series.push({
          name: "Unique API Keys",
          type: "line",
          yAxisIndex: 1,
          data: chartData.value.activeApiKeys,
        });
      }

      chart = echarts.init(chartEl.value);
      chart.setOption({
        animation: false,
        color: colors,
        title: {
          text: props.title,
        },
        legend: {
          data: ["Hits", "Unique API Keys"],
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            label: {
              formatter: (params) => {
                const date = new Date(params.value);
                return dateFormatter.format(date);
              },
            },
          },
        },
        xAxis: {
          type: "time",
          axisLine: {
            show: false,
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: colors[0],
                width: 2,
              },
            },
          },
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: colors[1],
                width: 2,
              },
            },
          },
        ],
        grid: {
          left: "18%",
        },
        series,
      });

      window.addEventListener("resize", debounce(chart.resize));
    });

    watch(chartData, () => {
      if (chart) {
        const series = [
          {
            name: "Hits",
            data: chartData.value.hits,
          },
        ];

        if (props.title !== "All Time") {
          series.push({
            name: "Unique API Keys",
            data: chartData.value.activeApiKeys,
          });
        }

        chart.setOption({
          series,
        });
      }
    });

    return {
      chartEl,
    };
  },
});
