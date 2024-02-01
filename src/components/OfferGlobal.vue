<template>
  <div>
    <div v-if="offer">
      <h2>{{ offer.name }}</h2>
      <p>Offre crée le : {{ offer.date }}</p>
      <p>Département : {{ offer.department }}</p>
    </div>
  </div>

</template>
  
<script>
import apiService from '../functions/apiService'
export default {
  name: 'OfferGlobal',
  data: () => ({
    offer: {
      id: '',
      name: '',
      level: '',
      date: '',
      department: '',
    }
  }),
  created() {
    this.GETOffer();
  },
  computed: {
  },
  methods: {
    async GETOffer() {

      let listOffer = [];
      console.log(listOffer)
      try {
        const response = await apiService.get();
        this.offer.name = response.data.name
        console.log('name', response.data.offer[0].name);
        this.offer = response.data.offer[0];
        return this.offer

      }
      catch (error) {
        console.log(error)
      }

    },
  }
}
</script>
<style lang="scss">
div {
  text-align: center;
}
</style>
  