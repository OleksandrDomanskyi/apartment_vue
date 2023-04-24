<template>
  <main class="homepage">
    <my-container>
      <ApartmentsFilterForm class="apartments-filter" @submit="filter" />
    </my-container>
    <my-container>
      <ApartmentsList :apartments="filteredApartments">
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
    </my-container>
  </main>
</template>

<script>
import ApartmentsList from '@/components/apartment/ApartmentList.vue';
import ApartmentsItem from '@/components/apartment/ApartmentsItem.vue';
import apartments from '@/components/apartment/apartments';
import ApartmentsFilterForm from '@/components/apartment/ApartmentsFilterForm.vue';

export default {
  name: 'homepage',
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentsFilterForm,
  },
  data() {
    return {
      apartments,
      filters: {
        city: '',
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    logger(value) {
      console.log(value, 'form value');
    },
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter(apartment => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style>
</style>