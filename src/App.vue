<template>
  <HeaderGlobal></HeaderGlobal>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <p> &copy; Hackathon {{ dateYear() }}, All Right Reserved</p>
  </footer>
</template>

<script>
import HeaderGlobal from "./components/HeaderGlobal.vue";
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  components: {
    HeaderGlobal,
    RouterView
  },


  methods: {
    dateYear() {
      const date = new Date();
      const year = date.getFullYear()
      return year;
    },

  }
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
