<template>
  <div class="monster-head">
    <div class="monster-horns" v-if="this.MyMonster.GETisHorn()">

      <img :src="filePathHorn" alt="horn" class="horn right">
      <img :src="filePathHorn" alt="horn" class="horn left">
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
      filePathHorn: '',
      NumberEye:0
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
    this.filePathEye = this.MyMonster.GETeye();
    this.filePathMouth = this.MyMonster.GETmouth();
    this.filePathNose = this.MyMonster.GETnose();
    this.filePathHorn = this.MyMonster.GEThorn();
    console.log(this.filePathNose);
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
  padding-top: 50px;
  .monster-eyes{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .monster-horns{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    margin: 0;
    img{
      padding: 0 15px;
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
  