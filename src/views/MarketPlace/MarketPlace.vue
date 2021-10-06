<template>
  <div class="settings">
    <LateralMenu />
    <div class="content">
      <div class="page-title">
        <h4>Integrações</h4>
      </div>
        <div class="middle">
            <div>
                <IntegrationCard :params="this.collaborator"/>
            </div>
            <div>
                <AddIntegration/>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import LateralMenu from "../../components/LateralMenu";
import Footer from "../../components/bars/Footer";
import IntegrationCard from "../../components/cards/IntegrationCard";
import AddIntegration from "../../components/inputs/AddIntegration";

export default {
  name: "MarketPlace",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    Footer,
    IntegrationCard,
    AddIntegration,
  },
  data() {
    return {
      collaborator: {
        id: 1,
        name: "Glasdoor",
        cargo: "Diretora de Recursos Humanos",
        value: null,
      },
    };
  },
  mounted() {
    
  },
  methods: {
   
  },
};
</script>

<style scoped>
.settings {
  width: 100%;
  height: auto;
  background-color: var(--lightblueStey);
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
  height: 38em;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.edit-profile {
  width: auto;
  height: 13.5em;
  align-items: center;
}

@media only screen and (max-width: 1024px) {
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
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .settings {
    width: 100%;
    height: auto;
    background-color: var(--lightblueStey);
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

  .start {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
  }

  .cards {
    margin-top: 1em;
    height: 10em;
    display: flex;
    width: auto;
    flex-direction: row;
    justify-content: space-between;
  }

  .page-title {
    margin-top: 10px;
  }

  .edit-profile {
    width: 40%;
    height: 27em;
    align-items: center;
  }
}
</style>