<template>
  <section class="reviews-column">
    <div class="reviews-column__heading">
      <h2 class="reviews-column__title">Суммарный рейтинг</h2>
      <div class="reviews-column__rating">
        <span>{{ amountOfReviews }} отзыв(а/ов)</span>
        <star-rating :rating="totalRating" />
      </div>
    </div>
    <reviews-item
      v-for="review in currentReviews"
      :key="review.id"
      :review="review"
    />
    <button @click="toggleReviews" class="reviews-column__show-more">
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import ReviewsItem from '@/components/reviews/reviewsItem/ReviewsItem.vue';

export default {
  name: 'reviews-column',
  components: {
    ReviewsItem,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },
    amountOfReviews() {
      return this.reviews.length;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviewsLimit === this.reviews.length
        ? 'Свернуть'
        : 'Читать ещё...';
    },
  },
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
        return;
      }
      this.reviewsLimit = this.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
.reviews-column {
  margin-top: 20px;
  background: $card-bg;
  padding: 0 2px;
  &__heading {
    padding: 20px 20px 10px;
  }
  &__title {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
    font-size: 16px;
  }
}
</style>