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
  },

  setup(props) {
    const chartData = computed(() => {
      const data = {
        labels: [],
        hits: [],
        activeApiKeys: [],
      };

      props.hits.forEach((day) => {
        data.labels.push(day[0]);
        data.hits.push(day[1]);
      });

      props.activeApiKeys.forEach((day) => {
        data.activeApiKeys.push(day[1]);
      });

      return data;
    });

    const chartEl = ref();
    let chart;
    onMounted(() => {
      const colors = ["#30A64A", "#0E5FC2"];

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
        },
        xAxis: {
          type: "category",
          data: chartData.value.labels,
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
            data: chartData.value.hits,
          },
          {
            name: "Unique API Keys",
            type: "line",
            yAxisIndex: 1,
            data: chartData.value.activeApiKeys,
          },
        ],
      });

      window.addEventListener("resize", debounce(chart.resize));
    });

    watch(chartData, () => {
      if (chart) {
        chart.setOption({
          xAxis: {
            data: chartData.value.labels,
          },
          series: [
            {
              name: "Hits",
              data: chartData.value.hits,
            },
            {
              name: "Unique API Keys",
              data: chartData.value.activeApiKeys,
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
