<template>
  <div class="monster-arms">
    <img :src="filePath" alt="arm" class ="arm-right">
    <img :src="filePath" alt="arm" class ="arm-left">
  </div>
</template>
  
<script>
export default {
  
  data() {
    return {
      filePath: '',
    }
  },
  props: {
    MyMonster: Object,
  },
  methods: {
  },
  created() {
    this.filePath = this.MyMonster.GETarm();
  }
};
</script>
<style lang="scss">
  img{
    padding: 50px;
  }

.arm-left{
  transform: rotate(-50deg);

}
.arm-right {
  transform: rotate(50deg) scaleX(-1);
}
</style>
  