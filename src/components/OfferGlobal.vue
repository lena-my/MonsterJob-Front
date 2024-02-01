<template>
    <div class="offerGlobal" v-if="offer">
      <h2>{{ offer.name }}</h2>
      <p>Offre crée le : {{ offer.date }}</p>
      <button v-on:click="GETOffer()">Générer une autre offre</button>
    </div>
</template>
  
<script>
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
  computed: {
  },
  methods: {
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
  