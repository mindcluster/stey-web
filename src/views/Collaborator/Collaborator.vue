<template>
  <div class="collaborator">
    <LateralMenu />
    <div class="content">
      <div class="page-title">
        <h4>Colaboradores</h4>
      </div>
      <div class="middle">
        <v-card v-if="showLoading" flat solo class="list-loading">
          <DefaultLoading />
        </v-card>
        <ScrollCollaboratorFull v-else :params="this.contributors"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import LateralMenu from "../../components/LateralMenu";
import ScrollCollaboratorFull from "../../components/lists/ScrollCollaboratorFull";
import Footer from "../../components/bars/Footer";
import DefaultLoading from "../../components/loading/DefaultLoading";
import { mapActions } from "vuex";

export default {
  name: "Collaborator",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    ScrollCollaboratorFull,
    Footer,
    DefaultLoading
  },
  data() {
    return {
      showLoading: false,
      contributors: [],
    };
  },
  mounted() {
    this.getCollaborators();
  },
  methods: {
    ...mapActions([
      "action_employee",
    ]),
    getCollaborators() {
      this.showLoading = true;
      this.action_employee().then((response) => {
        this.contributors = response;
        this.showLoading = false;
      })
    },
  },
};
</script>

<style scoped>
.collaborator {
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

.page-title {
  margin-top: 10px;
  font-size: 1.5em;
  color: var(--greyStey);
}

.middle {
  margin-top: 1em;
  height: 40;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
}

.list-loading {
  margin-top: 1em;
  height: 50em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  z-index: 10;
}

@media only screen and (max-width: 1024px) {
  .content {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 100%;
    padding-left: 2em 2em 2em 3em;
  }

  .cards {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
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
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .collaborator {
    width: 100%;
    height: 100%;
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

  .page-title {
    margin-top: 10px;
  }
  
  .middle {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .list-loading {
    margin-top: 1em;
    height: 85%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
  }
}
</style>