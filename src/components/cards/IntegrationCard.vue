<template>
  <v-card class="integration-card" flat solo>
    <v-img size="10em">
      <img alt="Colaborador" src="../../assets/images/image-glassdoor.png" />
    </v-img>
    <div class="title">
      <h2>{{ params.name }}</h2>
    </div>
    <div class="button">
      <NormalButton
        @click.native="update"
        color="var(--yellowStey)"
        text="Integrar"
      />
    </div>
  </v-card>
</template>

<script>
import NormalButton from "../buttons/NormalButton";
export default {
  name: "IntegrationCard",
  props: ["params"],
  components: {
    NormalButton,
  },
};
</script>

<style scoped>
.integration-card {
  height: 18em;
  font-family: "Metropolis Regular";
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: "Metropolis Regular";
  font-size: 10px;
  text-align: left;
}

.button {
  text-align: right;
  margin-bottom: 2em;
  padding: 1em 1em 0em 0em;
}

h6 {
  color: var(--greyStey);
}

@media only screen and (max-width: 1024px) {
  .integration-card {
    width: 100%;
    height: 18em;
    font-family: "Metropolis Regular";
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1em;
  }
  .infos {
    height: auto;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .integration-card {
    width: 100%;
    height: 18em;
    font-family: "Metropolis Regular";
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
  }
  .infos {
    height: auto;
  }
}
</style>