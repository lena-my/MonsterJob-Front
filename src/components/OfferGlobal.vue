<template>
    <div class="offerGlobal" v-if="offer">
      <h2>{{ offer.name }}</h2>
      <p>Offre crée le : {{ goodDate }}</p>
    </div>
</template>
  
<script>
export default {
  name: 'OfferGlobal',
  props:{
    offer: Object
  },
  computed: {
    goodDate(){
      return this.convertDate(this.offer.date);    }
  },
  methods: {
    convertDate(date){
      return new Date(date).toLocaleDateString("fr");
    }
  }
}
</script>
<style lang="scss">
.offerGlobal {
  text-align: center;
  margin: 5%;
  width: 100%;
}
@media screen and (min-width: 600px){
  .offerGlobal {
  width: 50%;
  }
}
</style>
  