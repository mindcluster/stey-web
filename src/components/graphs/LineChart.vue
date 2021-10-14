<template>
  <div class="graph-card">
    <div class="header-graph">
      <h4>{{ title }}</h4>
    </div>
    <div class="legend-graph">
      <v-icon color="#2077b4">mdi-square</v-icon>
      {{ legend_2 }}
      <v-icon color="#f97f0f">mdi-square</v-icon>
      {{ legend_1 }}
    </div>
    <D3LineChart :config="chart_config" :datum="data"></D3LineChart>
  </div>
</template>

<script>
import { D3LineChart } from "vue-d3-charts";

export default {
  components: {
    D3LineChart,
  },
  props: ["title", "data", "filter", "legend_1", "legend_2", "values"],
  data() {
    return {
      chart_data: this.data,
      chart_config: {
        values: this.values,
        date: {
          key: "date",
          inputFormat: "%Y-%m-%d",
          outputFormat: "%Y-%m-%d",
        },
        axis: {
          yTicks: 3,
        },
        color: {
          scheme: "schemeCategory10",
        },
        points: {
          visibleSize: 3,
          hoverSize: 6,
        },
        tooltip: {
          labels: false,
          // labels: ["Entradas", "Saídas"],
        },
        transition: {
          duration: 350,
          ease: "easeLinear",
        },
      },
    };
  },
};
</script>

<style scoped>
.graph-card {
  font-family: "Metropolis Regular";
  width: auto;
  padding: 1em;
  height: auto;
  background-color: var(--whiteStey);
  border-radius: 3px;
}

.header-graph {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2.5em;
  padding: 0em 1em 0em 1em;
}

.legend-graph {
  padding: 0em 1em 0em 1em;
}

@media only screen and (max-width: 1024px) {
  .graph-card {
    font-family: "Metropolis Regular";
    margin-top: 2em;
    width: 100%;
    height: auto;
    margin-bottom: 2em;
  }
  .header-graph {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 2.5em;
    padding: 0em 1em 0em 1em;
    width: 100%;
  }
}
</style>