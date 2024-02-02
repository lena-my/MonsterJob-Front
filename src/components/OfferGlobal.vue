<template>
    <div class="offerGlobal" v-if="offer">
      <h2>{{ offer.name }}</h2>
      <p>Offre crée le : {{ goodDate }}</p>
      <p>Niveau {{ this.levelName }} accepté</p>
    </div>
</template>
  
<script>
export default {
  name: 'OfferGlobal',
  props:{
    offer: Object
  },
  data(){
    return {levelName: ""}
  },
  computed: {
    goodDate(){
      return this.convertDate(this.offer.date);    }
  },
  methods: {
    convertDate(date){
      return new Date(date).toLocaleDateString("fr");
    },
    
  },
  nameLevel(){
    if(this.offer.level === "D"){
      return this.levelName = "débutant"
    }
    if(this.offer.level === "E"){
      return this.levelName = "expert"
    }
    if(this.offer.level === "S"){
      return this.levelName = "sénior"
    }
    return ""
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
  