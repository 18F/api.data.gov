<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div v-pre class="chart" style="width: 100%; height: 400px;"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 text-center">
        <p class="h3 font-weight-light">{{ Number(hitsTotal).toLocaleString() }}<br>Hits</p>
      </div>
      <div class="col-sm-6 text-center">
        <p class="h3 font-weight-light">{{ Number(activeApiKeysTotal).toLocaleString() }}<br>Unique API Keys</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import echarts from 'echarts';
import debounce from 'lodash-es/debounce';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class UsageChart extends Vue {
  @Prop() private title!: string;
  @Prop() private hits!: any;
  @Prop() private hitsTotal!: number;
  @Prop() private activeApiKeys!: any;
  @Prop() private activeApiKeysTotal!: number;

  private chart: any;

  get chartData() {
    const chartData = {
      labels: [] as string[],
      hits: [] as number[],
      activeApiKeys: [] as number[],
    };

    this.hits.forEach((day: any) => {
      chartData.labels.push(day[0]);
      chartData.hits.push(day[1]);
    });

    this.activeApiKeys.forEach((day: any) => {
      chartData.activeApiKeys.push(day[1]);
    });

    return chartData;
  }

  @Watch('chartData')
  private onHitsChange() {
    if (this.chart) {
      this.chart.setOption({
        xAxis: {
          data: this.chartData.labels,
        },
        series: [
          {
            name: 'Hits',
            data: this.chartData.hits,
          },
          {
            name: 'Unique API Keys',
            data: this.chartData.activeApiKeys,
          },
        ],
      });
    }
  }

  private mounted() {
    const chartEl = this.$el.querySelector('.chart');
    if (!chartEl) {
      return;
    }

    const colors = ['#30A64A', '#0E5FC2'];

    this.chart = echarts.init(chartEl as HTMLDivElement);
    this.chart.setOption({
      animation: false,
      color: colors,
      title: {
        text: this.title,
      },
      legend: {
        data: ['Hits', 'Unique API Keys'],
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: this.chartData.labels,
        axisLine: {
          show: false,
        },
      },
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: colors[0],
              width: 2,
            },
          },
          axisLabel: {
            width: 100,
          },
        },
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: colors[1],
              width: 2,
            },
          },
          axisLabel: {
            width: '100%',
          },
        },
      ],
      series: [
        {
          name: 'Hits',
          type: 'line',
          yAxisIndex: 0,
          data: this.chartData.hits,
        },
        {
          name: 'Unique API Keys',
          type: 'line',
          yAxisIndex: 1,
          data: this.chartData.activeApiKeys,
        },
      ],
    });

    window.addEventListener('resize', debounce(this.chart.resize));
  }
}
</script>

<style scoped lang="scss">
</style>
