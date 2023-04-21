<template>
  <my-container>
    <slot name="title"></slot>
    <div class="apartments-list">
      <template v-for="apartment in apartments" :key="apartment.id">
        <slot name="apartment" :apartment="apartment"></slot>
      </template>
    </div>
  </my-container>
</template>

<script>
export default {
  name: 'ApartmentsList',
  components: {},
  props: {
    apartments: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>