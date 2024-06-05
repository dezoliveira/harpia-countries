<script>
import MainNavbar from '@/components/MainNavbar.vue'
export default {
  components: {
    MainNavbar
  },

  // speedUp
  beforeCreate() {
    this.$store.dispatch('loadCountries')
  }
}
</script>

<template>
  <div>
    <MainNavbar />
  </div>
  <RouterView />
</template>

<style lang="scss">
@import 'assets/custom.scss';
@import 'node_modules/bootstrap/scss/bootstrap.scss';
@import 'node_modules/bootstrap/dist/css/bootstrap.css';

body {
  margin: 0;
}
</style>
