<template>
  <div class="monster-head">
    <img :src="filePathEye" alt="eye" class="eye right">

    <img v-if="NumberEye >=2" :src="filePathEye" alt="eye" class="eye left">
  </div>
  <p></p>
</template>
  
<script>
export default {
  data() {
    return {
      filePathEye: '',
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
  z-index: 50;
  padding-top: 50px;
  .eye{
    padding: 0;
    margin-top: 15px;
  }
  .right{
    transform: scaleX(-1);
  }
}
</style>
  