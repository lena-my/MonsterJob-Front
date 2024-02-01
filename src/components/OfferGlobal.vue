<template>
    <div class="offerGlobal" v-if="offer">
      <h2>{{ offer.name }}</h2>
      <p>Offre crée le : {{ offer.date }}</p>
      <button v-on:click="GETOffer()">Générer une autre offre</button>
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
.offerGlobal {
  text-align: center;
  margin: 5%;
  width: 100%;
  button{
    width: fit-content;
    border-radius: 3px;
    padding: 5px;
    cursor: pointer;
  }
}
@media screen and (min-width: 600px){
  .offerGlobal {
  width: 50%;
  }
}
</style>
  