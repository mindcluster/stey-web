<template>
  <v-card class="budget-bar" flat solo>
    <h3>Orçamento Geral</h3>
    <br />
    <v-progress-linear
      color="var(--greenStey)"
      height="20"
      background-color="var(--lightGreyStey)"
      :buffer-value="params.total"
      :value="this.params.used"
    >
      <template v-slot:default="{ value }">
        <strong>{{ value }}</strong>
      </template>
    </v-progress-linear>
    <div class="item">
      <div class="init-item">
        0 USD
      </div>
      <div class="end-item">
        USD {{this.params.total}}
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "BudgetBar",
  props: ["params"],
  methods: {
    returnColor(value) {
      if (value < 50) {
        return "var(--yellowStey)";
      } else {
        return "var(--yellowStey)";
      }
    },
  },
};
</script>

<style scoped>
.budget-bar {
  width: 100%;
  height: auto;
  padding: 2em;
  font-family: "Metropolis Regular";
}

.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.end-item {
  margin-top: 1em;
  text-align: center;
}
</style>