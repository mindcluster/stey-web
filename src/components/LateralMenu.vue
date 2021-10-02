<template>
  <div class="lateral-menu">
    <v-navigation-drawer absolute permanent expand-on-hover width="250" color="var(--darkGreyStey)">
      <v-list nav dense>
        <v-list-item class="logo">
          <v-list-item-icon>
            <v-img
              src="../assets/images/stey-white-logo-lateral-menu.png"
              height="40"
            ></v-img>
          </v-list-item-icon>
        </v-list-item>

        <v-list-item
          :to="{ name: item.route }"
          link
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-icon>
            <v-icon color="var(--yellowStey)">{{ item.ico }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { ico: "mdi-home", title: "Home", route: "home" },
      { ico: "mdi-account-group", title: "Colaboradores", route: "import" },
      { ico: "mdi-cart-plus", title: "MarketPlace", route: "import" },
      { ico: "mdi-account-group", title: "Configurações", route: "import" },
      { ico: "mdi-logout", title: "Sair", route: "login" },
    ],
  }),
};
</script>

<style scoped>
div {
  color: var(--whiteStey);
  font-family: "Metropolis Regular";
  z-index: 99;
}
</style>