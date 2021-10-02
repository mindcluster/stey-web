<template>
  <v-card class="scroll-list" flat>
    <h4 class="list-title">Indicados Para Promoção</h4>
    <div class="content" dense>
      <div class="item">
        <v-avatar
          color="teal"
          size="56"
        >
        90
        </v-avatar>
        <h6>Nome</h6>
        <h6>Sl</h6>
      </div>
    </div>
  </v-card>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
export default {
  name: "ScrollPromotions",
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