<template>
  <div class="text-input">
    <v-form color="var(--yellowStey)">
      <v-text-field
        solo
        flat
        outlined
        color="var(--yellowStey)"
        v-model="text"
        :prepend-icon="ico"
        :placeholder="label"
        :type="type"
        :rules="emailRules"
        @change="$emit('update:value', text)"
      >
      </v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "EmailInput",
  props: ["ico", "label", "type"],
  data() {
    return {
      text: this.valueField || "",
      emailRules: [
        v => !!v || 'O e-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail inválido',
      ],
    };
  },
};
</script>

<style scoped>
.text-input {
  font-family: "Metropolis Regular";
  width: 100%;
}
</style>