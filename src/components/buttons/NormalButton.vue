<template>
    <v-btn 
      :class="buttonClass"
      :color="color" 
      solo
      depressed
      >
      {{ text }}
    </v-btn>
</template>

<script>
export default {
  name: 'NormalButton',
  props: [ "text", "color", "buttonClass" ]
}
</script>

<style scoped>
* {
  font-family: "Metropolis Bold";
}

.inactive {
  background-color: var(--lightGreyStey) !important;
  cursor: default;
  pointer-events: none;
}
</style>