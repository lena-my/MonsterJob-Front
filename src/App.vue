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

html, body{
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #d4cedd;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
}

*{
  font-family: Arial, Helvetica, sans-serif;
}


footer{
  text-align: center;
}
@media screen and (min-width: 600px){
  #app{
    width: 100%;
     main{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
   
  
  }
</style>
