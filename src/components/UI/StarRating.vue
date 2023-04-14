<template>
  <div class="star-rating">
    <span
      v-for="index in starLimit"
      :key="index"
      class="star star--outlined"
    ></span>
    <div class="star-rating__colored" :style="rateWidthStyle">
      <span
        v-for="index in starLimit"
        :key="index"
        class="star star--colored"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'star-rating',
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    rateWidth() {
      return (this.rating / this.starLimit) * 100;
    },
    rateWidthStyle() {
      return `width: ${this.rateWidth}%;`;
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating {
  position: relative;
  display: inline-flex;
  &__colored {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}
.star {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 3px;
  flex-shrink: 0;

  &:first-child {
    margin-left: 0;
  }

  &--colored {
    background: url('/public/img/star-orange.svg') center no-repeat;
  }

  &--outlined {
    background: url('/public/img/star-outlined.svg') center no-repeat;
  }
}
</style>