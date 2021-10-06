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
            <h4>GPN</h4>
            <h5>{{ this.info.gpn }}</h5>
            <br />
            <h4>SMU</h4>
            <h5>
              {{ this.info.smu === null ? "Não informado" : this.info.smu }}
            </h5>
          </div>
          <div>
            <h4>Email</h4>
            <h5>{{ this.info.name }}</h5>
            <br />
            <h4>Rank</h4>
            <h5>{{ this.info.rank }}</h5>
          </div>
        </div>
        <v-container>
          <v-slider
            color="var(--darkGreyStey)"
            dark
            track-color="var(--yellowStey)"
            v-model="slider"
            :thumb-size="24"
            thumb-label="always"
          ></v-slider>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          CANCELAR
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">
          SALVAR
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "IncreaseButton",
  props: ["info"],
  data: () => ({
    dialog: false,
    slider: "",
  }),
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
</style>