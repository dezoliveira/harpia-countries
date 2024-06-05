<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <div class="container-fluid p-0">
      <nav class="navbar navbar-expand-lg navbar-white bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="@/assets/logo.png" class="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav gap-2">
              <li class="nav-item">
                <RouterLink to="/">Home</RouterLink>
              </li>
              /
              <li class="nav-item">
                <RouterLink to="/maps">Maps</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
/* .navbar-collapse {
  height: 100vh;
} */
.logo {
  width: 32px;
  background-color: aliceblue;
  border-radius: 50%;
}
</style>
