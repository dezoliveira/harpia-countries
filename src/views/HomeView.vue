<script>
export default {}
</script>

<template>
  <div class="container-fluid hero text-sm-start text-center">
    <img src="@/assets/logo.png" width="400px" height="400px" />
    <div>
      <h1>Bem vindo ao <span class="text-primary">Harpia Countries</span></h1>
      <h4>
        A nossa<span class="text-secondary fs-4"> Harpia </span>vai te ajudar a encontrar o que
        procura
      </h4>
    </div>
    <RouterLink to="/maps">
      <button class="btn btn-lg btn-secondary">Começar</button>
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
</style>
