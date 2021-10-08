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
            <h5>{{ this.collaborator.gpn }}</h5>
            <br />
            <h4>Escritório/País</h4>
            <h5>{{ this.collaborator.country }}</h5>
            <br />
            <h4>SMU</h4>
            <h5>
              {{
                this.collaborator.smu === null
                  ? "Não informado"
                  : this.collaborator.smu
              }}
            </h5>
          </div>
          <div>
            <h4>Email</h4>
            <h5>{{ this.collaborator.email }}</h5>
            <br />
            <h4>Gênero</h4>
            <h5>
              {{ this.collaborator.gênero === "M" ? "Masculino" : "Feminino" }}
            </h5>
            <br />
            <h4>Rank</h4>
            <h5>{{ this.collaborator.rank }}</h5>
          </div>
          <div>
            <h4>Salário</h4>
            <h5>$ {{ this.collaborator.salary }}</h5>
            <br />
            <h4>Salário Médio Mercado</h4>
            <h5>$ {{ this.collaboratorInfos.market }}</h5>
            <br />
            <h4>Dependentes</h4>
            <h5>{{ this.collaborator.dependents }}</h5>
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
              :email="this.collaborator.email"
            />
          </div>
          <p>
            <strong>Budget SMU:</strong> $
            {{ this.collaboratorInfos.budget_smu }}
          </p>
          <p>
            <strong>Promotion Score:</strong>
            <br />
            <span class="promotion-score">{{
              this.collaborator.promotion_score
            }}</span
            >/100
          </p>
          <div class="buttons">
            <IncreaseButton :info="this.collaboratorInfos" />
            <NormalButton
              @click.native="validate"
              color="var(--yellowStey)"
              text="Promoção"
            />
          </div>
        </div>
        <div class="second-column">
          <div class="bar-chart">
            <v-card
              v-if="this.employee_use.length === 0"
              flat
              solo
              class="bar-chart-loading"
            >
              <DefaultLoading />
            </v-card>
            <BarChartCurrent
              v-else
              title="Utilização do Colaborador"
              :data="this.employee_use"
              :legend_1="this.collaborator.name"
              legend_2="Demais Colaboradores"
              :current="this.employee_use.employee_use"
            />
          </div>
          <div v-if="this.collaborator.certificates.length === 0" class="certificates-list">
            <ScrollCertificates :params="this.collaborator.certificates" />
          </div>
          <v-card
            v-else
            flat
            solo
            class="certificates-list-loading"
          >
            <DefaultLoading />
          </v-card>
        </div>
        <div class="third-column">
          <div class="cards">
            <InfoCardSmall
              text="Última Promoção"
              :number="this.cards.last_promotion"
              color="color: var(--greyAlert)"
            />
            <InfoCardSmall
              text="Tempo de Empresa"
              :number="this.cards.company_time"
              color="color: var(--greyAlert)"
            />
            <InfoCardSmall
              text="Últimas Férias"
              :number="this.cards.last_vacation"
              color="color: var(--greyAlert)"
            />
          </div>
          <div class="line-chart">
            <v-card
              v-if="this.employee_use.length === 0"
              flat
              solo
              class="bar-chart-loading"
            >
              <DefaultLoading />
            </v-card>
            <BarChartCurrent
              v-else
              title="Nível de Experiência Futura"
              :data="this.futureLevel"
              :legend_1="this.collaborator.name"
              :current="this.futureLevel.future_exp_level"
              legend_2="Demais Colaboradores"
            />
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
import InfoCardSmall from "../../components/cards/InfoCardSmall";
import BarChartCurrent from "../../components/graphs/BarChartCurrent";
import DefaultLoading from "../../components/loading/DefaultLoading";
import ScrollCertificates from "../../components/lists/ScrollCertificates";
import Footer from "../../components/bars/Footer";
import ProfileCard from "../../components/cards/ProfileCard";
import NormalButton from "../../components/buttons/NormalButton";
import IncreaseButton from "../../components/buttons/IncreaseButton";
import { mapActions } from "vuex";

export default {
  name: "CollaboratorDetail",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    InfoCardSmall,
    BarChartCurrent,
    DefaultLoading,
    ScrollCertificates,
    Footer,
    ProfileCard,
    NormalButton,
    IncreaseButton,
  },
  data() {
    return {
      cards: {
        last_promotion: "-",
        company_time: "-",
        last_vacation: "-",
      },
      employee_use: [],
      collaborator: JSON.parse(localStorage.getItem("selected_collaborator")),
      collaboratorInfos: "",
      futureLevel: []
    };
  },
  mounted() {
    this.getCollaborator();
  },
  methods: {
    ...mapActions([
      "action_employeeSalaryInfo",
      "action_employeeId",
      "action_overviewUseEmployee",
      "action_overviewFutureLevelExperience"
    ]),
    getCollaborator() {
      this.action_employeeSalaryInfo({ employeeId: this.collaborator.id }).then(
        (response) => {
          this.collaboratorInfos = response;
        }
      );

      this.action_employeeId({ employeeId: this.collaborator.id }).then(
        (response) => {
          // this.cards.last_promotion = response.last_promotion;
          // this.cards.company_time = response.company_time;
          // this.cards.last_vacation = response.last_vacation;
          this.cards.last_promotion = "-";
          this.cards.company_time = "-";
          this.cards.last_vacation = "-";
          this.collaborator = response;
        }
      );

      this.action_overviewUseEmployee({
        employeeId: this.collaborator.id,
      }).then((response) => {
        this.employee_use = response;
      });

      this.action_overviewFutureLevelExperience({
        employeeId: this.collaborator.id,
      }).then((response) => {
        this.futureLevel = response;
      });
    },
  },
};
</script>

<style scoped>
.collaborator-detail {
  width: 100%;
  height: auto;
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
  align-items: top;
}

.line-chart {
  width: auto;
  height: 25em;
  align-items: center;
  pointer-events: none;
}

.bar-chart {
  width: auto;
  height: 25em;
  align-items: center;
  pointer-events: none;
}

.certificates-list {
  width: auto;
  height: 17em;
  align-items: center;
  pointer-events: none;
}

.bar-chart-loading {
  width: 100%;
  height: 25em;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.promotion-score {
  color: var(--greenAlert);
  font-size: 4em;
}

h4 {
  color: var(--greyStey)
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

  .certificates-list {
    width: auto;
    height: auto;
    align-items: center;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .collaborator-detail {
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
    width: 100%;
    height: 100%;
    padding: 2em;
    padding-left: 5em;
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
    width: 100%;
    height: auto;
    align-items: center;
  }

  .bar-chart {
    width: 100%;
    height: 27em;
    align-items: center;
  }

  .first-column {
    height: 20em;
    width: 18em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .middle {
    margin-top: 1em;
    height: 43em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 10;
  }
}
</style>