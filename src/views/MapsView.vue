<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
  components: {
    SearchBar
  },

  data() {
    return {
      text: 'default'
    }
  },

  methods: {
    handleInput($event) {
      this.text = $event.target.value
      console.log(this.text)
    }
  }
}
</script>
<template>
  <div class="container p-4">
    <SearchBar @input="handleInput" :input-text="this.text" />
  </div>
</template>
