<template>
  <div class="graph-card" flat>
    <h4>{{ title }}</h4>
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
  props: ["title", "data", "keyBar", "values"],
  data() {
    return {
      chartData: this.data,
      chartConfig: {
        key: this.keyBar,
        values: this.values,
        tooltip: { label: "displayName" },
        color: { scheme: "schemeTableau10" },
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