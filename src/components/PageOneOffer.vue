<template>
  <div class="offerAndMonster" v-if="offer && HasResponse">
    <OfferGlobal :offer="offer"></OfferGlobal>
    <MonsterGlobal :offer="offer"></MonsterGlobal>


  </div>
  <button v-on:click="reload()">Générer une autre offre</button>
</template>
  
<script>
import MonsterGlobal from "./MonsterGlobal.vue";
import OfferGlobal from "./OfferGlobal.vue";
import apiService from '../functions/apiService';
export default {
  name: 'PageOneOffer',
  components: {
    OfferGlobal,
    MonsterGlobal,
  },
  data() {
    return {
      offer: this.GETOffer(),
      HasResponse: false
    }
  },
  computed: {
  },
  methods: {

    async GETOffer() {
      try {
        const response = await apiService.get('/getOffer');
        this.offer = response.data;
        this.HasResponse = true;
        console.log(this.offer);
      } catch (error) {
        console.log('Erreur lors de la récupération des données:', error);
      }
    },
    reload() {
      location.reload();
    }
  },

}
</script>
  
<style lang="scss">
.offerAndMonster {
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  max-width: 1000px;
}

button {
  text-align: center;
  width: fit-content;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: auto;
}


@media screen and (min-width: 600px) {
  #app {
    width: 100%;

    main {
      .offerAndMonster {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
      }
    }
  }


}
</style>
  