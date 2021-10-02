<template>
  <v-card class="scroll-list" flat>
    <h4 class="list-title">Certificados ({{ params.length }})</h4>
    <v-list class="content" dense>
      <v-list-item
        v-for="(item, i) in params"
        :key="i"
        :disabled="true"
        style="color: var(--blackStey) !important"
      >
        <v-list-item-icon>
          <v-icon center color="var(--greyStey)">mdi-certificate</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
export default {
  name: "ScrollCertificates",
  mixins: [globalMethods],
  props: ["number", "text", "color", "params"],
};
</script>

<style scoped>
.scroll-list {
  font-family: "Metropolis Regular";
  width: 100%;
  height: auto;
  text-transform: capitalize;
  margin-top: 1em;
}

.list-title {
  padding: 1em;
  background-color: var(--greyStey);
}

.content {
  height: 10em;
  overflow-y: auto;
}

.v-list-item {
  border-bottom: solid 1px var(--lightGreyStey);
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
</style>