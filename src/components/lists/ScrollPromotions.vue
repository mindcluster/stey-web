<template>
  <v-card class="scroll-list" flat>
    <h4 class="list-title">Indicados Para Promoção</h4>
    <v-list class="content" dense>
      <v-list-item
        v-for="(item, i) in params"
        :key="i"
        :disabled="true"
        style="color: var(--blackStey) !important"
      >
        <v-list-item-content>
          <v-icon center x-large :color="returnColor(item.status)">mdi-check-circle</v-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-title>{{ item.job_role }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
export default {
  name: "ScrollPromotions",
  mixins: [globalMethods],
  props: ["params"],
  methods: {
    returnColor(status) {
      switch (status) {
        case "Promotion":
          return "var(--greenAlert)";
        default:
          return "var(--orangeAlert)";
      }
    },
  }
};
</script>

<style scoped>
.scroll-list {
  font-family: "Metropolis Regular";
  width: 100%;
  height: auto;
  text-transform: capitalize;
}

.list-title {
  padding: 1em;
}

.content {
  height: 100%;
  width: auto;
  padding: 1em;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
}

.item {
  width: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}

@media only screen and (max-width: 1024px) {
  .scroll-list {
    font-family: "Metropolis Regular";
    margin-top: 2em;
    width: auto;
    height: auto;
    margin-bottom: 2em;
  }
}
</style>]