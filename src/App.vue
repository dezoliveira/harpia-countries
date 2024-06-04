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

<style scoped></style>
