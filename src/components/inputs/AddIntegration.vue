<template>
  <div class="add-integration">
    <v-form color="var(--yellowStey)">
      <div class="text-help">
        Não encontrou o que procurava?
        <br />
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
          @click.native="requestIntegration"
          color="var(--yellowStey)"
          text="Solicitar Integração"
        />
      </div>
    </v-form>
  </div>
</template>

<script>
import NormalButton from "../buttons/NormalButton";
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
  methods: {
    requestIntegration(){
      if(this.text && this.text != '') {
        this.$alert("Sua solicitação foi registrada com sucesso!");
      } else {
        this.$alert("Preencha o campo corretamente");
      }
    }
  }
};
</script>

<style scoped>
.add-integration {
  font-family: "Metropolis Regular";
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.text-help {
  text-align: center;
  margin-bottom: 2em;
}
</style>