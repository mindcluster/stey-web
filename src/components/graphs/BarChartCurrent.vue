<template>
  <div class="graph-card" flat>
    <h4>{{ title }}</h4>
    <div class="legend-graph">
      <v-icon color="var(--yellowStey)">mdi-square</v-icon>
      {{ legend_1 }}
      <v-icon color="var(--darkBlueStey)">mdi-square</v-icon>
      {{ legend_2 }}
    </div>
    <D3BarChart
      :config="chartConfig"
      :datum="chartData"
    ></D3BarChart>
  </div>
</template>

<script>
import { D3BarChart } from "vue-d3-charts";

export default {
  components: {
    D3BarChart,
  },
  props: ["title", "data", "legend_1", "legend_2", "current"],
  data() {
    return {
      chartData: this.data.data,
      chartConfig: {
        key: "key",
        values: ["value"],
        currentKey: this.current,
        tooltip: { label: "displayName" },
        color: {
          default: 'var(--darkBlueStey)',
          current: 'var(--yellowStey)'
        }
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
  height: 100%;
  background-color: var(--whiteStey);
  border-radius: 3px;
}

@media only screen and (max-width: 1024px) {
  .graph-card {
    font-family: "Metropolis Regular";
    margin-top: 2em;
    width: 100%;
    height: auto;
    margin-bottom: 2em;
  }
}
</style>