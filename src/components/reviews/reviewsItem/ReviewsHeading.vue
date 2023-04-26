<template>
  <div class="reviews-heading">
    <reviews-avatar />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ author }}</span>
      <star-rating :rating="rating" />
    </div>
  </div>
</template>

<script>
import StarRating from '@/components/UI/StarRating.vue';
import ReviewsAvatar from '@/components/reviews/reviewsItem/ReviewsAvatar.vue';
export default {
  components: { StarRating, ReviewsAvatar },
  name: 'reviews-heading',
  props: {
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  display: flex;
  align-items: center;

  &__avatar {
    margin-right: 18px;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }
}
</style>