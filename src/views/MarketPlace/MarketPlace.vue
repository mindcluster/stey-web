<template>
  <div class="market-place">
    <LateralMenu />
    <div class="content">
      <div class="page-title">
        <h4>Integrações</h4>
      </div>
        <div class="middle">
            <div class="integration-list" v-for="integration in integrations" :key="integration.id">
                <IntegrationCard :params="integration"/>
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
import { mapActions } from 'vuex';

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
      integrations: []
    };
  },
  mounted() {
    this.getIntegrations()
  },
  methods: {
    ...mapActions(["action_integration"]),
    getIntegrations(){
      this.action_integration().then((response) => {
        this.integrations = response;
      })
    }
  },
};
</script>

<style scoped>
.market-place {
  width: 100%;
  height: 100%;
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


@media only screen and (max-width: 1024px) {
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
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
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .market-place {
    width: 100%;
    height: 100%;
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

  .integration-list{
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    margin: 0.5em;
  }
}
</style>