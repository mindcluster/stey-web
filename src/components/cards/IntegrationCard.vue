<template>
  <v-card class="integration-card" flat solo>
    <div class="image">
      <v-img size="8em" :alt="params.name" :src="getImage(params.id)" />
    </div>
    <div class="card-title">
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
  data() {
    return {};
  },
  methods: {
    getImage(id) {
      switch (id) {
        case 1:
          return require("../../assets/images/image-glassdoor.png");
        case 2:
          return require("../../assets/images/image-google.png");
        case 3:
          return require("../../assets/images/image-hubspot.png");
        case 4:
          return require("../../assets/images/image-indeed.png");
      }
    },
  },
};
</script>

<style scoped>
.integration-card {
  width: 15em;
  height: 18em;
  font-family: "Metropolis Regular";
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.card-title {
  font-family: "Metropolis Regular";
  font-size: 1em;
  text-align: left;
}

.button {
  text-align: right;
  margin-bottom: 2em;
  padding: 1em 1em 0em 0em;
}

.image {
  width: 80%;
  height: 8em;
  display: flex;
  align-items: center;
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
  .image {
    width: 80%;
    height: 5em;
    display: flex;
    align-items: center;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .integration-card {
    width: 15em;
    height: 18em;
    font-family: "Metropolis Regular";
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1em;
  }
  .infos {
    height: auto;
  }
}
</style>