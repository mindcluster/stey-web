<template>
  <div class="collaborator-detail">
    <LateralMenu />
    <div class="content">
      <div class="page-title">
        <h4>Colaborador</h4>
      </div>
      <div class="start">
        <ProfileCard :params="this.collaborator" />
        <div class="collaborator-infos">
          <div>
            <h4>GPN</h4>
            <h5>BR1636345440</h5>
            <br />
            <h4>Escritório/País</h4>
            <h5>São Paulo, Brazil</h5>
            <br />
            <h4>SMU</h4>
            <h5>IT Advisory</h5>
          </div>
          <div>
            <h4>Email</h4>
            <h5>guilherme@ey.com.br</h5>
            <br />
            <h4>Gênero</h4>
            <h5>Masculino</h5>
            <br />
            <h4>Rank</h4>
            <h5>Manager</h5>
          </div>
          <div>
            <h4>Salário</h4>
            <h5>R$ 15.000,00</h5>
            <br />
            <h4>Salário Médio Mercado</h4>
            <h5>R$ 16.700,00</h5>
            <br />
            <h4>Dependentes</h4>
            <h5>1</h5>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="first-column">
          <h4>Contato</h4>
          <div class="buttons">
            <NormalButton
              @click.native="validate"
              color="var(--greyStey)"
              text="Colaborador"
            />
            <NormalButton
              @click.native="validate"
              color="var(--greyStey)"
              text="Gestor"
            />
          </div>
          <p><strong>Budget SMU:</strong> $ 5,000.00 (0,8%)</p>
          <p>
            <strong>Promotion Score:</strong>
            <br />
            <span style="promotion-score">99</span>/100
          </p>
          <div class="buttons">
            <NormalButton
              @click.native="showModal = true"
              color="var(--yellowStey)"
              text="Aumento"
            />
            <NormalButton
              @click.native="validate"
              color="var(--yellowStey)"
              text="Promoção"
            />
          </div>
        </div>
        <div class="second-column">
          <div class="bar-chart">
            <BarChart title="Promoção (%)" :data="this.promotions" />
          </div>
          <div v-show="!showLoading" class="contributors-list">
            <ScrollCertificates :params="this.contributors" />
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
        <div class="third-column">
          <div class="cards">
            <InfoCardSmall
              text="Última Promoção"
              :number="this.cards.contributors"
              color="color: var(--greyAlert)"
            />
            <InfoCardSmall
              text="Tempo de Empresa"
              :number="this.cards.enters"
              color="color: var(--greyAlert)"
            />
            <InfoCardSmall
              text="Últimas Férias"
              :number="this.cards.exits"
              color="color: var(--greyAlert)"
            />
          </div>
          <div class="line-chart">
            <BarChart title="Promoção (%)" :data="this.promotions" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="increase-modal">
        <IncreaseModal/>
    </div>
    <Footer />
  </div>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import LateralMenu from "../../components/LateralMenu";
import InfoCardSmall from "../../components/cards/InfoCardSmall";
import BarChart from "../../components/graphs/BarChart";
import DefaultLoading from "../../components/loading/DefaultLoading";
import ScrollCertificates from "../../components/lists/ScrollCertificates";
import Footer from "../../components/bars/Footer";
import ProfileCard from "../../components/cards/ProfileCard";
import NormalButton from "../../components/buttons/NormalButton";
import IncreaseModal from "../../components/modals/IncreaseModal";

export default {
  name: "CollaboratorDetail",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    InfoCardSmall,
    BarChart,
    DefaultLoading,
    ScrollCertificates,
    IncreaseModal,
    Footer,
    ProfileCard,
    NormalButton,
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
      showLoading: false,
      values: ["enters", "exits"],
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
          name: "Lorem",
          total: 30,
        },
        {
          name: "Ipsum",
          total: 21,
        },
        {
          name: "Dolor",
          total: 20,
        },
      ],
      rotativity: [
        {
          name: "Lorem",
          total: 30,
        },
        {
          name: "Ipsum",
          total: 21,
        },
        {
          name: "Dolor",
          total: 20,
        },
      ],
      collaborator: {
        id: 1,
        name: "Guilherme Pereira",
        cargo: "Software Engineer",
        value: 50,
      },
      showModal: false
    };
  },
  mounted() {
    this.getCards();
  },
  methods: {
    getCards() {
      this.cards.contributors = 7818;
      this.cards.enters = 231;
      this.cards.exits = 102;
      this.cards.promotions = "23%";
      this.cards.rotativity = "2%";
    },
  },
};
</script>

<style scoped>
.collaborator-detail {
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

.collaborator-infos {
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 12em;
  justify-content: space-between;
  align-items: center;
}

.cards {
  height: 10em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.third-column {
  height: 38em;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.buttons {
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.line-chart {
  width: auto;
  height: 25em;
  align-items: center;
  pointer-events: none;
}

.bar-chart {
  width: auto;
  height: 23.5em;
  align-items: center;
  pointer-events: none;
}

.contributors-list {
  width: auto;
  height: 20em;
  align-items: center;
  pointer-events: none;
}

.bar-chart-loading {
  width: 40%;
  height: 27em;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.increase-modal {
    position: absolute;
    background-color: rgba(36, 36, 36, 0.6);
    width: 100%;
    height: 100%;
    z-index: 9999;
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
    width: 100%;
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

  .third-column {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .buttons {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .collaborator-infos {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    justify-content: space-between;
    align-items: center;
    text-align: center;
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
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .collaborator-detail {
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

  .line-chart {
    width: 55%;
    height: auto;
    align-items: center;
  }

  .bar-chart {
    width: 40%;
    height: 27em;
    align-items: center;
  }
}
</style>