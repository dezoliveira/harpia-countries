<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <main>
    <div class="greetings">
      <h1 class="green">{{ msg }}</h1>
    </div>
  </main>
</template>

<style scoped></style>
