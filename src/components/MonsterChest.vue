<template>
  <div class="monster-chest" >
    <img :src="getfilePath()" alt="chest">
  </div>
</template>
  
<script>
export default {
  props: {
    MyMonster: Object,
  },
  methods: {
    getfilePath() {
      return this.MyMonster.GETchest();
    },
  },

};
</script>
<style lang="scss">
</style>
  