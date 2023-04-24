<template>
  <main class="apartment-page">
    <my-container>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <ApartmentsOwner
          class="apartment-page__owner"
          :owner="apartment.owner"
        />
      </div>
    </my-container>
  </main>
</template>

<script>
import MyContainer from '@/components/UI/MyContainer.vue';
import apartments from '@/components/apartment/apartments';
import ApartmentsMainInfo from '@/components/apartment/ApartmentsMainInfo.vue';
import ApartmentsOwner from '@/components/apartment/ApartmentsOwner.vue';

export default {
  name: 'apartment-page',
  components: {
    MyContainer,
    ApartmentsMainInfo,
    ApartmentsOwner,
  },
  computed: {
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

  &__owner {
    min-width: 350px;
    margin-left: 30px;
  }
}
</style>