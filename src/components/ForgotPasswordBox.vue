<template>
  <v-card class="forgot-password" flat>
    <div class="loading" v-if="loading">
      <DefaultLoading />
    </div>
    <v-form ref="form" lazy-validation>
      <h5>Insira o e-mail cadastrado</h5>
      <br>
      <EmailInput
        @update:value="email = $event"
        ico="mdi-email"
        label="E-mail"
        type="text"
      />
      <NormalButton
        @click.native="validate"
        color="var(--yellowStey)"
        text="Enviar"
      />
    </v-form>
  </v-card>
</template>

<script>
import globalMethods from "../mixins/globalMethods";
import NormalButton from "../components/buttons/NormalButton";
import EmailInput from "../components/inputs/EmailInput";
import DefaultLoading from "../components/loading/DefaultLoading"
import { mapActions } from "vuex";

export default {
  name: "forgot-passwordBox",
  mixins: [globalMethods],
  components: {
    NormalButton,
    EmailInput,
    DefaultLoading
  },
  data() {
    return {
      email: "",
      loading: false
    };
  },
  methods: {
    ...mapActions(["action_auth"]),
    validate() {
      if (this.validateEmail(this.email)) {
        this.send();
      } else {
        this.$alert("Preencha corretamente o campo solicitado");
      }
    },
    send() {
      // this.loading = true;
      // this.action_auth({ email: this.email, password: this.password })
      //   .then((response) => {
      //     this.loading = false;
      //     if (response.status === 200) {
      //       this.$alert("As instruções para reset de senha foram enviadas com sucesso!");
      //     }
      //   })
      //   .catch(() => {
      //     this.$alert("E-mail incorreto");
      //   });
    },
  },
};
</script>

<style scoped>
.forgot-password {
  font-size: 2em;
  width: 25%;
  height: auto;
  padding: 2%;
  font-family: "Metropolis Regular";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.check-register {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
}

.register {
  width: 80%;
  color: var(--darkGreyStey);
  font-size: 0.5em;
  text-align: left;
}

.register:hover {
  color: var(--yellowStey);
  cursor: pointer;
}

.loading {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
}

@media only screen and (max-width: 1024px) {
  .forgot-password {
    font-size: 2em;
    width: 80%;
    height: auto;
    padding: 3%;
    font-family: "Metropolis Regular";
  }
  .check-register {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>