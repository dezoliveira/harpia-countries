<template>
  <div class="col-lg-6 col-md-6 col-sm-6">
    <ul v-for="c in this.country" :key="c.cioc" class="list-group">
      <li class="list-group-item list-group-item-action" @click="handleCountryName(c.name.common)">
        {{ c.name.common }}
        <span class="">
          <img :src="c.flags.png ? c.flags.png : ''" width="24px" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['country', 'getValueList'],

  methods: {
    handleCountryName(name) {
      this.$emit('get-country', name)
    }
  }
}
</script>

<style scoped>
li {
  transition: 0.4s ease-out;
}
li:hover {
  cursor: pointer;
}
.list-group-item:hover {
  background-color: #0d6efd;
  color: #fff;
}
</style>
