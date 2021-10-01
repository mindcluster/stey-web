<template>
  <div class="general">
      <Logo />
      <ForgotPasswordBox />
  </div>
</template>

<script>
import ForgotPasswordBox from "../../components/ForgotPasswordBox";
import Logo from "../../components/logo/Logo";

export default {
  name: "ForgotPassword",

  components: {
    ForgotPasswordBox,
    Logo,
  },
};
</script>

<style scoped>
.general {
  width: 100%;
  height: 100%;
  background-color: var(--darkGreyStey);
  background-image: url(../../assets/images/background.png);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

@media only screen and (max-width: 1024px) {
  .general {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
</style>