<template>
  <HeaderGlobal></HeaderGlobal>
  <main>
    <OfferGlobal></OfferGlobal>
    <MonsterGlobal></MonsterGlobal>
  </main>
  <footer>
    <p> &copy; Hackathon {{ dateYear() }}, All Right Reserved</p>
  </footer>
  

</template>

<script>
import HeaderGlobal from "./components/HeaderGlobal.vue";
import MonsterGlobal from "./components/MonsterGlobal.vue";
import OfferGlobal from "./components/OfferGlobal.vue";

export default {
  name: 'App',
  components: {
    HeaderGlobal,
    OfferGlobal,
    MonsterGlobal,
  },
  methods: {
      dateYear() {
        const date = new Date();
        const year = date.getFullYear()
        return year;
      }
    }
}
</script>

<style lang="scss">
h1{
  background-color: blue;

  *{
    color: red;
  }

}
footer{
  text-align: center;
}
</style>
