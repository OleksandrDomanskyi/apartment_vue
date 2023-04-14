<template>
  <div id="app">
    <ApartmentsList :items="apartments">
      <template v-slot:title>New Title</template>
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :description="apartment.descr"
          :price="apartment.price"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from './components/apartment/ApartmentList.vue';
import ApartmentsItem from './components/apartment/ApartmentsItem.vue';
import apartments from './components/apartment/apartments';

export default {
  name: 'App',
  components: {
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      apartments,
    };
  },
};
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
