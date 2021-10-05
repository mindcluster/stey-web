<template>
  <div class="collaborator">
    <LateralMenu />
    <div class="content">
      <div class="page-title">
        <h4>Colaboradores</h4>
      </div>
      <div class="middle">
        <ScrollCollaboratorFull :params="this.contributors" />
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

export default {
  name: "Collaborator",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    ScrollCollaboratorFull,
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
      entersVsExits: [
        { enters: 238, exits: 134, date: 2000 },
        { enters: 938, exits: 478, date: 2001 },
        { enters: 1832, exits: 1392, date: 2002 },
        { enters: 2092, exits: 2343, date: 2003 },
        { enters: 2847, exits: 2346, date: 2004 },
        { enters: 2576, exits: 2233, date: 2005 },
        { enters: 2524, exits: 2325, date: 2006 },
        { enters: 1648, exits: 2456, date: 2007 },
        { enters: 2479, exits: 2329, date: 2008 },
        { enters: 3200, exits: 2438, date: 2009 },
      ],
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
.collaborator {
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

  .page-title {
    margin-top: 10px;
  }
  
  .middle {
    margin-top: 1em;
    height: 50em;
    margin-bottom: 5em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 10;
  }
}
</style>