<template>
  <div class="principal-dashboard">
    <LateralMenu />
    <div class="content">
      <div class="welcome-bar">
        <WelcomeBar />
      </div>
      <div class="cards">
        <v-card
          v-if="this.cards.contributors === null"
          flat
          solo
          class="card-loading"
        >
          <DefaultLoading />
        </v-card>
        <InfoCard
          v-else
          text="Colaboradores"
          :number="this.cards.contributors"
          color="color: var(--greyAlert)"
        />
        <v-card
          v-if="this.cards.enters === null"
          flat
          solo
          class="card-loading"
        >
          <DefaultLoading />
        </v-card>
        <InfoCard
          v-else
          text="Entradas"
          :number="this.cards.enters"
          color="color: var(--greenAlert)"
        />
        <v-card v-if="this.cards.exits === null" flat solo class="card-loading">
          <DefaultLoading />
        </v-card>
        <InfoCard
          v-else
          text="Saídas"
          :number="this.cards.exits"
          color="color: var(--orangeAlert)"
        />
        <v-card
          v-if="this.cards.promotions === null"
          flat
          solo
          class="card-loading"
        >
          <DefaultLoading />
        </v-card>
        <InfoCard
          v-else
          text="Promoção"
          :number="this.cards.promotions"
          color="color: var(--blueAlert)"
        />
        <v-card
          v-if="this.cards.rotativity === null"
          flat
          solo
          class="card-loading"
        >
          <DefaultLoading />
        </v-card>
        <InfoCard
          v-else
          text="Rotatividade"
          :number="this.cards.rotativity"
          color="color: var(--redAlert)"
        />
      </div>
      <div class="top-bar">
        <BudgetBar :params="this.currentBudget" />
      </div>
      <div class="start">
        <ScrollPromotions :params="this.contributors" />
      </div>
      <div class="middle">
        <v-card
          v-if="this.entersVsExits.length === 0"
          flat
          solo
          class="line-chart-loading"
        >
          <DefaultLoading />
        </v-card>
        <div class="line-chart" v-else>
          <LineChart
            title="Entradas X Saídas"
            :data="this.entersVsExits"
            legend_1="Entradas"
            legend_2="Saídas"
            :values="this.values"
          />
        </div>
        <v-card
          v-if="this.contributors.length === 0"
          flat
          solo
          class="bar-chart-loading"
        >
          <DefaultLoading />
        </v-card>
        <div v-else class="contributors-list">
          <ScrollCollaborator :params="this.contributors" />
        </div>
      </div>
      <div class="bottom">
        <v-card
          v-if="this.promotions.length === 0"
          flat
          solo
          class="bar-chart-loading"
        >
          <DefaultLoading />
        </v-card>
        <div v-else class="bar-chart">
          <BarChart
            title="Promoção (%)"
            :data="this.promotions"
            :keyBar="'month'"
            :values="this.valuesPromotion"
          />
        </div>
        <v-card
          v-if="this.turnover.length === 0"
          flat
          solo
          class="bar-chart-loading"
        >
          <DefaultLoading />
        </v-card>
        <div v-else class="bar-chart">
          <BarChart
            title="Rotatividade"
            :data="this.turnover"
            :keyBar="'date'"
            :values="this.valuesTurnover"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import LateralMenu from "../../components/LateralMenu";
import WelcomeBar from "../../components/bars/WelcomeBar";
import InfoCard from "../../components/cards/InfoCard";
import BarChart from "../../components/graphs/BarChart";
import LineChart from "../../components/graphs/LineChart";
import DefaultLoading from "../../components/loading/DefaultLoading";
import ScrollCollaborator from "../../components/lists/ScrollCollaborator";
import ScrollPromotions from "../../components/lists/ScrollPromotions";
import Footer from "../../components/bars/Footer";
import BudgetBar from "../../components/cards/BudgetBar";
import { mapActions } from "vuex";

export default {
  name: "PrincipalDashboard",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    WelcomeBar,
    InfoCard,
    BarChart,
    LineChart,
    DefaultLoading,
    ScrollCollaborator,
    ScrollPromotions,
    BudgetBar,
    Footer,
  },
  data() {
    return {
      cards: {
        contributors: null,
        enters: null,
        exits: null,
        promotions: null,
        rotativity: null,
      },
      entersVsExits: [],
      values: ["entry", "exit"],
      contributors: [],
      promotions: [],
      valuesPromotion: ["employees"],
      valuesTurnover: ["turnover"],
      turnover: [],
      currentBudget: null,
    };
  },
  mounted() {
    this.getInfos();
  },
  methods: {
    ...mapActions([
      "action_employee",
      "action_overview",
      "action_overviewEntryVsExit",
      "action_overviewPromotion",
      "action_overviewTurnover",
      "action_currentBudget",
    ]),
    getInfos() {
      this.action_overview().then((response) => {
        this.cards.contributors = response.employees;
        this.cards.enters = response.entry;
        (this.cards.exits = response.exit),
          (this.cards.promotions = response.promotion.toFixed(1) + "%");
        this.cards.rotativity = response.turnover.toFixed(1) + "%";
      });

      this.action_overviewEntryVsExit().then((response) => {
        this.entersVsExits = response;
      });

      this.action_overviewPromotion().then((response) => {
        this.promotions = response;
      });

      this.action_overviewTurnover().then((response) => {
        this.turnover = response;
      });

      this.action_employee().then((response) => {
        this.contributors = response;
      });

      this.action_currentBudget().then((response) => {
        this.currentBudget = response;
      });
    },
  },
};
</script>

<style scoped>
.principal-dashboard {
  width: 100%;
  height: auto;
  background-color: var(--lightBlueStey);
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 1;
}

.content {
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 100%;
  padding: 2em 2em 2em 8em;
}

.top-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15em;
  justify-content: space-between;
  align-items: center;
}

.start {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 12em;
  justify-content: space-between;
  align-items: center;
}

.cards {
  margin-top: 1em;
  height: 10em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.welcome-bar {
  margin-top: 10px;
}

.middle {
  margin-top: 1em;
  height: 30em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
}

.bottom {
  margin: 1em 0em 3em 0em;
  height: 25em;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.line-chart {
  width: 50%;
  height: 25em;
  align-items: center;
  pointer-events: none;
}

.bar-chart {
  width: 48%;
  height: 25em;
  align-items: center;
  pointer-events: none;
}

.contributors-list {
  width: 48%;
  height: 27em;
  align-items: center;
}

.bar-chart-loading {
  width: 48%;
  height: 25em;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.line-chart-loading {
  width: 50%;
  height: 27em;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.contributors-list-loading {
  width: 40%;
  height: 27em;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.card-loading {
  width: 20em;
  height: auto;
  font-family: "Metropolis Regular";
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
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

  .cards {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }

  .middle {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }

  .bottom {
    height: 60em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }

  .line-chart {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
  }

  .bar-chart {
    width: auto;
    height: auto;
    align-items: center;
  }

  .bar-chart-loading {
    width: auto;
    height: auto;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .contributors-list {
    width: auto;
    height: auto;
    align-items: center;
  }

  .contributors-list-loading {
    width: auto;
    height: auto;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .principal-dashboard {
    width: 100%;
    height: auto;
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

  .top-bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10em;
    justify-content: space-between;
    align-items: center;
  }

  .start {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 15em;
    justify-content: space-between;
    align-items: center;
  }

  .cards {
    margin-top: 1em;
    height: 10em;
    margin-bottom: 2em;
    display: flex;
    width: auto;
    flex-direction: row;
    justify-content: space-between;
  }

  .welcome-bar {
    margin-top: 10px;
  }

  .middle {
    margin-top: 1em;
    height: 28em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 10;
  }

  .bottom {
    margin-top: 1em;
    height: 25em;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .line-chart {
    width: 33em;
    height: auto;
    align-items: center;
  }

  .bar-chart {
    width: 37em;
    height: 25em;
    align-items: center;
  }

  .contributors-list {
    width: 40em;
    height: 27.4em;
    align-items: center;
  }

  .card-loading {
    width: 14em;
    height: auto;
    font-family: "Metropolis Regular";
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>