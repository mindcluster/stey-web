<template>
  <div class="footer">
    <img src="../../assets/images/ey-logo.png" width="80">
  </div>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--whiteStey);
  color: white;
  text-align: center;
  z-index: 999;
}
</style>