<template>
  <HeaderGlobal></HeaderGlobal>
  <main>
    <div class="offerAndMonster" v-if="offer">
      <OfferGlobal :offer="offer"></OfferGlobal>
      <MonsterGlobal></MonsterGlobal>
    </div>
    <button v-on:click="GETOffer()">Générer une autre offre</button>
  </main>
  <footer>
    <p> &copy; Hackathon {{ dateYear() }}, All Right Reserved</p>
  </footer>
</template>

<script>
import HeaderGlobal from "./components/HeaderGlobal.vue";
import MonsterGlobal from "./components/MonsterGlobal.vue";
import OfferGlobal from "./components/OfferGlobal.vue";
import apiService from './functions/apiService';
export default {
  name: 'App',
  components: {
    HeaderGlobal,
    OfferGlobal,
    MonsterGlobal,
  },
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
    dateYear() {
      const date = new Date();
      const year = date.getFullYear()
      return year;
    },

    async GETOffer() {
      try {
        console.log('Avant appel API', apiService.get('/getOffer'));
        const response = await apiService.get('/getOffer');
        console.log('Après appel API, avant mise à jour de offer');
        this.offer = response.data;
        console.log('Après mise à jour de offer', this.offer);
      } catch (error) {
        console.log('Erreur lors de la récupération des données:', error);
      }
    },

    // GETOffer() {
    //   apiService.get('/getOffer')
    //     .then(response => {
    //       console.log('Après appel API, avant mise à jour de offer');
    //       this.offer = response.data;
    //       console.log('Après mise à jour de offer', this.offer);
    //     })
    //     .catch(error => {
    //       console.log('Erreur lors de la récupération des données:', error);
    //     });
    // }
  },

  created() {

    //recuperer le spritesheet
    console.log('données', this.GETOffer())
    this.GETOffer();
    // this.$store.commit('UPDATEspriteSheet', ['truc']);
    // console.log(this.$store.getters.GETspriteSheet());
  },

}
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #d4cedd;
  overflow: hidden;

  main {
    .offerAndMonster {
      display: flex;
      flex-direction: column;
      justify-content: top;
      align-items: center;
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
  }

}

* {
  font-family: Arial, Helvetica, sans-serif;
}


footer {
  text-align: center;
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
