<template>
  <div class="monster-head">
    <div class="monster-extra" v-if="filePathExtra !== ''">
      <img :src="filePathExtra" v-if=" typeExtra == 1" alt="horn" class="horn right">
      <img :src="filePathExtra" v-if=" typeExtra == 1" alt="horn" class="horn left">
      
      <img :src="filePathExtra" v-if=" typeExtra == 2" alt="antenna" class="antenna right">
      <img :src="filePathExtra" v-if=" typeExtra == 2" alt="antenna" class="antenna left">
    </div>
    <div class="monster-eyes">
      <img :src="filePathEye" alt="eye" class="eye right">
      <img v-if="NumberEye >=2" :src="filePathEye" alt="eye" class="eye left">
    </div>
    <img v-if="this.MyMonster.GETisNose()" :src="filePathNose" alt="nose" class="nose">
    <img :src="filePathMouth" alt="mouth" class="mouth">
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      filePathEye: '',
      filePathMouth: '',
      filePathExtra: '',
      typeExtra:0,
      NumberEye:0,
    }
  },
  props: {
    MyMonster: Object,
  },
  methods: {
    getfilePath() {
      return this.MyMonster.GETeye();
    },
  },
  created() {
    this.typeExtra = this.MyMonster.GETtypeExtra();
    this.filePathEye = this.MyMonster.GETeye();
    this.filePathMouth = this.MyMonster.GETmouth();
    this.filePathNose = this.MyMonster.GETnose();
    this.filePathExtra = this.MyMonster.GETextra();
    this.typeExtra = this.MyMonster.GETtypeExtra();
    console.log(this.filePathExtra);
    this.NumberEye = this.MyMonster.GETnumberEye();
  }
};
</script>
<style lang="scss">

.monster-head{
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 50;
  padding-top: 40px;
  .monster-eyes{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    min-height: 50px;
  }
  .monster-extra{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    margin: 0;
    .horn{
      padding: 0 10px;
      position: relative;
      top: 25px;

    }
    .antenna{
      padding: 0 15px;
      position: relative;
      top: 5px;
    }
  }
  .eye{
    padding: 0;
    margin-top: 15px;
  }
  .right{
    transform: scaleX(-1);
  }
  .mouth, .nose{
    padding: 0;
  }
}
</style>
  