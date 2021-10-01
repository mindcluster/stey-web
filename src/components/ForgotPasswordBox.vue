<template>
  <v-card class="login" flat>
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
  name: "LoginBox",
  mixins: [globalMethods],
  components: {
    NormalButton,
    EmailInput,
    DefaultLoading
  },
  data() {
    return {
      email: "",
      password: "",
      remember: false,
      loading: false
    };
  },
  methods: {
    ...mapActions(["action_auth"]),
    validate() {
      if (this.validateEmail(this.email) && this.password.length >= 8) {
        this.login();
      } else {
        this.$alert("Preencha corretamente os campos solicitados");
      }
    },
    login() {
      this.loading = true;
      this.action_auth({ email: this.email, password: this.password })
        .then((response) => {
          this.loading = false;
          if (response.status === 200) {
            localStorage.setItem("access_token", response.data.token);
            localStorage.setItem("teacher_name", response.data.teacher.name);
            localStorage.setItem("teacher_id", response.data.teacher.id);
            localStorage.setItem("password", this.password);
            this.$router.push("home");
          }
        })
        .catch(() => {
          this.$alert("E-mail e/ou senha incorretos");
        });
    },
    redirectRegister() {
      this.$router.push("forgot_password");
    },
  },
};
</script>

<style scoped>
.login {
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
  .login {
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