<template>
  <div class="text-input">
    <v-form color="var(--yellowStey)">
      <v-text-field
        outlined
        solo
        flat
        color="var(--yellowStey)"
        v-model="text"
        :prepend-icon="ico"
        :placeholder="label"
        :type="type"
        @change="$emit('update:value', text)"
      >
      </v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: ["ico", "label", "type"],
  data() {
    return {
      text: this.valueField || "",
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