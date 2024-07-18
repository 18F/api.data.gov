import * as echarts from "echarts";
import debounce from "lodash-es/debounce";
import {
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
    const chartEl = ref();
    let chart;
    onMounted(() => {
      const colors = ["#30A64A", "#0E5FC2"];

      const dateFormatter = new Intl.DateTimeFormat(
        undefined,
        props.dateFormatOptions,
      );

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
        series: [
          {
            name: "Hits",
            type: "line",
            yAxisIndex: 0,
            data: props.hits,
            label: {
              formatter: "{b}: {@score}",
            },
          },
          {
            name: "Unique API Keys",
            type: "line",
            yAxisIndex: 1,
            data: props.activeApiKeys,
          },
        ],
      });

      window.addEventListener("resize", debounce(chart.resize));
    });

    watch(props, () => {
      if (chart) {
        chart.setOption({
          series: [
            {
              name: "Hits",
              data: props.hits,
            },
            {
              name: "Unique API Keys",
              data: props.activeApiKeys,
            },
          ],
        });
      }
    });

    return {
      chartEl,
    };
  },
});
