<template>
  <div class="settings">
    <LateralMenu />
    <div class="content">
      <div class="page-title">
        <h4>Configurações</h4>
      </div>
        
      <div class="middle">
        <div class="first-column">
          <ProfileCard :params="this.collaborator" style="margin-bottom: 2em"/>
          <p><v-icon>mdi-office-building-marker</v-icon>{{this.collaborator.country}}</p>
          <p><v-icon>mdi-email</v-icon>{{this.collaborator.email}}</p>
          <p v-if="this.collaborator.dependents === 1"><v-icon>mdi-baby-face-outline</v-icon>{{this.collaborator.dependents}} dependente</p>
          <p v-else><v-icon>mdi-baby-face-outline</v-icon>{{this.collaborator.dependents}} dependentes</p>
        </div>
        <div class="second-column">
          <div class="edit-profile">
            <div class="page-sub-title">
              <h4>Minhas Informações</h4>
            </div>
            <EditProfile :params="this.collaborator"/>
          </div>

          <div
            class="integration-list"
            v-for="integration in integrations"
            :key="integration.id"
          >
            <div class="page-sub-title">
              <h4>Minhas Integrações</h4>
            </div>
            <IntegrationCard :params="integration" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import LateralMenu from "../../components/LateralMenu";
import EditProfile from "../../components/cards/EditProfile";
import Footer from "../../components/bars/Footer";
import ProfileCard from "../../components/cards/ProfileCard";
import IntegrationCard from "../../components/cards/IntegrationCard";
import { mapActions } from "vuex";

export default {
  name: "MyProfile",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    EditProfile,
    Footer,
    ProfileCard,
    IntegrationCard,
  },
  data() {
    return {
      collaborator: {
      },
      integrations: [],
    };
  },
  mounted() {
    this.getProfileInfos();
  },
  methods: {
    ...mapActions([
      "action_integrationMe",
      "action_employeeId"
    ]),
    getProfileInfos() {
      this.action_integrationMe().then((response) => {
        this.integrations = response;
      });

      this.action_employeeId({employeeId: localStorage.getItem('employee_id')}).then((response) => {
        this.collaborator = response;
      });
    },
  },
};
</script>

<style scoped>
.settings {
  width: 100%;
  height: 100%;
  background-color: var(--lightBlueStey);
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 1;
  font-family: "Metropolis Regular";
}

.content {
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 100%;
  padding: 2em 2em 2em 8em;
}

.start {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 12em;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
}

.page-title {
  margin-top: 10px;
  font-size: 1.5em;
  color: var(--greyStey);
}

.page-sub-title {
  margin-bottom: 0.5em;
  font-size: 1.5em;
  color: var(--greyStey);
}

.middle {
  margin-top: 1em;
  height: 38em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
}

.first-column {
  height: 20em;
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.second-column {
  height: 45em;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.edit-profile {
  width: auto;
  height: 10em;
  align-items: center;
}

.integration-list {
  width: 100%;
  height: 20em;
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

@media only screen and (max-width: 1024px) {
  .settings {
    width: 100%;
    height: 180%;
    background-color: var(--lightBlueStey);
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 1;
    font-family: "Metropolis Regular";
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 100%;
    padding-left: 2em 2em 2em 3em;
  }

  .start {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    justify-content: space-between;
    align-items: center;
  }

  .middle {
    margin-top: 1em;
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;
  }

  .first-column {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .second-column {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .integration-list {
    width: 100%;
    height: 20em;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .edit-profile {
    width: auto;
    height: auto;
    align-items: center;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .settings {
    width: 100%;
    height: 120%;
    background-color: var(--lightBlueStey);
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 1;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 100%;
    padding: 2em;
    padding-left: 8em;
  }

  .middle {
    margin-top: 1em;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .first-column {
    height: 20em;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .page-title {
    margin-top: 10px;
  }

  .edit-profile {
    width: 100%;
    height: auto;
    align-items: center;
  }

  .integration-list {
    width: 100%;
    height: auto;
    align-items: center;
    margin: 3em 0em 3em 0em;
  }

  .second-column {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: right;
    margin: 0em 0em 0em 3em;
  }
}
</style>