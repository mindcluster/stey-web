<template>
  <v-card>
    Oi

    <v-slider v-model="slider" :thumb-size="24" thumb-label="always"></v-slider>
     <NormalButton
        @click.native="validate"
        color="var(--greenAlert)"
        text="Salvar"
      />
  </v-card>
</template>

<script>
import NormalButton from "../../components/buttons/NormalButton"
export default {
  name: "IncreaseModal",
  components: {
    NormalButton
  }
};
</script>

<style scoped>
</style>