<template>
  <v-card class="edit-profile" flat>
    <v-form ref="form" lazy-validation>
      <EmailInput
        @update:value="employee.email = $event"
        ico="mdi-email"
        :label="this.params.email"
        type="text"
      />
      <TextInput
        @update:value="employee.name = $event"
        ico="mdi-account-circle"
        :label="this.params.name"
        type="text"
      />
      <div class="password">
        <PasswordInput
          @update:value="password = $event"
          ico="mdi-key-variant"
          label="Nova senha"
          type="password"
        />
        <PasswordInput
          @update:value="password2 = $event"
          ico="mdi-key-variant"
          label="Confirme a senha"
          type="password"
        />
        <NormalButton
          @click.native="update"
          color="var(--yellowStey)"
          text="Salvar Alterações"
        />
      </div>
    </v-form>
  </v-card>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import NormalButton from "../buttons/NormalButton";
import TextInput from "../inputs/TextInput";
import EmailInput from "../inputs/EmailInput";
import PasswordInput from "../inputs/PasswordInput";
import { mapActions } from "vuex";

export default {
  name: "EditProfile",
  mixins: [globalMethods],
  props: ["params"],
  components: {
    NormalButton,
    TextInput,
    EmailInput,
    PasswordInput,
  },
  data() {
    return {
      employee: {
        email: this.params.email,
        name: this.params.name,
      },
      password: localStorage.getItem("password"),
      password2: localStorage.getItem("password"),
    };
  },
  mounted() {
    
  },
  methods: {
    ...mapActions([
      "action_employeeUpdate"
    ]),
    update() {
      this.action_employeeUpdate({
        employeeId: localStorage.getItem("employee_id"),
        email: this.employee.email,
        name: this.employee.name,
      }).then(() => {
        this.$alert("As informações foram atualizadas com sucesso");
        this.$router.go();
      }).catch(() => {
        this.$alert("Houve um erro durante a atualização. Tente novamente");
      })
    }
  },
};
</script>

<style scoped>
.edit-profile {
  font-size: 2em;
  width: 100%;
  height: auto;
  padding: 3%;
  font-family: "Metropolis Regular";
}

.password {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media only screen and (max-width: 1024px) {
  .edit-profile {
    font-size: 2em;
    width: 100%;
    height: auto;
    padding: 3%;
    font-family: "Metropolis Regular";
  }

  .password {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
</style>