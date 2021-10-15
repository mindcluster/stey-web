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
        AUMENTO
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Aumento</span>
      </v-card-title>
      <v-card-text>
        <div class="collaborator-infos">
          <div>
            <h4>Colaborador</h4>
            <h5>{{ this.info.name }}</h5>
            <br />
            <h4>SMU</h4>
            <h5>
              {{ this.info.smu === null ? "Não informado" : this.info.smu }}
            </h5>
          </div>
          <div>
            <h4>GPN</h4>
            <h5>{{ this.info.gpn }}</h5>
            <br />
            <h4>Rank</h4>
            <h5>{{ this.info.rank }}</h5>
          </div>
        </div>
        <v-container>
          <div class="slider-header">
            <div>Atual</div>
            <div>Budget SMU</div>
          </div>
          <v-slider
            :max="this.info.budget_smu"
            :min="0"
            color="var(--darkGreyStey)"
            dark
            step="5"
            track-color="var(--yellowStey)"
            v-model="slider"
            :thumb-size="28"
            thumb-label="always"
          ></v-slider>
          <div class="slider-header">
            <div>{{ this.info.current }}</div>
            <div>{{ this.info.budget_smu - this.slider }}</div>
          </div>
          <br />
          <h4 class="salary">
            Salário Futuro: $
            {{ parseInt(this.info.current) + parseInt(this.slider) }}
          </h4>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          CANCELAR
        </v-btn>
        <v-btn color="blue darken-1" text @click="updateBudget"> SALVAR </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "IncreaseButton",
  props: ["info", "id"],
  data: () => ({
    dialog: false,
    slider: "",
  }),
  methods: {
    ...mapActions(["action_employeeUpdateSalary"]),
    updateBudget() {
      this.action_employeeUpdateSalary({ salary: parseInt(this.slider), employeeId: this.id.id}).then(() => {
        this.dialog = false;
        this.$router.go()
        this.$alert("Aumento realizado com sucesso!");
      }).catch(() => {
        this.$alert("Houve um erro durante o aumento. Tente novamente.");
      });
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
  height: 12em;
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

.salary {
  color: var(--darkGreyStey);
}
</style>