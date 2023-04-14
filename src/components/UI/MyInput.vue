<template>
  <input v-bind="$attrs" v-on="$listeners" />
</template>

<script>
export default {
  name: 'my-input',
  computed: {
    inputListeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>