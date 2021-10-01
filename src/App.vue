<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.swal2-content {
  font-family: "Metropolis Regular";
}

.swal2-styled.swal2-confirm {
  background-color: var(--yellowStey) !important;
  font-family: 'Metropolis Regular';
  color: var(--blackStey) !important;;
}
</style>