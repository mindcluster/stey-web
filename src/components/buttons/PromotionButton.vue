<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="increase-button"
        color="var(--yellowStey)"
        solo
        depressed
        v-bind="attrs"
        v-on="on"
      >
        PROMOÇÃO
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Promoção</span>
      </v-card-title>
      <v-card-text>
        <div class="collaborator-infos">
          <div>
            <h4>Colaborador</h4>
            <h5>{{ this.info.name }}</h5>
            <br />
            <h4>Cargo Atual</h4>
            <h5>{{ this.info.job_role }}</h5>
            <br />
            <h4>Salário Atual</h4>
            <h5>{{ this.info.salary }}</h5>
            <br />
          </div>
          <div>
            <h4>SMU</h4>
            <h5>
              {{ this.info.smu === null ? "Não informado" : this.info.smu }}
            </h5>
            <br />
            <h4>Cargo Futuro</h4>
            <h5>{{ this.info.job_role }}</h5>
            <br />
            <h4>Salário Futuro</h4>
            <h5>{{ this.info.job_role }}</h5>
          </div>
        </div>

        <h3>Deseja promover o colaborador?</h3>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="var(--redAlert)" text @click="dialog = false">
          NÃo
        </v-btn>
        <v-btn color="var(--greenAlert)" text @click="updateRank">
          SIM
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "PromotionButton",
  props: ["info"],
  data: () => ({
    dialog: false,
    slider: "",
  }),
  methods: {
    ...mapActions([]),
    updateRank() {
      // this.action_usedBudget({used: 10}).then((response) => {
      //   console.log(response)
      //   this.$alert("Aumento realizado com sucesso!");
      // })
      this.$alert("Colaborador promovido com sucesso!");
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.increase-button {
  font-family: "Metropolis Bold";
}

.collaborator-infos {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15em;
  justify-content: space-around;
  align-items: center;
}

.slider-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
}

h4 {
  color: var(--greyStey);
}
</style>