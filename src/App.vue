<template>
  <HeaderGlobal></HeaderGlobal>
  <OfferGlobal></OfferGlobal>
  <MonsterGlobal></MonsterGlobal>

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
</style>
