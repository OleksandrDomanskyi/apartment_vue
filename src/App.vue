<template>
  <div id="app">
    <my-container>
      <ApartmentFilterForm class="apartments-filter" @submit="logger" />
    </my-container>
    <ApartmentsList :apartments="apartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :id="apartment.id"
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
import ApartmentFilterForm from './components/apartment/ApartmentFilterForm.vue';

export default {
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
  },
  data() {
    return {
      apartments,
    };
  },
  methods: {
    logger(value) {
      console.log(value, 'form value');
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
