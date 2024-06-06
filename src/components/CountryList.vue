<template>
  <div class="col-lg-6 col-md-6 col-sm-6">
    <ul class="list-group">
      <li
        v-for="c in this.country"
        :key="c.cioc"
        class="list-group-item list-group-item-action bg-primary"
        @click="handleCountryId(c.cioc)"
      >
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
  props: ['country'],

  methods: {
    handleCountryId(id) {
      this.$emit('get-country', id)
    }
  }
}
</script>

<style scoped></style>
