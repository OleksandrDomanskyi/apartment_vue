<template>
  <button v-bind:type="type" :class="{ btn: true, btn__outlined: outlined }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  width: 211px;
  height: 60px;

  font-size: 16px;
  line-height: (19px/16px);

  background: #ff662d;
  color: #ffffff;
  border: 1px solid #000000;
  cursor: pointer;

  &__outlined {
    background: none;
    color: #ff662d;
    border: 1px solid #ff662d;
  }
}
</style>