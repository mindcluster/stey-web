<template>
  <v-card class="scroll-list" flat>
    <h4 class="list-title">Indicador De Promoção</h4>
    <v-list class="content" dense>
      <v-list-item
        class="indicator"
        @click.native="setCollaborator(item)"
        v-for="(item, i) in params"
        :key="i"
        style="color: var(--blackStey) !important"
      >
        <v-list-item-content>
          <v-icon x-large :color="returnColor(item.status)">
            {{ returnIcon(item.status) }}
          </v-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-title>{{ item.job_role }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import { mapMutations } from "vuex";

export default {
  name: "ScrollPromotions",
  mixins: [globalMethods],
  props: ["params"],
  methods: {
    ...mapMutations(["SET_COLLABORATOR"]),
    setCollaborator(item) {
      this.SET_COLLABORATOR(item);
      localStorage.setItem("selected_collaborator", JSON.stringify(item));
      this.$router.push({ name: "collaborator_detail" });
    },
    returnColor(status) {
      switch (status) {
        case "Promotion":
          return "var(--greenAlert)";
        default:
          return "var(--orangeAlert)";
      }
    },
    returnIcon(status) {
      switch (status) {
        case "Promotion":
          return "mdi-check-circle";
        default:
          return "mdi-close-circle";
      }
    },
  },
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

v-list-item-content {
  text-align: center;
}

.indicator {
  cursor: pointer;
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