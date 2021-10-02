<template>
  <div class="marketplace">
    <LateralMenu />
    <div class="content">
      <div class="page-title">
        <h4>Integrações</h4>
      </div>
      <div class="start"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import globalMethods from "../../mixins/globalMethods";
import LateralMenu from "../../components/LateralMenu";
import Footer from "../../components/bars/Footer";

export default {
  name: "MarketPlace",
  mixins: [globalMethods],
  components: {
    LateralMenu,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.marketplace {
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
}

@media only screen and (min-width: 1024px) and (max-width: 1440px) {
  .marketplace {
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

  .page-title {
    margin-top: 10px;
  }
}
</style>