<template>
  <div class="profile-card">
    <v-avatar size="10em" style="border: solid 4px var(--yellowStey)">
      <img alt="Colaborador" :src="params.image" />
    </v-avatar>
    <div class="infos">
      <div>
        <h2>{{ params.name }}</h2>
      </div>
      <div class="role">
        <h4>{{ params.job_role }}</h4>
      </div>
      <br />
      <h4 v-if="params.role_satisfaction != null">Satisfação com o cargo: {{ params.role_satisfaction }} %</h4>
      <v-progress-linear
        v-if="params.role_satisfaction != null"
        rounded
        color="var(--yellowStey)"
        height="20"
        background-color="var(--greyStey)"
        :value="params.role_satisfaction"
      >
      </v-progress-linear>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  props: ["params"],
};
</script>

<style scoped>
.profile-card {
  height: auto;
  font-family: "Metropolis Regular";
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.v-avatar {
  margin-top: 2em;
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

.role {
  text-align: left;
  color: var(--greyStey);
}

.subjects {
  text-align: left;
  margin-bottom: 2em;
  text-align: left !important;
  justify-content: space-around;
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