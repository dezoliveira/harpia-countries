<script>
export default {
  props: ['inputText', 'selectedValue'],

  data() {}
}
</script>
<template>
  <div class="container-fluid search-wrapper">
    <div class="col col-lg-8 col-md-8 col-sm-12 searchBar">
      <label for="exampleFormControlInput1" class="form-label d-sm-block d-none">Pesquisar:</label>
      <input
        type="text"
        id="countryInput"
        placeholder="Ex: Brazil"
        class="form-control"
        :v-model="inputText"
        :value="selectedValue"
      />
      <button class="btn btn-secondary">
        <i>
          <fa-icon icon="search-location"></fa-icon>
        </i>
      </button>
    </div>
  </div>
</template>
<style scoped>
.search-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.searchBar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

i {
  color: #6826a6;
}
</style>
