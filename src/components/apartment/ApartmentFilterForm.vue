<template>
  <form class="form" @submit.prevent="handleSubmit">
    <my-select v-model="city" :options="cities" class="form__select" />
    <my-input v-model="price" type="Number" placeholder="Цена, от" />
    <my-button class="form__submit" type="submit">Подбор жилья</my-button>
  </form>
</template>

<script>
export default {
  name: 'apartment-filter-form',
  data() {
    return {
      city: '',
      price: '',
      cities: [
        { value: '', label: 'Город', selected: true },
        { value: 'Kyiv', label: 'Kyiv' },
        { value: 'Odesa', label: 'Odesa' },
        { value: 'Kharkiv', label: 'Kharkiv' },
        { value: 'Dnipro', label: 'Dnipro' },
        { value: 'Poltava', label: 'Poltava' },
        { value: 'Mariupol', label: 'Mariupol' },
        { value: 'Kherson', label: 'Kherson' },
        { value: 'Lviv', label: 'Lviv' },
      ],
    };
  },
  computed: {},
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>