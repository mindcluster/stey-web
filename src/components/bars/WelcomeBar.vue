<template>
  <div class="welcome-bar">Olá, {{ employee_name }}!</div>
</template>

<script>
export default {
  name: "WelcomeBar",
  data() {
    return {
      employee_name: localStorage.getItem("employee_name"),
    };
  },
};
</script>

<style scoped>
.welcome-bar {
  font-family: "Metropolis Regular";
  color: var(--darkGreyStey);
  font-size: 1.3em;
}
</style>