<template>
  <v-card class="budget-bar" flat solo>
    <h3>Orçamento Geral</h3>
    <br />
    <v-progress-linear
      color="var(--greenStey)"
      height="20"
      background-color="var(--lightGreyStey)"
      :value="this.params.used / 10"
    >
      <template v-slot:default="{ value }">
        <strong>USD {{ value * 10 }}</strong>
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
//      :buffer-value="this.params.total"
export default {
  name: "BudgetBar",
  props: ["params"],
  data() {
    return {
      bufferValue: 300
    }
  }
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