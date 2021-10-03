<template>
  <div class="integration-card">
    <div class="infos">
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
        <v-progress-linear
            v-if="params.value != null"
            rounded
            color="var(--yellowStey)"
            height="20"
            background-color="var(--greyStey)"
            value="50"
        >
        </v-progress-linear>
    </div>
  </div>
</template>

<script>
import NormalButton from '../buttons/NormalButton';
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
  height: auto;
  font-family: "Metropolis Regular";
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--whiteStey);
  border-radius: 17px;
}



.infos {
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 0em 0em 1em;
  text-align: left;
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
  .profile-card {
    width: auto;
    height: auto;
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
</style>