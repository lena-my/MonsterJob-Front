<template>
  <div class="monster-legs">
    <img :src="filePath" alt="leg" class ="leg-right">
    <img :src="filePath" alt="leg" class ="leg-left">
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
    this.filePath = this.MyMonster.GETleg();
  }
};
</script>
<style lang="scss">

.leg-right {
  transform: scaleX(-1);
}
</style>
  