<template>
  <button :type="type" :class="{ btn: true, btn__outlined: outlined }">
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
  position: relative;
  display: inline-block;
  font-size: 18px;
  background: #ff662d;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
  transition: background-color 0.4s, color 0.4s;
  font-family: Montserrat, sans-serif;

  &:hover {
    background: #fff;
    color: #ff662d;
    border: 1px solid #ff662d;
  }

  &__outlined {
    background: none;
    color: #ff662d;
    border: 1px solid #ff662d;
  }

  &__content {
    &--hidden {
      opacity: 0;
    }
  }

  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>