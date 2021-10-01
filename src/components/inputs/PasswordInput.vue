<template>
  <div class="password-input">
    <v-form color="var(--yellowStey)">
      <v-text-field
        solo
        flat
        color="var(--yellowStey)"
        outlined
        :prepend-icon="ico"
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        :placeholder="label"
        @change="$emit('update:value', password)"
      >
      </v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  props: ["ico", "label", "type"],
  data() {
    return {
      show1: false,
      password: "",
      rules: {
        required: (value) => !!value || "A senha é obrigatória",
        min: (v) => v.length >= 8 || "Minímo 8 caracteres",
      },
    };
  },
};
</script>

<style scoped>
.password-input {
  font-family: "Metropolis Regular";
}
</style>