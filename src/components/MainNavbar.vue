<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <div class="container-fluid p-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="@/assets/logo.png">Brand</a>
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
</style>
