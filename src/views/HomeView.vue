<script>
export default {}
</script>

<template>
  <div class="container-fluid hero text-sm-start text-center">
    <img src="@/assets/logo.png" width="400px" height="400px" />
    <div>
      <h1>Bem vindo ao <span class="text-bold">Harpia Countries</span></h1>
      <h4>A nossa harpia vai te ajudar a encontrar o que procura</h4>
    </div>
    <RouterLink to="/maps">
      <button class="btn btn-lg btn-outline-secondary">Começar</button>
    </RouterLink>
  </div>
</template>
<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 15px;
}

.text-bold {
  color: #5d6771;
}
</style>
