<template>
  <header class="header">
    <my-container>
      <Logo />
    </my-container>
  </header>
</template>

<script>
import MyContainer from './UI/MyContainer.vue';
import Logo from './Logo.vue';
export default {
  components: { MyContainer, Logo },
  name: 'Header',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.header {
  background: $secondary-color;
  padding: 16px 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>