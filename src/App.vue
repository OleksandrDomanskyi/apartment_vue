<template>
  <div id="app">
    <my-select v-model="selectedOption" :options="options" />
    <my-input
      v-model="inputData.price"
      name="price"
      type="Number"
      placeholder="Цена, от"
    ></my-input>
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
  components: {
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      apartments,
      selectedOption: '',
      options: [
        { value: '5000', label: '5000' },
        { value: '7000', label: '7000' },
        { value: '10000', label: '10000' },
      ],
      inputData: {
        price: '',
      },
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
