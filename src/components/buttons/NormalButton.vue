<template>
    <v-btn 
      :href="href"
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
  props: [ "text", "color", "buttonClass", "email" ],
  computed: {
    href() {
      let href = 'mailto:'+ this.email;
      if(this.email != null) {
        return href
      } else {
        href=''
        return href
      }
    }
  }
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