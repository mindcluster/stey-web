<template>
  <v-card class="scroll-list" flat>
    <div class="header">
      <div class="column-name">
        <h4>#</h4>
      </div>
      <div class="column-name">
        <h4>Nome</h4>
      </div>
      <div class="column-name">
        <h4>Cargo</h4>
      </div>
      <div class="column-name">
        <h4>SMU</h4>
      </div>
    </div>
    <v-list class="content" dense>
      <v-list-item
        v-for="(item, i) in params"
        :key="i"
        style="color: var(--blackStey) !important"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.id }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title>{{ item.job_role }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title>{{ item.smu }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-btn
            icon
            color="var(--redAlert)"
            @click.native="setCollaborator(item)"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex';

import globalMethods from "../../mixins/globalMethods";
export default {
  name: "ScrollCollaborator",
  mixins: [globalMethods],
  props: ["number", "text", "color", "params"],
  methods: {
    ...mapMutations([
      "SET_COLLABORATOR",
    ]),
    setCollaborator(item) {
      this.SET_COLLABORATOR(item);
      localStorage.setItem("selected_collaborator", JSON.stringify(item));
      this.$router.push({name: "collaborator_detail"});
    }
  },
};
</script>

<style scoped>
.scroll-list {
  font-family: "Metropolis Regular";
  width: 100%;
  height: 100%;
  text-transform: capitalize;
}

.list-title {
  padding: 1em;
}

.content {
  height: 50em;
  overflow-y: auto;
}

.v-list-item {
  border-bottom: solid 1px var(--lightGreyStey);
}

.header {
  background-color: var(--redAlert);
  color: var(--whiteStey);
  padding: 0em 1.9em 0em 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.column-name {
  width: 25%;
  text-transform: uppercase;
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

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .scroll-list {
    font-family: "Metropolis Regular";
    margin-top: 2em;
    width: 100%;
    height: 30em;
    margin-bottom: 2em;
  }
  .content {
    height: 35em;
    overflow-y: auto;
  }
}
</style>