<template>
  <div class="text-input">
    <v-form color="var(--yellowStey)">
      <div class="text-help">
          Não encontrou o que procurava?
          <br/>
          Solicite abaixo:
      </div>
      <v-text-field
        outlined
        solo
        flat
        color="var(--yellowStey)"
        v-model="text"
        placeholder="Nome do aplicativo... Ex: Google Calendar"
        type="text"
        @change="$emit('update:value', text)"
      >
      </v-text-field>
      <div class="button">
            <NormalButton 
            @click.native="update"
            color="var(--yellowStey)"
            text="Solicitar Integração"
            />
        </div>
    </v-form>
  </div>
</template>

<script>
    import NormalButton from '../buttons/NormalButton';
export default {
  name: "TextInput",
  components: {
    NormalButton,
  },
  props: ["type"],
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
.text-help{
    text-align: center;
    margin-bottom: 2em;
}
</style>