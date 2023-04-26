<template>
  <main class="apartment-page">
    <my-container>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <reviews-column :reviews="reviews" />
        </div>
      </div>
    </my-container>
  </main>
</template>

<script>
import MyContainer from '@/components/UI/MyContainer.vue';
import apartments from '@/components/apartment/apartments';
import ApartmentsMainInfo from '@/components/apartment/ApartmentsMainInfo.vue';
import ApartmentsOwner from '@/components/apartment/ApartmentsOwner.vue';
import ReviewsColumn from '@/components/reviews/ReviewsColumn.vue';
import reviews from '@/components/reviews/reviews.json';

export default {
  name: 'apartment-page',
  components: {
    MyContainer,
    ApartmentsMainInfo,
    ApartmentsOwner,
    ReviewsColumn,
  },
  computed: {
    reviews() {
      return reviews;
    },
    apartment() {
      return apartments.find(
        apartment => apartment.id === this.$route.params.id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>