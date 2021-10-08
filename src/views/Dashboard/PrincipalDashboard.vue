<template>
  <div class="principal-dashboard">
    <LateralMenu />
    <div class="content">
      <div class="welcome-bar">
        <WelcomeBar />
      </div>
      <div class="cards">
        <InfoCard
          text="Colaboradores"
          :number="this.cards.contributors"
          color="color: var(--greyAlert)"
        />
        <InfoCard
          text="Entradas"
          :number="this.cards.enters"
          color="color: var(--greenAlert)"
        />
        <InfoCard
          text="Saídas"
          :number="this.cards.exits"
          color="color: var(--orangeAlert)"
        />
        <InfoCard
          text="Promoção"
          :number="this.cards.promotions"
          color="color: var(--blueAlert)"
        />
        <InfoCard
          text="Rotatividade"
          :number="this.cards.rotativity"
          color="color: var(--redAlert)"
        />
      </div>
      <div class="top-bar">
        <BudgetBar :params="this.currentBudget"/>
      </div>
      <div class="start">
        <ScrollPromotions :params="this.contributors" />
      </div>
      <div class="middle">
        <div class="bar-chart">
          <div v-show="!showLoading" class="bar-chart">
            <BarChart
              title="Promoção (%)"
              :data="this.promotions"
              :keyBar="this.keyPromotion"
              :values="this.valuesPromotion"
            />
          </div>
          <v-card v-show="showLoading" flat solo class="bar-chart-loading">
            <DefaultLoading />
          </v-card>
        </div>
        <div v-show="!showLoading" class="contributors-list">
          <ScrollCollaborator :params="this.contributors" />
        </div>
        <v-card
          v-show="showLoading"
          flat
          solo
          class="contributors-list-loading"
        >
          <DefaultLoading />
        </v-card>
      </div>
      <div class="bottom">
        <div v-show="!showLoading" class="line-chart">
          <LineChart
            title="Entradas X Saídas"
            :data="this.entersVsExits"
            legend_1="Entradas"
            legend_2="Saídas"
            :values="this.values"
          />
        </div>
        <v-card v-show="showLoading" flat solo class="bar-chart-loading">
          <DefaultLoading />
        </v-card>
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
        contributors: "-",
        enters: "-",
        exits: "-",
        promotions: "-",
        rotativity: "-",
      },
      entersVsExits: [],
      showLoading: false,
      values: ["entry", "exit"],
      contributors: [
        {
          id: 1,
          name: "Carlos Augusto",
          sl: "Advisory",
          subSl: "Risk",
          rotativity: "99%",
        },
      ],
      promotions: [
        {
          month: "Feb",
          employees: 71,
        },
        {
          month: "Mar",
          employees: 92,
        },
        {
          month: "Apr",
          employees: 79,
        },
      ],
      valuesPromotion: ["employees"],
      keyPromotion: "month",
      currentBudget: ""
    };
  },
  mounted() {
    this.getCards();
  },
  methods: {
    ...mapActions([
      "action_employee",
      "action_overview",
      "action_overviewEntryVsExit",
      "action_overviewPromotion",
      "action_currentBudget"
    ]),
    getCards() {
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

      // this.action_overviewPromotion().then((response) => {
      //   this.promotions = response;
      // });

      this.action_employee().then((response) => {
        this.contributors = response;
      });

      this.action_currentBudget().then((response) => {
        this.currentBudget = response;
      })
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
  margin-top: 2em;
  height: 30em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
}

.bottom {
  margin: 0em 0em 3em 0em;
  height: 30em;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.line-chart {
  width: 100%;
  height: 25em;
  align-items: center;
}

.bar-chart {
  width: 80%;
  height: 25em;
  align-items: center;
  pointer-events: none;
}

.contributors-list {
  width: 50%;
  height: 25em;
  align-items: center;
}

.bar-chart-loading {
  width: 40%;
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
}
</style>