<template>
  <my-container>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, descr, price, rating, imgUrl } in items"
        :key="id"
        :description="descr"
        :price="price"
        :rating="rating"
        :imgSrc="imgUrl"
        class="apartments-list__item"
      />
    </div>
  </my-container>
</template>

<script>
import ApartmentsItem from '@/components/apartment/ApartmentsItem.vue';
import MyContainer from '@/components/shared/MyContainer.vue';

export default {
  name: 'ApartmentsList',
  components: {
    ApartmentsItem,
    MyContainer,
  },
  props: {
    items: {
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

  &__item {
    margin-bottom: 30px;
  }
}
</style>